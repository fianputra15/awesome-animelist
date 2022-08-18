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
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Container;
