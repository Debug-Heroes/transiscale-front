'use client'

import { useSignInModel } from "./sign-in.model"
import SignInView from "./sign-in.view"



export default function SignIn() {
  const methods = useSignInModel()
  return (
    <>
      <title>Sign in</title>
      <SignInView {...methods} />
    </>
  )
}
