import { css } from '@emotion/react'

export const cssSongCard = (landscapeMode: boolean) =>
  css({
    position: 'relative',
    aspectRatio: landscapeMode ? 'unset' : '320/500',
    padding: 2,
    '.song-card': {
      height: '100%',
      width: '100%',
      flexDirection: landscapeMode ? 'row' : 'column',
      '.card-img': {
        width: landscapeMode ? 120 : '100%',
        aspectRatio: '1/1',
        objectFit: 'cover',
        borderTopRightRadius: landscapeMode ? '0' : 'inherit',
        borderBottomRightRadius: landscapeMode ? '0' : 'inherit',
      },
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
