/** @jsxImportSource @emotion/react */
import React, { Key, ReactNode } from 'react';
import { isEmpty } from 'lodash';
import Popup from 'reactjs-popup';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
interface AnimeInfoType {
  coverImage: any;
  title: any;
  id: number;
  ratingAmount: any;
  genres: any[];
  episodes: string;
  setStateOpenedFormNew: any;
  listOfCollections: any[];
  stateNewCollection: string;
  handleAddToCollection: Function;
  stateOpenedFormNew: boolean;
  setStateNewCollection: Function;
  handleAddNewCollection: Function;
  handleReleaseCollection: Function;
  data: any[];
  shimeringLoading: any;
  seasonYear: ReactNode;
}
const AnimeInfo: React.FC<AnimeInfoType> = (props: AnimeInfoType) => {
  const {
    id,
    coverImage,
    title,
    ratingAmount,
    genres,
    seasonYear,
    episodes,
    data,
    setStateOpenedFormNew,
    stateOpenedFormNew,
    handleAddToCollection,
    stateNewCollection,
    setStateNewCollection,
    handleReleaseCollection,
    handleAddNewCollection,
    listOfCollections,
    shimeringLoading,
  } = props;
  console.log(shimeringLoading);
  return (
    <div
      css={css`
        display: flex;
        gap: 20px;
      `}
    >
      <div
        css={css`
          flex-basis: 20%;
          @media (max-width: 1024px) {
            flex-basis: 50%;
          }
        `}
      >
        {isEmpty(coverImage?.large) ? (
          <div
            css={css`
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
              height: 250px;
              background-size: 1200px 100%;
              width: 100%;
              margin-top: 20px;
              box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
              border-radius: 10px;
              object-fit: cover;
            `}
          ></div>
        ) : (
          <img
            css={css`
              width: 100%;
              margin-top: 20px;
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
              box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
              border-radius: 10px;
              object-fit: cover;
            `}
            src={coverImage?.large}
          />
        )}
      </div>
      <div
        css={css`
          flex-basis: 80%;
          display: flex;
          @media (max-width: 1024px) {
            flex-basis: 50%;
            font-size: 12px;
          }
        `}
      >
        <div
        //   css={css`
        //     margin-top: 10px;
        //     @media (max-width: 600px) {
        //       margin-top: 20px;
        //     }
        //   `}
        >
          <div
            css={css`
              display: flex;
              width: 100%;
              align-items: center;
              gap: 20px;
            `}
          >
            <div
              css={css`
                color: #42032c;
                margin-top: auto;
                justify-items: center;
                margin-top: 10px;
              `}
            >
              <h1
                css={css`
                  font-size: 45px;
                  @media (max-width: 600px) {
                    font-size: 22px;
                  }
                `}
              >
                {title?.english}
              </h1>
            </div>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;

                gap: 20px;
                width: 400px;
                @media (max-width: 600px) {
                  width: auto;
                }
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-items: center;
                  flex-direction: row;
                  gap: 10px;
                `}
              >
                <span
                  css={css`
                    width: 30%;
                    color: gray;
                  `}
                >
                  Genre{' '}
                </span>
                <span
                  css={css`
                    width: 70%;
                    font-weight: 600;
                  `}
                >
                  {genres?.map((val: any, key: Key) => `${val}, `)}
                </span>
              </div>
              <div
                css={css`
                  display: flex;
                  color: gray;
                  gap: 10px;
                  justify-items: center;
                  flex-direction: row;
                `}
              >
                <span
                  css={css`
                    width: 30%;
                  `}
                >
                  Episodes{' '}
                </span>
                <span
                  css={css`
                    width: 70%;
                    font-weight: 600;
                  `}
                >
                  {episodes}
                </span>
              </div>
              <div
                css={css`
                  display: flex;
                  color: gray;
                  gap: 10px;
                  justify-items: center;
                  flex-direction: row;
                `}
              >
                <span
                  css={css`
                    width: 30%;
                  `}
                >
                  Year{' '}
                </span>
                <span
                  css={css`
                    width: 70%;
                    font-weight: 600;
                  `}
                >
                  {seasonYear}
                </span>
              </div>
              <div
                css={css`
                  display: flex;
                  gap: 10px;
                  justify-items: center;
                  flex-direction: row;
                `}
              >
                <span
                  css={css`
                    color: gray;
                    width: 30%;
                  `}
                >
                  Ratings{' '}
                </span>
                <span
                  css={css`
                    display: flex;
                    justify-items: center;
                    width: 70%;
                    color: orange;
                    font-weight: 600;
                    font-size: 16px;
                    @media (max-width: 600px) {
                      flex-basis: 60%;
                      font-size: 12px;
                    }
                  `}
                >
                  <span
                    css={css`
                      font-size: 14px;
                    `}
                    className="material-icons"
                  >
                    star
                  </span>
                  {ratingAmount}
                </span>
              </div>
            </div>
            <div
              css={css`
                @media (max-width: 600px) {
                  display: block;
                }
              `}
            >
              <Popup
                trigger={
                  <button
                    type="button"
                    onClick={() => setStateOpenedFormNew(true)}
                    // onClick={() => handleAddToCollection(data)}
                    css={css`
                      align-self: stretch;
                      height: auto;
                      background: #d36b00;
                      border: none;
                      padding: 10px;
                      margin-bottom: auto;
                      cursor: pointer;
                      border-radius: 10px;
                      color: white;
                      font-weight: 700;
                      gap: 8px;
                      margin-top: 10px;
                      display: flex;
                      align-items: center;
                      @media (max-width: 600px) {
                        font-size: 12px;
                        width: 100%;
                      }
                    `}
                  >
                    <span className="material-icons">favorite</span>
                    <span>Add to collection</span>
                  </button>
                }
                modal
                nested
              >
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  (close: any) => {
                    return (
                      <div
                        css={css`
                          width: 100%;
                        `}
                      >
                        <div
                          css={css`
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                          `}
                        >
                          <div>
                            <h2>List Collection</h2>
                          </div>
                          <button
                            css={css`
                              margin-left: auto;
                              border: none;
                              width: 30px;
                              height: 30px;
                              font-size: 14px;
                              background: #42032c;
                              cursor: pointer;
                              border-radius: 8px;
                              color: white;
                              font-weight: 700;
                              &:hover {
                                filter: brightness(90%);
                              }
                            `}
                            className="close"
                            onClick={() => close()}
                          >
                            &times;
                          </button>
                        </div>

                        <div>
                          <div>
                            <div
                              css={css`
                                display: flex;
                              `}
                            >
                              <div
                                css={css`
                                  margin-left: auto;
                                  margin-right: auto;
                                  text-align: center;
                                `}
                              >
                                {isEmpty(listOfCollections) &&
                                  !stateOpenedFormNew && (
                                    <p
                                      css={css`
                                        font-weight: 600;
                                      `}
                                    >
                                      Empty Collection
                                    </p>
                                  )}
                                <button
                                  onClick={() => setStateOpenedFormNew(true)}
                                  className="button"
                                  css={css`
                                    margin-left: auto;
                                    border: none;
                                    padding: 10px;
                                    cursor: pointer;
                                    border-radius: 8px;
                                    color: #d36b00;
                                    background: transparent;
                                    font-weight: 700;
                                    &:hover {
                                      font-weight: 800;
                                    }
                                  `}
                                >
                                  Add New
                                </button>
                              </div>
                            </div>

                            {stateOpenedFormNew && (
                              <div>
                                <form
                                  onSubmit={(e) => handleAddNewCollection(e)}
                                  css={css`
                                    display: flex;
                                  `}
                                >
                                  <div
                                    css={css`
                                      margin-left: auto;
                                      margin-right: auto;
                                      width: 80%;
                                    `}
                                  >
                                    <h4>New Collection</h4>
                                    <div
                                      css={css`
                                        display: flex;
                                        width: 100%;
                                      `}
                                    >
                                      <input
                                        type="text"
                                        onChange={(e) =>
                                          setStateNewCollection(e.target.value)
                                        }
                                        value={stateNewCollection}
                                        placeholder="New Collection"
                                        required
                                        css={css`
                                          padding: 10px;
                                          width: 100%;
                                          border: 1px solid whitesmoke;
                                        `}
                                      />
                                    </div>

                                    <div
                                      css={css`
                                        display: flex;
                                        width: 100%;
                                      `}
                                    >
                                      <button
                                        type="submit"
                                        css={css`
                                          border: none;
                                          padding: 10px;
                                          margin-top: 10px;
                                          margin-left: auto;
                                          background: #d36b00;
                                          cursor: pointer;
                                          border-radius: 8px;
                                          color: white;
                                          width: 100px;
                                          font-weight: 700;
                                          &:hover {
                                            filter: brightness(90%);
                                          }
                                          @media (max-width: 600px) {
                                            width: 100%;
                                          }
                                        `}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            )}

                            {!isEmpty(listOfCollections) && (
                              <ul
                                css={css`
                                  width: auto;
                                `}
                              >
                                {listOfCollections?.map(
                                  (colc: any, key: Key) => (
                                    <li
                                      key={key}
                                      css={css`
                                        list-style: none;
                                        padding: 10px;
                                        background: white;
                                        cursor: pointer;
                                        &:hover {
                                          filter: brightness(95%);
                                        }
                                      `}
                                    >
                                      <div
                                        css={css`
                                          display: flex;
                                          justify-content: space-between;
                                        `}
                                      >
                                        <p
                                          css={css`
                                            margin-top: auto;
                                            margin-bottom: auto;
                                          `}
                                        >
                                          <Link
                                            css={css`
                                              color: black;
                                            `}
                                            to={`/collection/${colc?.key}`}
                                          >
                                            {colc?.key}
                                          </Link>
                                          {JSON.parse(colc?.val ?? '[]')?.some(
                                            (an: any) => an?.Media?.id === id,
                                          ) && (
                                            <span
                                              css={css`
                                                margin-left: 6px;
                                                padding: 4px;
                                                font-size: 10px;
                                                color: white;
                                                border-radius: 10px;
                                                background: rgba(
                                                  211,
                                                  107,
                                                  0,
                                                  0.8
                                                );
                                              `}
                                            >
                                              selected
                                            </span>
                                          )}
                                        </p>
                                        {!JSON.parse(colc?.val ?? '[]')?.some(
                                          (an: any) => an?.Media?.id === id,
                                        ) ? (
                                          // Checking if the anime already in collection
                                          <>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                handleAddToCollection(
                                                  colc?.key,
                                                  data,
                                                )
                                              }
                                              css={css`
                                                align-self: baseline;
                                                margin-top: auto;
                                                margin-bottom: auto;
                                                cursor: pointer;
                                                border: none;
                                                padding: 10px;
                                                background: #d36b00;
                                                border-radius: 8px;
                                                color: white;
                                                font-weight: 700;
                                              `}
                                            >
                                              Choose
                                            </button>
                                          </>
                                        ) : (
                                          <>
                                            {/* <p>
                                              css=
                                              {css`
                                                margin-top: auto;
                                                margin-bottom: auto;
                                              `}
                                              {colc?.key}
                                            </p> */}
                                            <button
                                              onClick={() =>
                                                handleReleaseCollection(
                                                  colc?.key,
                                                  data,
                                                )
                                              }
                                              type="button"
                                              css={css`
                                                align-self: baseline;
                                                margin-top: auto;
                                                margin-bottom: auto;
                                                background: transparent;
                                                cursor: pointer;
                                                border: none;
                                                padding: 10px;
                                                color: #d36b00;
                                                border-radius: 8px;
                                                font-weight: 700;
                                              `}
                                            >
                                              <span className="material-icons">
                                                delete
                                              </span>
                                            </button>
                                          </>
                                        )}
                                      </div>
                                    </li>
                                  ),
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div
                          css={css`
                            width: 100%;
                            display: flex;
                          `}
                        ></div>
                      </div>
                    );
                  }
                }
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
