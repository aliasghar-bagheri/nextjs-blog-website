import { z } from 'zod';

const emailSchema = z
  .string()
  .min(1, { message: 'Email is required' })
  .email({ message: 'Must be a valid email' })
  .transform((email) => email.toLowerCase());

const passwordSchema = z
  .string()
  .min(8, { message: 'password must be at least 8 characters.' })
  .regex(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    'password must contain at least one number, one upercase, and one lowercase letter.'
  );

const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const signupSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: emailSchema,
  password: passwordSchema,
});

const forgotPasswordSchema = z.object({
  email: emailSchema,
});

type SigninSchemaType = z.infer<typeof signinSchema>;
type SignupSchemaType = z.infer<typeof signupSchema>;
type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;
export {
  signinSchema,
  signupSchema,
  forgotPasswordSchema,
  type ForgotPasswordType,
  type SigninSchemaType,
  type SignupSchemaType,
};
