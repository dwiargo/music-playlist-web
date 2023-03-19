import { Toast, ToastContainer } from 'react-bootstrap'
import { Context } from './context'
import { useCallback, useState } from 'react'

type TToast = {
  id: string
  message: string
  isShown?: boolean
}

const Provider = (props: any) => {
  const [data, setData] = useState<TToast[]>([])

  const handlePush = (str: String) => {
    setData((arr: any) => {
      return [
        ...arr,
        {
          id: new Date().getTime().toString(),
          message: str,
        },
      ]
    })
  }

  const handleRemove = useCallback(
    (t: TToast) => {
      const arr: any[] = [...data]
      const item: TToast | null = arr.find((d: any) => d.id === t.id)
      if (item) item.isShown = true
      setData([...arr])
    },
    [data]
  )

  return (
    <Context.Provider
      value={{
        push: handlePush,
      }}
    >
      {props.children}
      <ToastContainer position="top-end">
        {data.map(
          (d: TToast, i: number) =>
            !d.isShown && (
              <Toast key={`toast-${i}`} autohide delay={3000} onClose={() => handleRemove(d)} bg="success">
                <Toast.Body style={{ color: 'white' }}>{d.message}</Toast.Body>
              </Toast>
            )
        )}
      </ToastContainer>
    </Context.Provider>
  )
}

export default Provider
