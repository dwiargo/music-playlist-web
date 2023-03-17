import Header from '@/components/Header'

const withLayout = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        <footer>This is footer</footer>
      </>
    )
  }

  return Wrapper
}

export default withLayout
