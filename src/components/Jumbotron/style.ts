import { css } from '@emotion/react'

export const cssJumbotron = css({
  borderBottom: 'thin solid #f8f8f8',
  paddingTop: 16,
  marginBottom: 16,
  h1: {
    marginBottom: 16,
    zIndex: 1,
    position: 'relative',
  },
})

export const cssJumbotronImage = css({
  width: '100vw',
  height: '50vh',
  left: 0,
  top: 0,
  position: 'absolute',
  objectFit: 'cover',
})
