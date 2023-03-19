import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssBanner = css({
  width: '100%',
  height: 180,
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
  '.headline': {
    position: 'relative',
    zIndex: 200,
    textAlign: 'right',
    color: 'white',
    '> h1': {
      fontSize: 24,
      marginBottom: 2,
      fontWeight: 400,
      opacity: 0.9,
    },
    '> h3': {
      fontSize: 16,
      opacity: 0.72,
    },
  },
})
