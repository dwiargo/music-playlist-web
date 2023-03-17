import { cssShimmer } from './style'
import { ReactNode } from 'react'

type IProps = {
  className?: string
  children?: ReactNode
}

const Shimmer: React.FC<IProps> = ({ className = '', children }) => {
  return (
    <div className={className} css={cssShimmer}>
      {children}
    </div>
  )
}

export default Shimmer
