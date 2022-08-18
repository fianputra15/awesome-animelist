/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
interface AnimeBannerType {
  image: string;
  fadeBanner: any;
}

export const AnimeBanner: React.FC<any> = (props: AnimeBannerType) => {
  const { image, fadeBanner } = props;
  return (
    <div>
      <img
        loading="lazy"
        css={css`
          width: 100%;
          height: 300px;
          animation: ${fadeBanner} 0.5s;
          object-fit: cover;
          filter: brightness(70%);
          @media (max-width: 600px) {
            height: auto;
            top: 60%;
          }
        `}
        src={image}
      />
    </div>
  );
};
