import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  venueId: z.string().min(1),
  date: z.string().min(1),
  startTime: z.string().min(1),
  hours: z.number().min(1),
  guests: z.number().min(1),
  services: z.array(z.string()),
  comment: z.string().optional()
});
