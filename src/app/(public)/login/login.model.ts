'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "@/infra/http/internal/signIn";
import { UsersSignInSchema, UsersSignInSchemaForm } from "./login.schema";
import { toast } from "sonner";

export function useLoginModel(){
  const router = useRouter()
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

  const { mutate } = useMutation<string, AxiosError, UsersSignInSchemaForm>({
    mutationFn: ({ email,
      password }: UsersSignInSchemaForm) => {
      return signIn({
        email,
        password
      })
    },
    onSuccess(_data, _, __) {
      toast.success('Você está sendo redirecionado')
      router.push('/')
    },
    onError(error: AxiosError, _variables, _context) {
      if (error.response?.status === 401) {
        toast.error('Email or password incorrect')
      } else {
        toast.error("Unknown error occurred")
      }


    }
  })

  function handleSubmitFromLogin(data: UsersSignInSchemaForm) {
    mutate({
      ...data
    })
  }

  return {
    handleSubmit, register, control, errors, handleSubmitFromLogin, isSubmitting
  }
}
