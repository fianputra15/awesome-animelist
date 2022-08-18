/** @jsxImportSource @emotion/react */
import React, { Key, useEffect, useState } from 'react';
import Container from '../components/common/Container';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
const Collection: React.FC = () => {
  const [stateCollectionList, setStateCollectionList] = useState([]);
  const listWebStorage = { ...localStorage };
  const listOfCollections: any =
    Object.entries(listWebStorage)?.map((val) => {
      return {
        key: val[0],
        val: val[1],
      };
    }) || [];

  useEffect(() => {
    setStateCollectionList(listOfCollections);
  }, []);

  return (
    <Container>
      <div
        css={css`
          margin-bottom: 40%;
          padding-right: 15%;
          padding-left: 15%;
          @media (max-width: 600px) {
            padding-right: 5%;
            padding-left: 5%;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            justify-items: center;
            margin-top: 10px;
          `}
        >
          <h2
            css={css({
              fontSize: '25px',
            })}
          >
            List Anime
          </h2>
        </div>
        <div
          css={css`
            font-size: 20px;
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            gap: 20px;
          `}
        >
          {stateCollectionList?.map((colc: any, key: Key) => (
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
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Collection;
