<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace App\Controller\Shop;

use FOS\RestBundle\View\View;
use Sylius\Component\Resource\ResourceActions;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfiguration;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
use Sylius\Bundle\UserBundle\Form\Model\PasswordReset;
use Sylius\Bundle\UserBundle\Form\Model\PasswordResetRequest;
use Sylius\Bundle\UserBundle\Form\Type\UserRequestPasswordResetType;
use Sylius\Bundle\UserBundle\UserEvents;
use Sylius\Component\User\Model\UserInterface;
use Sylius\Component\User\Repository\UserRepositoryInterface;
use Sylius\Component\User\Security\Generator\GeneratorInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Webmozart\Assert\Assert;


class UserController extends ResourceController
{
    public function updateAction(Request $request): Response
    {
        if ($request->get('_route') === 'sylius_shop_account_profile_update') {
            $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

            $this->isGrantedOr403($configuration, ResourceActions::UPDATE);
            $resource = $this->findOr404($configuration);

            $form = $this->resourceFormFactory->create($configuration, $resource);

            $user = $this->container->get('security.token_storage')->getToken()->getUser();

            if (in_array($request->getMethod(), ['POST', 'PUT', 'PATCH'], true) && $form->handleRequest($request)->isValid()) {
                $resource = $form->getData();

                /** @var ResourceControllerEvent $event */
                $event = $this->eventDispatcher->dispatchPreEvent(ResourceActions::UPDATE, $configuration, $resource);

                if ($event->isStopped() && !$configuration->isHtmlRequest()) {
                    throw new HttpException($event->getErrorCode(), $event->getMessage());
                }
                if ($event->isStopped()) {
                    $this->flashHelper->addFlashFromEvent($configuration, $event);

                    $eventResponse = $event->getResponse();
                    if (null !== $eventResponse) {
                        return $eventResponse;
                    }

                    return $this->redirectHandler->redirectToResource($configuration, $resource);
                }

                try {
                    $this->resourceUpdateHandler->handle($resource, $configuration, $this->manager);
                    $newFormPassword = $form->get('newPassword')->getData();
                    if ($newFormPassword !== null
                    || (gettype($newFormPassword) == 'string' && trim($newFormPassword) !== '')) {
                        $this->handleChangePassword($request, $configuration, $user, $form->get('newPassword')->getData());
                    }
                } catch (UpdateHandlingException $exception) {
                    if (!$configuration->isHtmlRequest()) {
                        return $this->viewHandler->handle(
                            $configuration,
                            View::create($form, $exception->getApiResponseCode())
                        );
                    }

                    $this->flashHelper->addErrorFlash($configuration, $exception->getFlash());

                    return $this->redirectHandler->redirectToReferer($configuration);
                }

                if ($configuration->isHtmlRequest()) {
                    $this->flashHelper->addSuccessFlash($configuration, ResourceActions::UPDATE, $resource);
                }

                $postEvent = $this->eventDispatcher->dispatchPostEvent(ResourceActions::UPDATE, $configuration, $resource);

                if (!$configuration->isHtmlRequest()) {
                    $view = $configuration->getParameters()->get('return_content', false) ? View::create($resource, Response::HTTP_OK) : View::create(null, Response::HTTP_NO_CONTENT);

                    return $this->viewHandler->handle($configuration, $view);
                }

                $postEventResponse = $postEvent->getResponse();
                if (null !== $postEventResponse) {
                    return $postEventResponse;
                }

                return $this->redirectHandler->redirectToResource($configuration, $resource);
            }

            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
            }

            $initializeEvent = $this->eventDispatcher->dispatchInitializeEvent(ResourceActions::UPDATE, $configuration, $resource);
            $initializeEventResponse = $initializeEvent->getResponse();
            if (null !== $initializeEventResponse) {
                return $initializeEventResponse;
            }

            $view = View::create()
                ->setData([
                    'configuration' => $configuration,
                    'metadata' => $this->metadata,
                    'resource' => $resource,
                    $this->metadata->getName() => $resource,
                    'form' => $form->createView(),
                ])
                ->setTemplate($configuration->getTemplate(ResourceActions::UPDATE . '.html'))
            ;

            return $this->viewHandler->handle($configuration, $view);
        }

