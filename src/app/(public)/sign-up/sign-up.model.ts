'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignUpSchema, SignUpSchemaInput, SignUpSchemaOutput } from "./sign-up.schema"
import axios, { AxiosError } from "axios"
import { IViaCEP } from "./sign-up.type"
import { useMutation } from "@tanstack/react-query"
import { registerCompanies } from "@infra/http/user/register"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function useSignUpModel(){
  const route = useRouter()
  const { register, handleSubmit,setValue, formState: {
    errors,
    isSubmitting
  }} = useForm<SignUpSchemaInput, SignUpSchemaOutput>({
    resolver: zodResolver(SignUpSchema)
  })

  const { mutate: mutateRegisterCompanies} = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: SignUpSchemaOutput) => registerCompanies({
      ...data,
      contact_number: data.contactNumber
    }),
    onSuccess() {
        toast.success("Você foi cadastrado com sucesso.")
        route.replace('/sign-in')
    },
    onError(error) {
      if(error instanceof AxiosError){
        if(error.response.status === 400){
          toast.error("Houve erro de validação dos dados fornecidos")
          return
        }

        if(error.response.status === 500){
          toast.error("Erro interno no servidor. Tente novamente mais tarde.")
          return
        }
      }
      
    },
  })

  async function handleRegisterEmplooye(data: SignUpSchemaOutput){
    mutateRegisterCompanies(data)
  }

  async function handleGetAddressWithCEP(cep: string){
    const CEPFormat = cep.replace('-', '').trim()
    if(CEPFormat.length === 8){
      const response = await axios.get<IViaCEP>(`https://viacep.com.br/ws/${CEPFormat}/json/`)
      setValue('address', response.data.logradouro)
      setValue('state', response.data.uf)
      setValue('municipality', response.data.localidade)
    }
  }
  return {
    register, handleSubmit, errors,
    isSubmitting, handleRegisterEmplooye, handleGetAddressWithCEP
  }
}
