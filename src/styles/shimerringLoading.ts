import { keyframes } from '@emotion/react';

const shimeringLoading = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
export const shimmeringLoading = {
  'animation-duration': '2.2s',
  'animation-fill-mode': 'forwards',
  'animation-iteration-count': 'infinite',
  'animation-name': shimeringLoading,
  'animation-timing-function': 'linear',
  background: 'linear-gradient(to right,#f6f6f6 8%,#f0f0f0 18%,#f6f6f6 33%)',
  'background-size': '1200px 100%',
};
