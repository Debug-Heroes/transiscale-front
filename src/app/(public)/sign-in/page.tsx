import { Metadata } from "next"
import SignInPage from "./sign-in.page"

export const metadata: Metadata = {
  title: 'Sign-in'
}
export default function SignIn() {
  return <SignInPage />
}
