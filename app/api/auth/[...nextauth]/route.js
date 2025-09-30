import Database from "@/Backend/models/Database";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",

        credentials:{
          email: { label: "Email", type: "text", placeholder: "Digite seu email" },
          password: { label: "Senha", type: "password", placeholder: "Digite sua senha" },
        },

        async authorize(credentials){
          const { email, password } = credentials;
          
          if (!email || !password){
            return null;
          }

          if (!/\S+@\S+\.\S+/.test(email)) {
            return null;
          }
          
          const user = await Database.FindUser(email.toLowerCase());
          if (!user){
            return null;
          }

          const IsPasswordCorrect = await bcrypt.compare(password, user.password)
          if (!IsPasswordCorrect){
            return null;
          }   

          return user;
        }
    })
  ],
  pages:{
    signIn: "/Login",
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
        token.cnpj = user.cnpj
        token.name = user.name
        token.email = user.email
        token.phone = user.phone
        token.address = user.address
        token.city = user.city
        token.state = user.state
        token.zipCode = user.zipCode
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.id
      session.user.name = token.name
      session.user.cnpj = token.cnpj
      session.user.email = token.email
      session.user.phone = token.phone
      session.user.address = token.address
      session.user.city = token.city
      session.user.state = token.state
      session.user.zipCode = token.zipCode
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // .env variable secret
})

export { handler as GET, handler as POST }