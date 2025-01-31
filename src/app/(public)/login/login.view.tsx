import Head from "next/head"
import { useLoginModel } from "./login.model"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

type LoginView = ReturnType<typeof useLoginModel>
export const metadata: Metadata = {
  title: 'About',
}
export default function LoginView(methods: LoginView) {
  const { register, handleSubmit, handleSubmitFromLogin, errors, isSubmitting } = methods
  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="My page title" key="title" />

      </Head>
      <section className="flex justify-center items-center md:grid md:items-stretch md:grid-cols-2 h-screen w-full">
        <div className="flex justify-center items-center w-full">
          <form onSubmit={handleSubmit(handleSubmitFromLogin)} className="flex flex-col shadow-md gap-3 bg-background py-8 px-8 w-full  max-w-96 rounded-md">
            <h2 className="text-2xl font-extrabold">Acesse sua conta</h2>
            <label htmlFor="email">E-mail</label>
            <input {...register('email')} id="email" type="email" placeholder="E-mail" className={twMerge("border -border--border bg-background p-2 rounded-sm", errors.email?.message && 'border-red-400')} />
            <span className="h-1 -mt-2 text-xs text-red-400 font-bold">{errors.email?.message}</span>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id="password" type="password" placeholder="Password" className={twMerge("border -border--border  bg-background p-2 rounded-sm", errors.password?.message && 'border-red-400')} />
            <span className="h-1 -mt-2 text-xs text-red-400 font-bold">{errors.password?.message}</span>
            <span className="text-xs my-3">Não tem uma conta? Crie uma!</span>
            <button className="-bg--primary text-background  rounded-md py-1.5 px-2">
              {!isSubmitting ? 'Entrar' : 'Carregando...'}

            </button>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center bg-foreground">
          <strong className="text-9xl -text--primary">TS</strong>
        </div>
      </section>
    </>
  )
}
