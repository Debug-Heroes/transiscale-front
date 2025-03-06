import { env } from "@env/index"
import { authenticate } from "@infra/http/user/authenticate"
import  { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Username", type: "text", },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {  email, password} = credentials
    
        const res = await authenticate({email, password})
        const user =  res.data as any

      

        if (res.status === 200 && user) {
          return user
        }

        return null
      }
    })
  
  ],

  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 7,

  },
  jwt: {
    secret: env.NEXTAUTH_SECRET
  },
  callbacks: {
    async jwt({ token, account, user,}) {
      if (account) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
       session.user.accessToken = token.accessToken
      
      if(new Date(session.expires) < new Date()){
        console.log('refreshToken')
      }
      return session
    }
  },
  pages: {
    signIn: 'auth/sign-in'
  }
  
} as AuthOptions

