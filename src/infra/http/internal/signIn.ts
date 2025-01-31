import { api } from "@/lib/axios.internal"


interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  accessToken: string

}
export async function signIn(data: SignInRequest){
  const { email, password} = data 
  const response = await api.post('auth/login', { 
    email, 
    password, 
  })

  return response.data
}
