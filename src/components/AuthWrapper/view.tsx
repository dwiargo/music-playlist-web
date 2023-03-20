import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'

const AuthWrapper = (props: any) => {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status !== 'loading' && status !== 'authenticated') {
      signIn()
    }
  }, [status])

  return status === 'loading' ? <div>wait for authentication...</div> : props.children
}

export default AuthWrapper
