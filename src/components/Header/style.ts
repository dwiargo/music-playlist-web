import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssHeader = css({
  position: 'sticky',
  top: 0,
  color: 'white',
  backgroundColor: `${COLOR_PRIMARY} !important`,
  display: 'flex !important',
  alignItems: 'center',
  zIndex: 300,
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
  '.navbar-collapse ': {
    flex: 'none !important',
  },
  '.profile': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 16,
    p: {
      marginBottom: 0,
      marginRight: 8,
    },
  },
})
