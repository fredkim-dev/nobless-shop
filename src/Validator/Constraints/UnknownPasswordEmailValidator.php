<?php
namespace App\Validator\Constraints;

use Sylius\Component\User\Repository\UserRepositoryInterface;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class UnknownPasswordEmailValidator extends ConstraintValidator
{
    /**
     * @var UserRepositoryInterface
     */
    protected $repository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function validate($value, Constraint $constraint)
    {
        $user = $this->repository->findOneByEmail($value);

        if (null === $user) {
            $this->context->buildViolation($constraint->message)
                ->addViolation();
        }
    }
}
