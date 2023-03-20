import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssHeader = css({
  position: 'sticky',
  top: 0,
  color: 'white',
  backgroundColor: `${COLOR_PRIMARY} !important`,
  '.logo': {
    marginBottom: 0,
    fontWeight: 800,
    color: COLOR_PRIMARY,
    '>span': {
      fontWeight: 400,
    },
  },
  '.navbar-nav': {
    marginLeft: 16,
    a: {
      textTransform: 'uppercase',
      fontSize: 11,
      letterSpacing: '.2em',
    },
  },
})
