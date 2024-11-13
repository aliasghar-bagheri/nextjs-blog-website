'use client';

import Button from '@/components/ui/Button';
import RHFTextField from '@/components/ui/RHFTextField';
import { AUTH_PAGE_ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/AuthProvider';
import { signupSchema, SignupSchemaType } from '@/lib/validation/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const SignupPage = () => {
  const { signup } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onTouched',
  });

  const handleSignupForm = async (values: SignupSchemaType) => {
    await signup(values);
  };

  return (
    <div className="w-full max-w-lg">
      <div className="w-full space-y-5">
        <h1 className="text-3xl text-white">Get started</h1>
        <h2 className="text-sm text-gray-400">Create a new account</h2>
        <fieldset disabled={isSubmitting}>
          <form className="w-full space-y-7" onSubmit={handleSubmit(handleSignupForm)}>
            <div className="grid grid-cols-1 items-start space-y-7 sm:grid-cols-2 sm:gap-x-3 sm:space-y-0">
              <RHFTextField
                name="firstname"
                type="text"
                label="Firstname"
                placeholder="John"
                register={register}
                errors={errors}
              />
              <RHFTextField
                name="lastname"
                type="text"
                label="Lastname"
                placeholder="Doe"
                register={register}
                errors={errors}
              />
            </div>
            <RHFTextField
              name="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              register={register}
              errors={errors}
              isRequired
            />
            <RHFTextField
              name="password"
              type="password"
              label="Password"
              placeholder="**********"
              register={register}
              errors={errors}
              isRequired
            />
            <Button type="submit" disabled={!isValid || isSubmitting} className="w-full">
              {isSubmitting ? <span className="spinner"></span> : 'Sign Up'}
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

export default SignupPage;
