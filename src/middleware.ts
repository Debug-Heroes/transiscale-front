import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { env } from './env'

import { getToken } from 'next-auth/jwt'


const publicRoutes = [
  {
    pathname: '/sign-in', whenAuthenticated: 'redirect',
    
  },{
    pathname: '/sign-up', whenAuthenticated: 'redirect',
  }
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in'
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find(response => response.pathname === path)

  const accessToken = await getToken({ req: request, secret: env.NEXTAUTH_SECRET})
  const authToken = accessToken?.accessToken

  if(!authToken && publicRoute){
    return NextResponse.next()
  }

  if(!authToken && !publicRoute){
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

    return NextResponse.redirect(redirectUrl)
  }

  if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = '/'

    return NextResponse.redirect(redirectUrl)
  }

  if(authToken && !publicRoute){
    return NextResponse.next()
  }
  return NextResponse.next()
}
 

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}