        return parent::updateAction($request);
    }

    public function requestPasswordResetTokenAction(Request $request): Response
    {
        if($request->getMethod() === 'GET' && $request->get('loadMethod') === null) {
            return $this->redirectToRoute('sylius_shop_account_dashboard');
        }

        /** @var GeneratorInterface $generator */
        $generator = $this->container->get(sprintf('sylius.%s.token_generator.password_reset', $this->metadata->getName()));
        $senderEvent = UserEvents::REQUEST_RESET_PASSWORD_TOKEN;

        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        $passwordReset = new PasswordResetRequest();
        $formType = $this->getSyliusAttribute($request, 'form', UserRequestPasswordResetType::class);
        $form = $this->createResourceForm($configuration, $formType, $passwordReset);
        $template = $this->getSyliusAttribute($request, 'template', null);
        if ($configuration->isHtmlRequest()) {
            Assert::notNull($template, 'Template is not configured.');
        }

        if (in_array($request->getMethod(), ['POST', 'PUT', 'PATCH'], true) && $form->handleRequest($request)->isValid()) {
            $userRepository = $this->repository;

            /** @var UserRepositoryInterface $userRepository */
            Assert::isInstanceOf($userRepository, UserRepositoryInterface::class);

            $user = $userRepository->findOneByEmail($passwordReset->getEmail());
            if (null !== $user) {
                $this->handleResetPasswordRequest($generator, $user, $senderEvent);
            }

            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create(null, Response::HTTP_NO_CONTENT));
            }

            $redirectRoute = $this->getSyliusAttribute($request, 'redirect', null);
            Assert::notNull($redirectRoute, 'Redirect is not configured.');

            if (is_array($redirectRoute)) {
                return $this->redirectHandler->redirectToRoute(
                    $configuration,
                    $configuration->getParameters()->get('redirect')['route'],
                    $configuration->getParameters()->get('redirect')['parameters']
                );
            }

            if ($request->isXMLHttpRequest()) {
                return $this->container->get('templating')->renderResponse(
                    '@SyliusShop/Account/PasswordReset/success.html.twig'
                );
            }
        }

        if ($request->isXMLHttpRequest()) {
            $html = $this->container->get('templating')->renderResponse(
                $template,
                [
                    'form' => $form->createView(),
                ]
            );

            return new Response($html, 400);
        }

        if (!$configuration->isHtmlRequest()) {
            return $this->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
        }

        return $this->container->get('templating')->renderResponse(
            $template,
            [
                'form' => $form->createView(),
            ]
        );
    }

    protected function handleResetPasswordRequest(
        GeneratorInterface $generator,
        UserInterface $user,
        string $senderEvent
    ): void {
        $user->setPasswordResetToken($generator->generate());
        $user->setPasswordRequestedAt(new \DateTime());

        // I have to use doctrine manager directly, because domain manager functions add a flash messages. I can't get rid of them.
        $manager = $this->container->get('doctrine.orm.default_entity_manager');
        $manager->persist($user);
        $manager->flush();

        $dispatcher = $this->container->get('event_dispatcher');
        $dispatcher->dispatch($senderEvent, new GenericEvent($user));
    }

    /**
     * {@inheritdoc}
     */
    protected function addTranslatedFlash(string $type, string $message): void
    {
        $translator = $this->container->get('translator');
        $this->container->get('session')->getFlashBag()->add($type, $translator->trans($message, [], 'flashes'));
    }

    protected function handleChangePassword(
        Request $request,
        RequestConfiguration $configuration,
        UserInterface $user,
        string $newPassword
    ): Response {
        $user->setPlainPassword($newPassword);

        $dispatcher = $this->container->get('event_dispatcher');
        $dispatcher->dispatch(UserEvents::PRE_PASSWORD_CHANGE, new GenericEvent($user));

        $this->manager->flush();

        $dispatcher->dispatch(UserEvents::POST_PASSWORD_CHANGE, new GenericEvent($user));

        if (!$configuration->isHtmlRequest()) {
            return $this->viewHandler->handle($configuration, View::create(null, Response::HTTP_NO_CONTENT));
        }

        $redirectRouteName = $this->getSyliusAttribute($request, 'redirect', null);
        Assert::notNull($redirectRouteName, 'Redirect is not configured.');

        return new RedirectResponse($this->container->get('router')->generate($redirectRouteName));
    }

    private function getSyliusAttribute(Request $request, string $attribute, $default = null)
    {
        $attributes = $request->attributes->get('_sylius');

        return $attributes[$attribute] ?? $default;
    }

    /**
     * @param object $object
     */
    protected function createResourceForm(
        RequestConfiguration $configuration,
        string $type,
        $object
    ): FormInterface {
        if (!$configuration->isHtmlRequest()) {
            return $this->container->get('form.factory')->createNamed('', $type, $object, ['csrf_protection' => false]);
        }

        return $this->container->get('form.factory')->create($type, $object);
    }
}
