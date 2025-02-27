import { z } from "zod"

export const UsersSignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }).trim(),
  password: z.string().min(1, { message: "Password cannot be empty" }).trim(),
})

export type UsersSignInSchemaForm = z.infer<typeof UsersSignInSchema>
