import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(5, { message: 'Password must be at least 5 characters long' });

export const formLoginSchema = z.object({
  email: z.email({ message: 'Please enter a valid email address' }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .extend({
    fullName: z.string().min(2, { message: 'Please enter your full name' }),
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
