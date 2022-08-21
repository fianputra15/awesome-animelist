/** @jsxImportSource @emotion/react */
import React, { Key } from 'react';
import { css, keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

interface CardType {
  id: Number;
  title: any;
  seasonYear: number;
  coverImage: any;
  key: Key | null | undefined;
  isCollection: boolean | undefined;
  handleReleaseCollection: any | undefined;
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
  const {
    id,
    title,
    key,
    coverImage,
    seasonYear,
    handleReleaseCollection,
    isCollection,
  } = props;
  return (
    <Link
      css={css`
        text-decoration: none;
        &:hover {
          filter: ${!isCollection ? 'brightness(80%)' : 'brightness(100%)'};
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
          background-size: cover;
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
            {seasonYear}
          </span>
        </div>
        {isCollection && (
          <button
            onClick={(e: any) => {
              e.preventDefault();
              handleReleaseCollection(e, {
                id,
                title,
              });
            }}
            type="button"
            css={css`
              background: transparent;
              cursor: pointer;
              border: none;
              text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              padding: 10px;
              color: white;
              position: absolute;
              right: 0%;
              bottom: 0%;
              border-radius: 8px;
              width: 100%;
              display: flex;
              z-index: 10;
              align-items: center;
              font-weight: 700;
              background: red;
              &:hover {
                filter: brightness(80%);
              }
            `}
          >
            <div
              css={css`
                margin-left: auto;
                margin-right: auto;
                display: flex;
              `}
            >
              <span
                css={css`
                  margin-top: auto;
                  margin-bottom: auto;
                `}
                className="material-icons"
              >
                delete
              </span>
              <span
                css={css`
                  margin-top: auto;
                  margin-bottom: auto;
                `}
              >
                Release
              </span>
            </div>
          </button>
        )}
      </div>

      <div
        css={css`
          color: #42032c;
          @media (max-width: 600px) {
            margin-left: auto;
            margin-right: auto;
          }
        `}
      >
        <h3
          data-testid="card-anime"
          css={css`
            font-size: 20px;
            width: 220px;
            height: 100px;
            font-weight: 800;
            text-align: center;
            text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
            @media (max-width: 600px) {
              margin-left: auto;
              margin-right: auto;
              height: auto;
              width: 100%;
            }
          `}
        >
          {title?.english || title?.romaji}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
