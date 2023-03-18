import { css } from '@emotion/react'

export const cssPlaylistCard = css({
  position: 'relative',
  aspectRatio: '3/1.6',
  width: 160,
  padding: 2,
  '.playlist-card': {
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    '.card-body': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
})
