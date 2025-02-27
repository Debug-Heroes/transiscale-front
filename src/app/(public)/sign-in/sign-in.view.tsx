
import { useSignInModel } from "./sign-in.model"
import Link from "next/link"
import { Error } from "@components/ui/error"
import Input from "@components/ui/input"
import { Button } from "@components/ui/button"

type SignInView = ReturnType<typeof useSignInModel>

export default function SignInView(methods: SignInView) {
  const { register, handleSubmit, handleSubmitFromLogin, errors, isSubmitting } = methods
  return (
    <section className="flex p-1 md:p-0 justify-center items-center md:grid md:items-stretch md:grid-cols-2 h-screen w-full">
      <div className="flex justify-center items-center w-full">
        <form onSubmit={handleSubmit(handleSubmitFromLogin)} className="flex flex-col shadow-md gap-3 bg-background py-8 px-8 w-full  max-w-96 rounded-md">
          <h2 className="text-2xl font-extrabold">Acesse sua conta</h2>
          <label className="-mb-2" htmlFor="email">E-mail</label>
          <Input
            {...register('email')}
            id="email"
            type="email"
            placeholder="E-mail"
            error={!!errors?.email?.message}
          />
          <Error>{errors.email?.message}</Error>
          <label className="-mb-2" htmlFor="password">Password</label>
          <Input
            {...register('password')}
            id="password"
            type="password"
            placeholder="Password"
            error={!!errors?.email?.message}
          />
          <Error>{errors.password?.message}</Error>
          <span className="text-xs my-3">Não tem uma conta? <Link className="-text--primary" href={'/sign-up'}>Crie uma!</Link></span>
          <Button
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Entrar

          </Button>
        </form>
      </div>
      <div className="hidden md:flex justify-center items-center bg-foreground">
        <strong className="text-9xl -text--primary">TS</strong>
      </div>
    </section>
  )
}
