import { z } from "zod"

export const SignUpSchema = z.object({
  name: z.string().min(1),
  email: z.string().email({ message: 'Please enter a valid email address' }).trim(),
  password: z.string().min(1, { message: "Password cannot be empty" }).trim(),
  confirmPassword: z.string().min(1, { message: "Password cannot be empty" }).trim(),
  address: z.string(),
  cep: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido. Use o formato 12345-678").max(9),
  number: z.string(),
  state: z.string(),
  municipality: z.string(),
  contactNumber: z.string().min(10).max(11),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não correspondem",
  path: ["confirmPassword"]
}).transform((val, ctx) => {
  console.log(val, ctx)
  const addressComplet = `${val.address}, ${val.number} - ${val.state}, ${val.municipality}`
  return {
    name: val.name,
    email: val.email,
    password: val.password,
    confirmPassword: val.confirmPassword,
    contactNumber: val.contactNumber,
    address: addressComplet


  }
})

export type SignUpSchemaInput = z.input<typeof SignUpSchema>


export type SignUpSchemaOutput = z.output<typeof SignUpSchema>
