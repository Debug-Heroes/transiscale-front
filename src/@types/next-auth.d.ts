import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string
  }
}


import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
      user: {
        accessToken: string
      }
  }

  interface User {
    accessToken?: string
  }
}

interface User {
  accessToken?: string
}
