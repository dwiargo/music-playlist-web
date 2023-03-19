import { MusicDashboard, MusicLibrary2 } from 'iconsax-react'
import { cssLogo } from './style'

export const Logo = () => {
  return (
    <div css={cssLogo}>
      <MusicDashboard variant="Bold" size={32} color="white" />
      <p>
        my<span>playlist</span>
      </p>
    </div>
  )
}

export default Logo
