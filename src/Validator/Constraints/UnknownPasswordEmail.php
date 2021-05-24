<?php

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class UnknownPasswordEmail extends Constraint
{
    public $message = 'sylius.user.password.unknown_email';

    public function validatedBy(): string
    {
        return static::class.'Validator';
    }
}
