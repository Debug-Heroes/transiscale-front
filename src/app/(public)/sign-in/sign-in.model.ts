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
    isSubmitting,
  } } = useForm<UsersSignInSchemaForm>({
    resolver: zodResolver(UsersSignInSchema),
    defaultValues: {
      password: '',
      email: ''
    }
  })


  async function handleSubmitFromLogin(data: UsersSignInSchemaForm) {
    const { email, password} = data
   try{
    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/',
    })
  
    if(response.ok){
      router.replace('/')
      toast.success("Aguarde! Você está sendo redirecionado...")
    }

    if(response.status === 401){
      throw new Error('Usuário ou senha incorretos.')
    }

    if(response.error){
      throw new Error('Erro no servidor. Tente novamente mais tarde.')
    }

   
   }catch(error){
    if(error instanceof Error){
      toast.error(error.message)
    }
   
   }
  }

  return {
    handleSubmit, register, control, errors, handleSubmitFromLogin, isSubmitting
  }
}
