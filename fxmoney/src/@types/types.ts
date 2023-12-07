import * as z from 'zod' 

export const schema = z.object({
    description: z.string().min(4),
    price: z.string().min(1).transform( value => Number(value) ),
    category: z.string(),
    type: z.string().refine(value => value === 'entry' || value === 'exit'),
    date: z.date().default(() => new Date()),
  });
  
  export type TransactionType = z.infer<typeof schema>;