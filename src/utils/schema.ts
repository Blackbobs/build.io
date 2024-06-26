import {z} from 'zod'


export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must at least be 6 characters'),
})