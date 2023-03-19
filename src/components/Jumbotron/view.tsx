import { ComponentProps } from 'react'
import { cssJumbotron, cssJumbotronImage } from './style'

type IProps = ComponentProps<'div'> & {
  title: string
}

const Jumbotron: React.FC<IProps> = ({ title, ...props }) => {
  return (
    <>
      <div css={cssJumbotron} {...props}>
        <h1>{title}</h1>
      </div>
    </>
  )
}

export default Jumbotron
