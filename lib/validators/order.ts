import { z } from 'zod';
export const orderSchema=z.object({customer_name:z.string().min(2),customer_whatsapp:z.string().regex(/^62\d{8,15}$/),customer_note:z.string().max(500).optional(),product_slug:z.string().min(2)});
