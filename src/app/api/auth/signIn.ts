import { credentialsAuth } from "./credentials"

interface InfoAuth{
  email: string
  password: string
}

export enum TypeAuth {
  credentials = 'credentials',
}

const TypeTheCredentials = {
  credentials: credentialsAuth,

} as const
export async function signIn(type: TypeAuth, data: InfoAuth){
  return TypeTheCredentials[TypeAuth.credentials](data)
}
