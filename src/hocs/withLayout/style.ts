import { css } from '@emotion/react'

export const cssWithLayout = css({
  display: 'flex',
  '.content-container': {
    flex: 1,
    overflowY: 'hidden',
    '.content-wrapper': {
      paddingLeft: 24 + 240,
      paddingRight: 24,
      minHeight: `calc(100vh - 280px)`,
    },
  },
  '.header': {
    display: 'none !important',
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
  ['@media (max-width: 768px)']: {
    flexDirection: 'column',
    '.sidebar': {
      display: 'none',
    },
    '.content-container': {
      '.content-wrapper': {
        paddingLeft: 16,
        paddingRight: 16,
        '.container': {
          maxWidth: 'unset',
        },
      },
    },
    '.header': {
      display: 'block !important',
    },
    footer: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
})
