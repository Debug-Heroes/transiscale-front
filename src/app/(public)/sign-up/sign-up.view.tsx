
import Link from "next/link"
import { Error } from "@components/ui/error"
import Input from "@components/ui/input"
import { Button } from "@components/ui/button"
import { useSignUpModel } from "./sign-up.model"

type SignUpView = ReturnType<typeof useSignUpModel>

export default function SignUpView(methods: SignUpView) {
  const { register, handleSubmit, handleGetAddressWithCEP, handleRegisterEmplooye, errors, isSubmitting } = methods

  console.log(errors)
  return (
    <section className="flex overflow-hidden p-1 md:p-0 justify-center items-center md:grid md:items-stretch md:grid-cols-2 h-screen w-full">
      <div className="hidden md:flex justify-center items-center bg-foreground">
        <strong className="text-9xl -text--primary">TS</strong>
      </div>
      <div className="flex m-4 justify-center items-center w-full">
        <form onSubmit={handleSubmit(handleRegisterEmplooye)} className="flex  overflow-y-auto scrollbar max-h-screen flex-col shadow-md gap-3 bg-foreground py-8 px-8 w-full  max-w-[580px] rounded-md">
          <h2 className="text-2xl font-extrabold">Cadastre sua conta</h2>
          <label className="-mb-2" htmlFor="name">Nome</label>
          <Input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Digite seu nome"
            error={!!errors?.name?.message}
          />
          <Error>{errors.name?.message}</Error>

          <label className="-mb-2" htmlFor="email">E-mail</label>
          <Input
            {...register('email')}
            id="email"
            type="email"
            placeholder="E-mail"
            error={!!errors?.email?.message}
          />
          <Error>{errors.email?.message}</Error>
          <label className="-mb-2" htmlFor="email">Contato</label>
          <Input
            {...register('contactNumber')}
            id="contactNumber"
            type="text"
            placeholder="Seu contato"
            error={!!errors?.contactNumber?.message}
          />
          <Error>{errors.contactNumber?.message}</Error>
          <div className="flex justify-between items-center gap-2">
            <div className="flex flex-col gap-2">
              <label className="-mb-2" htmlFor="password">CEP</label>
              <Input
                {...register('cep')}
                id="cep"
                type="text"
                max={9}
                maxLength={9}
                onChange={(event) => handleGetAddressWithCEP(event.target.value)}
                placeholder="Digite seu CEP"
                error={!!errors?.cep?.message}
              />
              <Error>{errors.cep?.message}</Error>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label className="-mb-2" htmlFor="address">Endereço</label>
              <Input
                {...register('address')}
                id="address"
                type="text"
                placeholder="Digite sua rua"
                error={!!errors?.address?.message}
              />
              <Error>{errors.password?.message}</Error>
            </div>
          </div>
          <div className="flex w-full  justify-between items-center gap-2 ">
            <div className="flex flex-col gap-2">
              <label className="-mb-2" htmlFor="number">Número</label>
              <Input
                {...register('number')}
                id="number"
                type="text"
                placeholder="Digite o número da casa"
                error={!!errors?.number?.message}
              />
              <Error>{errors.number?.message}</Error>
            </div>
            <div className="flex flex-col gap-2">
              <label className="-mb-2" htmlFor="state">Estado</label>
              <Input
                {...register('state')}
                id="state"
                type="text"
                placeholder="Digite seu estado"
                error={!!errors?.state?.message}
              />
              <Error>{errors.state?.message}</Error>
            </div>
            <div className="flex  flex-col gap-2">
              <label className="-mb-2" htmlFor="municipality">Município</label>
              <Input
                {...register('municipality')}
                id="municipality"
                type="text"
                placeholder="Digite seu município"
                error={!!errors?.municipality?.message}
              />
              <Error>{errors.municipality?.message}</Error>
            </div>
          </div>


          <label className="-mb-2" htmlFor="password">Senha</label>
          <Input
            {...register('password')}
            id="password"
            type="password"
            placeholder="Digite sua senha"
            error={!!errors?.password?.message}
          />
          <Error>{errors.password?.message}</Error>

          <label className="-mb-2" htmlFor="confirmPassword">Confirme a sua senha</label>
          <Input
            {...register('confirmPassword')}
            id="confirmPassword"
            type="password"
            placeholder="Confirmar sua senha"
            error={!!errors?.confirmPassword?.message}
          />
          <Error>{errors.confirmPassword?.message}</Error>
          <span className="text-xs my-3 text-right">Possui uma conta? <Link className="-text--primary" href={'/sign-in'}>Faça login</Link></span>
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Cadastrar

          </Button>
        </form>
      </div>

    </section>
  )
}
