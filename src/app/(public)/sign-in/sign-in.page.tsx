'use client'

import { useSignInModel } from "./sign-in.model"
import SignInView from "./sign-in.view"


export default function SignInPage() {
  const methods = useSignInModel()
  return <SignInView {...methods} />
}
