import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import withLayout from '@/hocs/withLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SessionProvider, signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import AuthWrapper from '@/components/AuthWrapper'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </SessionProvider>
  )
}

export default withLayout(App)
