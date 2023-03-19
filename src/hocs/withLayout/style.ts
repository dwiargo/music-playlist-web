import { css } from '@emotion/react'

export const cssWithLayout = css({
  display: 'flex',
  height: '100vh',
  '.content-container': {
    flex: 1,
    overflow: 'auto',
    '.content-wrapper': {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
})
