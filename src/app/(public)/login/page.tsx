'use client'
import { useLoginModel } from "./login.model";
import LoginView from "./login.view";


export default function Login() {
  const methods = useLoginModel()
  return (
    <>
      <title>Login</title>
      <LoginView {...methods} />
    </>
  )
}
