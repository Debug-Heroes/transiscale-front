import { z } from "zod";


const envSchema = z.object({
  API_URL: z.string(),
  NEXTAUTH_URL: z.string()
})
console.log(process.env)
const _env = envSchema.safeParse(process.env)
console.log(_env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables.')
}

export const env = _env.data
