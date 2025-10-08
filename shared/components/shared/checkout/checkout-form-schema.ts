import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required no less than 2 symbols' }),
  lastName: z.string().min(2, { message: 'Last name is required no less than 2 symbols' }),
  email: z.string().email().describe('Email is required'),
  phone: z.string().min(9, { message: ' Correct Phone is required (9 symbols)' }),
  address: z.string().min(5, { message: ' Correct address is required' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
