import dynamic from 'next/dynamic'

export default dynamic(import('./view'), { ssr: false })
