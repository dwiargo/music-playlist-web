import { cssBanner } from './style'
import Image from 'next/image'
import imgBackground from './assets/pexels-stas-knop-3552948.jpg'
import imgForground from './assets/3489_REpWIE1BUiA1MjAtMDg.svg'

export const Banner = () => {
  return (
    <div css={cssBanner}>
      <Image className="banner-img" fill src={imgBackground.src} alt="Photo by Stas Knop: https://www.pexels.com/photo/red-vinyl-record-3552948/" />
      <Image className="banner-foreground-img" fill src={imgForground.src} alt="Vecteezy.com" />

      <div className="headline">
        <h1>Your favourite tunes</h1>
        <h3>all day all night</h3>
      </div>
    </div>
  )
}

export default Banner
