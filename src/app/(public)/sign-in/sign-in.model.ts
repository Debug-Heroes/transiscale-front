'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
import { UsersSignInSchema, UsersSignInSchemaForm } from "./sign-in.schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useSignInModel(){
  const router = useRouter();
  const { handleSubmit, register, control, formState: {
    errors,
    isSubmitting
  } } = useForm<UsersSignInSchemaForm>({
    resolver: zodResolver(UsersSignInSchema),
    defaultValues: {
      password: '',
      email: ''
    }
  })
  console.log('dwadawdwa')

  async function handleSubmitFromLogin(data: UsersSignInSchemaForm) {
    const { email, password} = data
   try{
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    })
    console.log(response)
    if(response.ok){
      toast.success("Aguarde! Vcoê será redirecioando")
      router.replace('/')
    }

    if(response.status === 401){
      return toast.error("Usuário ou senha incorreto.")
    }

    if(response.error){
      return toast.error("Aguarde! Vcoê será redirecioando")
    }

   
   }catch(error){
    console.log('error')
    toast.error("Erro de autenticação")
   }
  }

  return {
    handleSubmit, register, control, errors, handleSubmitFromLogin, isSubmitting
  }
}
