import { COLOR_PRIMARY } from '@/constant/theme'
import { css } from '@emotion/react'

export const cssHeader = css({
  '.logo': {
    marginBottom: 0,
    fontWeight: 800,
    color: COLOR_PRIMARY,
    '>span': {
      fontWeight: 400,
    },
  },
})
