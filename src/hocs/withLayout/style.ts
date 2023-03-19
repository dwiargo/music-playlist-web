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
      minHeight: `calc(100% - 280px)`,
    },
  },
  footer: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 10,
    a: {
      color: 'blue !important',
    },
  },
})
