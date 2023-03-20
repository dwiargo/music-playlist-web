import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import withLayout from '@/hocs/withLayout'
import 'bootstrap/dist/css/bootstrap.min.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return <Component {...pageProps} />
}

export default withLayout(App)
