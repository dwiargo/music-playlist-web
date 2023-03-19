import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssSidebar = css({
  position: 'fixed',
  left: 0,
  top: 0,
  backgroundColor: COLOR_PRIMARY,
  width: 240,
  height: '100vh',
  color: '#c5c2f0',
  padding: 16,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    a: {
      '&[data-active = "true"]': {
        fontWeight: '600',
        color: 'white !important',
      },
    },
  },
})
