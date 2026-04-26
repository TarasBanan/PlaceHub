import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Введите имя'),
  email: z.string().email('Некорректный email'),
  phone: z.string().min(10, 'Некорректный телефон'),
  comment: z.string().optional()
});
