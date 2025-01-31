import { api } from "@/lib/axios.external"


interface RegisterRequest {
  name: string
  email: string
  address?: string
  contact_number: string
  password: string
  confirmPassword: string
}

interface RegisterResponse {
  id: string
  name: string
  address: string
  contact_number?: string

}
export async function register(data: RegisterRequest){
  const { name, email, address, contact_number, password, confirmPassword} = data
  const contact = contact_number.replace(/[()\-\s]/g, '') 
  const response = await api.post<RegisterResponse>('/signup', { 
    name, 
    email, 
    address, 
    contact_number: contact, 
    password, 
    confirmPassword
  })

  return response.data
}
