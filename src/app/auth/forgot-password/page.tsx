'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import { AUTH_PAGE_ROUTES } from '@/constants/routes';
import { forgotPasswordSchema, ForgotPasswordType } from '@/lib/validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: 'onTouched',
  });

  const handleForgotPasswordForm = async (values: ForgotPasswordType) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="w-full space-y-5">
        <h1 className="text-3xl text-white">Reset your password</h1>
        <h2 className="text-sm text-gray-400">
          Type in your email and we`ll send you a link to reset your password
        </h2>
        <fieldset disabled={isSubmitting}>
          <form className="w-full space-y-7" onSubmit={handleSubmit(handleForgotPasswordForm)}>
            <RHFTextField
              name="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              register={register}
              errors={errors}
              isRequired
            />
            <Button disabled={!isValid || isSubmitting} className="w-full">
              {isSubmitting ? <span className="spinner"></span> : 'Send'}
            </Button>
          </form>
        </fieldset>

        <Link
          href={AUTH_PAGE_ROUTES.SIGN_IN}
          className="block pt-4 text-center text-sm text-gray-400"
        >
          Have an account ? <span className="text-gray-300 underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
