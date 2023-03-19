import { css } from '@emotion/react'

export const cssWithLayout = css({
  display: 'flex',
  '.content-container': {
    flex: 1,
    overflowY: 'hidden',

    '.content-wrapper': {
      paddingLeft: 24 + 240,
      paddingRight: 24,
      minHeight: `calc(100% - 280px)`,
    },
  },
  footer: {
    paddingLeft: 24 + 240,
    paddingRight: 24,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 10,
    a: {
      color: 'blue !important',
    },
  },
})
