import { createContext, useContext } from 'react'

type Content = {
  push: (str: string) => void
}

export const Context = createContext<Content>({
  push: () => {},
})

export const useToast = () => useContext(Context)
