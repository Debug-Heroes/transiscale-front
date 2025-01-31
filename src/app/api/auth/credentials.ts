import { authenticate } from "@/infra/http/user/authenticate"


interface CredentialsRequest{
  email: string
  password: string
}
export async function credentialsAuth({email, password}: CredentialsRequest){
  const response = await authenticate({
    email, password
  })

  return response
}
