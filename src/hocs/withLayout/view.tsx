import Header from '@/components/Header'
import { cssWithLayout } from './style'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import Banner from '@/components/Banner'

const withLayout = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    return (
      <main css={cssWithLayout}>
        <Sidebar />
        <section className="content-container">
          <Banner />
          <div className="content-wrapper">
            <WrappedComponent {...props} />
          </div>
        </section>
      </main>
    )
  }

  return Wrapper
}

export default withLayout
