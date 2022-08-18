/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
interface AnimeDescriptionType {
  description: any;
}
const AnimeDescription: React.FC<AnimeDescriptionType> = (
  props: AnimeDescriptionType,
) => {
  const { description } = props;
  return (
    <div
      css={css`
        overflow-y: hidden;
      `}
    >
      <div
        css={css`
          margin-bottom: auto;
          font-size: 20px;
          color: black;
          margin-top: 5%;
          color: #42032c;
          font-weight: 600;
          font-size: 16px;
          text-align: justify;
          line-height: 24px;
          @media (max-width: 600px) {
            font-size: 12px;
          }
        `}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
    </div>
  );
};

export default AnimeDescription;
