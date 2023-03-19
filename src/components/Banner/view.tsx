import { cssBanner } from './style'
import Image from 'next/image'

export const Banner = () => {
  return (
    <div css={cssBanner}>
      <Image className="banner-img" fill src="/pexels-stas-knop-3552948.jpg" alt="Photo by Stas Knop: https://www.pexels.com/photo/red-vinyl-record-3552948/" />
      <div className="headline">
        <h1>Your favourite tunes</h1>
        <h3>all day all night</h3>
      </div>
    </div>
  )
}

export default Banner
