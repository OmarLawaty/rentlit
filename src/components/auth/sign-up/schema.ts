import { z } from 'zod';

export const schema = z.object({
  name: z.object({
    first: z.string().min(2, { message: 'First name is required' }),
    last: z.string().min(2, { message: 'Last name is required' }),
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[@$!%*?&]/, { message: 'Password must contain at least one special character' }),
});

export type SchemaType = z.infer<typeof schema>;
