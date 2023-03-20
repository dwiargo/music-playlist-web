import Header from '@/components/Header'
import { cssWithLayout } from './style'
import Sidebar from '@/components/Sidebar'
import Banner from '@/components/Banner'
import { ToastProvider } from '@/hooks/toast'
import { SessionProvider } from 'next-auth/react'
import AuthWrapper from '@/components/AuthWrapper'

const withLayout = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    return (
      <SessionProvider>
        <ToastProvider>
          <AuthWrapper>
            <main css={cssWithLayout}>
              <Sidebar className="sidebar" />
              <section className="content-container">
                <Header className="header" />
                <Banner />
                <div className="content-wrapper">
                  <WrappedComponent {...props} />
                </div>
                <footer>
                  Image banner designed by{' '}
                  <a href="https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document">
                    Vecteezy.com
                  </a>{' '}
                  & by <a href="https://www.pexels.com/photo/red-vinyl-record-3552948/">Stas Knop</a>
                </footer>
              </section>
            </main>
          </AuthWrapper>
        </ToastProvider>
      </SessionProvider>
    )
  }

  return Wrapper
}

export default withLayout
