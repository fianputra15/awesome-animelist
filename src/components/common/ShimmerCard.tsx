/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';

const shimeringLoading = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
const ShimmerCard: React.FC = () => {
  return (
    <div
      css={css`
        width: 220px;
        position: relative;
        height: 320px;
        background-size: auto;
        border-top-right-radius: 10px;
        border-left-right-radius: 10px;
        overflow: hidden;
        border-radius: 10px;
        animation-duration: 2.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: ${shimeringLoading};
        animation-timing-function: linear;
        background: #ddd;
        background: linear-gradient(
          to right,
          #f6f6f6 8%,
          #f0f0f0 18%,
          #f6f6f6 33%
        );
        background-size: 1200px 100%;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        @media (max-width: 600px) {
          margin-left: auto;
          margin-right: auto;
        }
      `}
    ></div>
  );
};

export default ShimmerCard;
