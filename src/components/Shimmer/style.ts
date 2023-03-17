import { css, keyframes } from '@emotion/react'

const shimmer = keyframes({
  from: {
    backgroundPosition: '-1200px 0',
  },
  to: {
    backgroundPosition: '1200px 0',
  },
})

export const cssShimmer = css({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'transparent',
  borderRadius: 'inherit',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    // animation: `${shimmer} 2.28s infinite`,
    animationDuration: '2.2s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: shimmer,
    animationTimingFunction: 'linear',
    background: `linear-gradient(to right, rgba(0,0,0,0) 8%, rgba(0,0,0,.05) 18%, rgba(0,0,0,0) 50%)`,
    backgroundSize: `1200px 100%`,
  },
})
