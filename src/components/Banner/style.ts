import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssBanner = css({
  width: '100%',
  height: 240,
  position: 'relative',
  marginBottom: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: 16,
  '.banner-img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '.banner-foreground-img': {
    pointerEvents: 'none',
    height: '215% !important',
    width: 'unset !important',
    aspectRatio: '1',
    transform: 'scaleX(-1)',
    marginTop: '-120px !important',
    '&:after': {
      content: '"designed by Vecteezy.com"',
      color: 'blue',
      fontSize: 16,
      position: 'absolute',
      top: '50%',
    },
  },
  '.headline': {
    position: 'relative',
    zIndex: 200,
    textAlign: 'right',
    color: 'white',
    '> h1': {
      fontSize: 32,
      marginBottom: 2,
      fontWeight: 600,
      opacity: 0.9,
    },
    '> h3': {
      fontSize: 16,
      opacity: 0.72,
    },
  },
  ['@media (max-width: 768px)']: {
    '.headline': {
      marginBottom: 120,
    },
  },
  ['@media (max-width: 576px)']: {
    '.banner-foreground-img': {
      height: `360px !important`,
      marginTop: '0px !important',
    },
  },
})
