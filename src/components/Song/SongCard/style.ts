import { css } from '@emotion/react'

export const cssSongCard = css({
  position: 'relative',
  aspectRatio: '320/480',
  width: 280,
  padding: 2,
  '.song-card': {
    height: '100%',
    width: '100%',
    '.card-body': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '.bottomsheet': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '*': {
        cursor: 'pointer',
      },
    },
  },
})
