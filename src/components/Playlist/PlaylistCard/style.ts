import { css } from '@emotion/react'

export const cssPlaylistCard = css({
  position: 'relative',
  padding: 2,
  '.playlist-card': {
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    flexDirection: 'row',
    position: 'relative',
    '.card-icon': {
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 80,
      aspectRatio: '1/1',
      background: '#fafafa',
    },
    '.card-body': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
})
