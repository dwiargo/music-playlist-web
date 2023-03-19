import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'

const AuthWrapper = (props: any) => {
  const { data: session } = useSession()

  useEffect(() => {
    console.log(session)
    console.log(session)
    // if (!session) signIn()
  }, [])

  return props.children
}

export default AuthWrapper
