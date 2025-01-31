import { signIn, TypeAuth } from '../signIn'


 
export async function POST(
  req: Request
) {
  try {
    const { email, password } = await req.json()
    await signIn(TypeAuth.credentials, { email, password })
 
    return Response.json({
      success: true
    },{
      status: 200
    })
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      return Response.json({
        error: 'Invalid credentials.'
      },{
        status: 401
      })
    } else {
      return Response.json({
        error: 'Something went wrong.'
      },{
        status: 401
      })
    }
  }
}
