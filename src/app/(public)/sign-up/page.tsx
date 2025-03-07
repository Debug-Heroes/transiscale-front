'use client'

import { useSignUpModel } from "./sign-up.model"
import SignUpView from "./sign-up.view"

export default function SignUp() {
  const methods = useSignUpModel()
  return <SignUpView {...methods} />
}
