import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssHeader = css({
  color: 'white',
  zIndex: 200,
  '.logo': {
    marginBottom: 0,
    fontWeight: 800,
    color: COLOR_PRIMARY,
    '>span': {
      fontWeight: 400,
    },
  },
  '.navbar-nav': {
    a: {
      textTransform: 'uppercase',
      fontSize: 11,
      letterSpacing: '.2em',
    },
  },
})
