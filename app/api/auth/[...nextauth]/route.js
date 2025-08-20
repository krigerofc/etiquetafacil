import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials:{
          email: { label: "Email", type: "text", placeholder: "Digite seu email" },
          password: { label: "Senha", type: "password", placeholder: "Digite sua senha" },
        },

        async authorize(credentials, req){
          return user// no limite
        }
    })
  ],
  pages:{
    signIn: "/login",
    signOut: "/auth/signOut",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: null // Will disable the new account creation screen
  },
  session:{
    strategy: "jwt", //cryptographic token
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the user id to the token right after signin
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.id
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // .env variable secret
})

export { handler as GET, handler as POST }