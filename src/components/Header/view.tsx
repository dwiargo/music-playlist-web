import { ComponentProps } from 'react'
import { cssHeader } from './style'

type IProps = ComponentProps<'header'>

const Header: React.FC<IProps> = ({ ...props }) => {
  return (
    <header css={cssHeader} {...props}>
      This is Header
    </header>
  )
}

export default Header
