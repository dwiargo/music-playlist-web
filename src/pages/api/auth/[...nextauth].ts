import NextAuth from 'next-auth'
import KeycloakProvider from 'next-auth/providers/keycloak'
import { NextAuthOptions } from 'next-auth'

import { KEYCLOAK_CLIENT_ID, KEYCLOAK_CLIENT_SECRET, KEYCLOAK_REALM, KEYCLOAK_URL } from '@/constant/env'
const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: KEYCLOAK_CLIENT_ID as string,
      clientSecret: KEYCLOAK_CLIENT_SECRET as string,
      issuer: `${KEYCLOAK_URL}/realms/${KEYCLOAK_REALM}` as string,
    }),
  ],
}

export default NextAuth(authOptions)
