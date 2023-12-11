import * as z from 'zod'
import { formatDate } from '../utils/formatDatePrice';

export const schema = z.object({
  description: z.string().min(4),
  price: z.string().min(1).transform(value => Number(value)),
  category: z.string(),
  type: z.string().refine(value => value === 'entry' || value === 'exit'),
  date: z.string().default(() => {
    const date = new Date()
    return formatDate(date)
  }),
});

export type TransactionType = z.infer<typeof schema>;