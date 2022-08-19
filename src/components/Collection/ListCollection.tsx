/** @jsxImportSource @emotion/react */
import React, { Key } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

interface ListCollectionType {
  key: Key;
  colc: any;
  handleDeleteCollection: any;
}

const ListCollection: React.FC<any> = (props: ListCollectionType) => {
  const { key, colc, handleDeleteCollection } = props;
  return (
    <Link
      css={css`
        width: 100%;
        background: white;
      `}
      to={`/collection/${colc?.key}`}
      key={key}
    >
      <div
        css={css`
          cursor: pointer;
          text-decoration: none;
          position: relative;
          height: 200px;
          border-radius: 10px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          overflow: hidden;
          &:hover {
            filter: brightness(95%);
          }
        `}
      >
        <button
          onClick={(e: any) => handleDeleteCollection(e, colc?.key)}
          type="button"
          css={css`
            align-self: baseline;
            margin-top: auto;
            position: absolute;
            z-index: 100;
            margin-bottom: auto;
            background: transparent;
            cursor: pointer;
            border: none;
            right: 0%;
            text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
            padding: 10px;
            color: white;
            border-radius: 8px;
            font-weight: 700;
            &:hover {
              transform: scale(120%);
            }
          `}
        >
          <span className="material-icons">delete</span>
        </button>

        {isEmpty(JSON.parse(colc?.val)[0]?.Media?.bannerImage) ? (
          <>
            <div
              css={css`
                width: 100%;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                background: white;
                height: 100%;
                filter: brightness(75%);
              `}
            ></div>
            <p
              css={css`
                color: white;
                font-size: 26px;
                font-weight: 700;
                padding: 20px;
                position: absolute;
                top: 2%;
                text-transform: capitalize;
              `}
            >
              {colc?.key}
              <p
                css={css`
                  font-size: 12px;
                  font-weight: 600;
                `}
              >
                Empty Collection
              </p>
            </p>
          </>
        ) : (
          <>
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-position: cover;
                filter: brightness(60%);
                @media (max-width: 600px) {
                  object-position: center;
                  width: auto;
                }
              `}
              src={JSON.parse(colc?.val)[0]?.Media?.bannerImage}
            />
            <p
              css={css`
                font-size: 26px;
                font-weight: 700;
                color: white;
                padding: 20px;
                position: absolute;
                top: 2%;
                text-transform: capitalize;
              `}
            >
              {colc?.key}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListCollection;
