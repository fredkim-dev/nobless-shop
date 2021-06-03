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
use Sylius\Bundle\UserBundle\Form\Model\ChangePassword;
use Sylius\Bundle\UserBundle\Form\Type\UserChangePasswordType;
use Sylius\Component\Resource\ResourceActions;
use Sylius\Bundle\ResourceBundle\Controller\RequestConfiguration;
use Sylius\Bundle\ResourceBundle\Controller\ResourceController;
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
use Sylius\Component\Resource\Exception\UpdateHandlingException;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Webmozart\Assert\Assert;

class UserController extends ResourceController
{
    public function createAction(Request $request): Response
    {
        if ($request->get('_route') === 'sylius_shop_register') {
            // Check if user is connected, redirect to register page if not
            $dashboardRoute = $request->attributes->get('_sylius')['redirect']['route'] ?? null;
            $securityContext = $this->container->get('security.authorization_checker');
            if ($dashboardRoute && $securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
                return new RedirectResponse($this->generateUrl($dashboardRoute));
            }

            $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);
            $this->isGrantedOr403($configuration, ResourceActions::CREATE);
            $newResource = $this->newResourceFactory->create($configuration, $this->factory);
            $form = $this->resourceFormFactory->create($configuration, $newResource);
            if ($request->isMethod('POST') && $form->handleRequest($request)->isValid()) {
                $newResource = $form->getData();
                $event = $this->eventDispatcher->dispatchPreEvent(ResourceActions::CREATE, $configuration, $newResource);
                if ($event->isStopped() && !$configuration->isHtmlRequest()) {
                    throw new HttpException($event->getErrorCode(), $event->getMessage());
                }
                if ($event->isStopped()) {
                    $this->flashHelper->addFlashFromEvent($configuration, $event);
                    $eventResponse = $event->getResponse();
                    if (null !== $eventResponse) {
                        return $eventResponse;
                    }
                    return $this->redirectHandler->redirectToIndex($configuration, $newResource);
                }
                if ($configuration->hasStateMachine()) {
                    $this->stateMachine->apply($configuration, $newResource);
                }
                $this->repository->add($newResource);
                if ($configuration->isHtmlRequest()) {
                    $this->flashHelper->addSuccessFlash($configuration, ResourceActions::CREATE, $newResource);
                }
                $postEvent = $this->eventDispatcher->dispatchPostEvent(ResourceActions::CREATE, $configuration, $newResource);
                if (!$configuration->isHtmlRequest()) {
                    return $this->viewHandler->handle($configuration, View::create($newResource, Response::HTTP_CREATED));
                }
                $postEventResponse = $postEvent->getResponse();
                if (null !== $postEventResponse) {
                    return $postEventResponse;
                }
                return $this->redirectHandler->redirectToResource($configuration, $newResource);
            }
            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
            }
            $initializeEvent = $this->eventDispatcher->dispatchInitializeEvent(ResourceActions::CREATE, $configuration, $newResource);
            $initializeEventResponse = $initializeEvent->getResponse();
            if (null !== $initializeEventResponse) {
                return $initializeEventResponse;
            }
            $view = View::create()
                ->setData([
                    'configuration' => $configuration,
                    'metadata' => $this->metadata,
                    'resource' => $newResource,
                    $this->metadata->getName() => $newResource,
                    'form' => $form->createView(),
                ])
                ->setTemplate($configuration->getTemplate(ResourceActions::CREATE . '.html'))
            ;
            return $this->viewHandler->handle($configuration, $view);
        }
    }

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

    public function verifyAction(Request $request, string $token): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);
        $redirectRoute = $this->getSyliusAttribute($request, 'redirect', null);

        $response = $this->redirectToRoute($redirectRoute);

        /** @var UserInterface|null $user */
        $user = $this->repository->findOneBy(['emailVerificationToken' => $token]);
        if (null === $user) {
            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create($configuration, Response::HTTP_BAD_REQUEST));
            }

            $this->addTranslatedFlash('error', 'sylius.user.verify_email_by_invalid_token');

            return $this->redirectToRoute($redirectRoute);
        }

        $user->setVerifiedAt(new \DateTime());
        $user->setEmailVerificationToken(null);
        $user->enable();

        $eventDispatcher = $this->container->get('event_dispatcher');
        $eventDispatcher->dispatch(UserEvents::PRE_EMAIL_VERIFICATION, new GenericEvent($user));

        $this->manager->flush();

        $eventDispatcher->dispatch(UserEvents::POST_EMAIL_VERIFICATION, new GenericEvent($user));

        if (!$configuration->isHtmlRequest()) {
            return $this->viewHandler->handle($configuration, View::create($user));
        }

        $flashMessage = $this->getSyliusAttribute($request, 'flash', 'sylius.user.verify_email');
        $this->addTranslatedFlash('success', $flashMessage);

        return $response;
    }

    public function requestVerificationTokenAction(Request $request): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);
        $redirectRoute = $this->getSyliusAttribute($request, 'redirect', 'referer');

        $user = $this->getUser();
        if (null === $user) {
            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create($configuration, Response::HTTP_UNAUTHORIZED));
            }

            $this->addTranslatedFlash('notice', 'sylius.user.verify_no_user');

            return $this->redirectHandler->redirectToRoute($configuration, $redirectRoute);
        }

        if (null !== $user->getVerifiedAt()) {
            if (!$configuration->isHtmlRequest()) {
                return $this->viewHandler->handle($configuration, View::create($configuration, Response::HTTP_BAD_REQUEST));
            }

            $this->addTranslatedFlash('notice', 'sylius.user.verify_verified_email');

            return $this->redirectHandler->redirectToRoute($configuration, $redirectRoute);
        }

        /** @var GeneratorInterface $tokenGenerator */
        $tokenGenerator = $this->container->get(sprintf('sylius.%s.token_generator.email_verification', $this->metadata->getName()));
        $user->setEmailVerificationToken($tokenGenerator->generate());

        $this->manager->flush();

        $eventDispatcher = $this->container->get('event_dispatcher');
        $eventDispatcher->dispatch(UserEvents::REQUEST_VERIFICATION_TOKEN, new GenericEvent($user));

        if (!$configuration->isHtmlRequest()) {
            return $this->viewHandler->handle($configuration, View::create(null, Response::HTTP_NO_CONTENT));
        }

        $this->addTranslatedFlash('success', 'sylius.user.verify_email_request');

        return $this->redirectHandler->redirectToRoute($configuration, $redirectRoute);
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

    public function loadPasswordRequestFormAction(Request $request): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        $passwordReset = new PasswordResetRequest();
        $formType = $this->getSyliusAttribute($request, 'form', UserRequestPasswordResetType::class);
        $form = $this->createResourceForm($configuration, $formType, $passwordReset);
        $template = $this->getSyliusAttribute($request, 'template', null);
        if ($configuration->isHtmlRequest()) {
            Assert::notNull($template, 'Template is not configured.');
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

    public function changePasswordAction(Request $request): Response
    {
        $configuration = $this->requestConfigurationFactory->create($this->metadata, $request);

        if (!$this->container->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_REMEMBERED')) {
            throw new AccessDeniedException('You have to be registered user to access this section.');
        }

        $user = $this->container->get('security.token_storage')->getToken()->getUser();

        $changePassword = new ChangePassword();
        $formType = $this->getSyliusAttribute($request, 'form', UserChangePasswordType::class);
        $form = $this->createResourceForm($configuration, $formType, $changePassword);

        if (in_array($request->getMethod(), ['POST', 'PUT', 'PATCH'], true) && $form->handleRequest($request)->isValid()) {
            return $this->handleChangePassword($request, $configuration, $user, $changePassword->getNewPassword());
        }

        if (!$configuration->isHtmlRequest()) {
            return $this->viewHandler->handle($configuration, View::create($form, Response::HTTP_BAD_REQUEST));
        }

        return $this->container->get('templating')->renderResponse(
            $configuration->getTemplate('changePassword.html'),
            ['form' => $form->createView()]
        );
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

        $this->addTranslatedFlash('success', 'sylius.account.change_password_successful');

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
