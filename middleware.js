import { withAuth } from "next-auth/middleware"


export default withAuth({
    pages:{
        signIn: '/Login'
    },
    callbacks:{
        authorized: ({ token }) => !!token,
    },
})

export const config = {
  matcher: ["/dashboard/:path*", "/plans/:path*",],
}