/** @jsxImportSource @emotion/react */
import React, { Key } from 'react';
import { css, keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

interface CardType {
  id: Number;
  title: any;
  coverImage: any;
  key: Key | null | undefined;
  description: String;
  episodes: any;
}
const fade = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;
const Card: React.FC<any> = (props: CardType) => {
  const { id, title, key, coverImage, episodes } = props;
  return (
    <Link
      css={css`
        text-decoration: none;
        &:hover {
          filter: brightness(80%);
        }
        @media (max-width: 600px) {
          width: 100%;
          height: auto;
        }
      `}
      key={key}
      to={`/anime/${id}`}
    >
      <div
        css={css`
          width: 220px;
          position: relative;
          height: 320px;
          background-image: url('${coverImage?.large}');
          background-size: auto;
          border-top-right-radius: 10px;
          border-left-right-radius: 10px;
          overflow: hidden;
          border-radius: 10px;
          animation: ${fade} 0.5s;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          @media (max-width: 600px) {
            margin-left: auto;
            margin-right: auto;
          }
        `}
      >
        <div
          css={css`
            top: 8%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            border-radius: 10px;
            display: flex;
            width: auto;
            white-space: nowrap;
            height: auto;
            padding: 10px;
            background: rgba(211, 107, 0, 0.8);
          `}
        >
          <span
            css={css`
              font-size: 14px;
              color: white;
              font-weight: 700;
              margin-top: auto;
              margin-bottom: auto;
            `}
          >
            {episodes} Episodes
          </span>
        </div>
      </div>

      <div
        // css={css`
        //   color: #abb1bb;
        // `}
        css={css`
          color: #42032c;
          @media (max-width: 600px) {
            margin-left: auto;
            margin-right: auto;
          }
        `}
      >
        <h3
          css={css`
            font-size: 20px;
            width: 220px;
            height: 100px;
            font-weight: 800;
            text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
            @media (max-width: 600px) {
              margin-left: auto;
              margin-right: auto;
              height: auto;
              width: 100%;
              text-align: center;
            }
          `}
        >
          {title?.english || title?.romaji}
        </h3>
        <div
          css={css({
            fontSize: '12px',
            lineHeight: '20px',
            width: '90%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          })}
        >
          {/* {description} */}
        </div>
      </div>
      {/* <div
        css={css`
          height: 200px;
          overflow: hidden;
        `}
      >
        <img
          css={css`
            width: 100%;
            object-fit: cover;
          `}
          src={coverImage?.large}
        />
      </div> */}
    </Link>
  );
};

export default Card;
