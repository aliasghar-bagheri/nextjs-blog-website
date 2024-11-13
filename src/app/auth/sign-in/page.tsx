'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import Spinner from '@/components/ui/Spinner';
import { AUTH_PAGE_ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/AuthProvider';
import { signinSchema, SigninSchemaType } from '@/lib/validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const SigninPage = () => {
  const { signin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SigninSchemaType>({
    resolver: zodResolver(signinSchema),
    mode: 'onTouched',
  });

  const handleSigninForm = async (values: SigninSchemaType) => {
    await signin(values);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="w-full space-y-5">
        <h1 className="text-3xl text-white">Welcome back</h1>
        <h2 className="text-sm text-gray-400">Sign in to your account</h2>
        <fieldset disabled={isSubmitting}>
          <form className="w-full space-y-5" onSubmit={handleSubmit(handleSigninForm)}>
            <RHFTextField
              name="email"
              placeholder="your@email.com"
              type="email"
              errors={errors}
              label="Email"
              register={register}
              isRequired
            />
            <RHFTextField
              name="password"
              placeholder="**********"
              type="password"
              errors={errors}
              label="Password"
              register={register}
              isRequired
            />
            <Link
              href={AUTH_PAGE_ROUTES.FORGOT_PASSWORD}
              className="block text-right text-sm text-gray-400"
            >
              Forgot password ?
            </Link>
            <Button disabled={!isValid || isSubmitting} className="w-full">
              {isSubmitting ? <Spinner /> : 'Sign In'}
            </Button>
          </form>
        </fieldset>
        <Link
          href={AUTH_PAGE_ROUTES.SIGN_UP}
          className="block pt-4 text-center text-sm text-gray-400"
        >
          Don`t have an account ? <span className="text-gray-300 underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
