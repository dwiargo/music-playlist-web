import Header from '@/components/Header'
import { cssWithLayout } from './style'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Banner from '@/components/Banner'
import { ToastProvider } from '@/hooks/toast'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const withLayout = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { pathname } = useRouter()

    // useEffect(() => {
    //   window.scrollTo(0, 0)
    // }, [pathname])

    return (
      <ToastProvider>
        <main css={cssWithLayout}>
          <Sidebar />
          <section className="content-container">
            <Banner />
            <div className="content-wrapper">
              <WrappedComponent {...props} />
            </div>
            <footer>
              Image banner designed by{' '}
              <a href="https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document">Vecteezy.com</a> &
              by <a href="https://www.pexels.com/photo/red-vinyl-record-3552948/">Stas Knop</a>
            </footer>
          </section>
        </main>
      </ToastProvider>
    )
  }

  return Wrapper
}

export default withLayout
