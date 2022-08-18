/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
interface ChildrenType {
  children: React.ReactNode;
}

const Container: React.FC<ChildrenType> = (props) => {
  const { children } = props;
  return (
    <>
      <header
        css={css({
          padding: '10px',
          background: '#42032C',
          color: 'white',
          fontSize: '10px',
        })}
      >
        <div
          css={css({
            paddingRight: '15%',
            paddingLeft: '15%',
            display: 'flex',
            justifyContent: 'space-between',
          })}
        >
          <Link
            to="/"
            css={css`
              font-size: 24px;
              text-decoration: none;
              font-weight: 800;
              color: white;
            `}
          >
            Anime List.
          </Link>
          <Link
            css={css`
              margin-top: auto;
              margin-bottom: auto;
              font-size: 14px;
              text-decoration: none;
              font-weight: 800;
              color: white;
              &:hover {
                text-decoration: underline;
              }
            `}
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            height: 100%;
            padding: 10px;
            justify-content: center;
            display: flex;
            background: #42032c;
          `}
        >
          <p
            css={css`
              text-align: center;
              font-size: 18px;
              font-weight: 700;
              color: white;
            `}
          >
            AnimeList. &copy;2022
          </p>
        </div>
      </footer>
    </>
  );
};

export default Container;
