/** @jsxImportSource @emotion/react */
import React, { Key } from 'react';
import { isEmpty } from 'lodash';
import Popup from 'reactjs-popup';
import { css } from '@emotion/react';
interface AnimeInfoType {
  coverImage: any;
  title: any;
  ratingAmount: any;
  fadeCover: any;
  genres: any[];
  episodes: string;
  setStateOpenedFormNew: any;
  listOfCollections: any[];
  stateNewCollection: string;
  handleAddToCollection: Function;
  stateOpenedFormNew: boolean;
  setStateNewCollection: Function;
  data: any[];
}
const AnimeInfo: React.FC<AnimeInfoType> = (props: AnimeInfoType) => {
  const {
    coverImage,
    title,
    ratingAmount,
    fadeCover,
    genres,
    episodes,
    data,
    setStateOpenedFormNew,
    stateOpenedFormNew,
    handleAddToCollection,
    stateNewCollection,
    setStateNewCollection,
    listOfCollections,
  } = props;
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
        <img
          css={css`
            animation: ${fadeCover} 0.5s;
            width: 100%;
            margin-top: 20px;
            box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
            border-radius: 10px;
            object-fit: cover;
          `}
          src={coverImage?.large}
        />
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
              flex-direction: column;
              gap: 10px;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-items: center;
                flex-direction: row;
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
            <div>
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
                            <h2>Add New Collection</h2>
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
                            <h4>List Collection</h4>
                            {isEmpty(listOfCollections) && (
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
                                  <p
                                    css={css`
                                      font-weight: 600;
                                    `}
                                  >
                                    Empty Collection :)
                                  </p>
                                  <button
                                    onClick={() => setStateOpenedFormNew(true)}
                                    className="button"
                                    css={css`
                                      margin-left: auto;
                                      border: none;
                                      padding: 10px;
                                      background: #d36b00;
                                      cursor: pointer;
                                      border-radius: 8px;
                                      color: white;
                                      font-weight: 700;
                                      &:hover {
                                        filter: brightness(90%);
                                      }
                                    `}
                                  >
                                    Add New
                                  </button>
                                </div>
                              </div>
                            )}
                            {stateOpenedFormNew && (
                              <div
                                css={css`
                                  display: flex;
                                `}
                              >
                                <form>
                                  <input
                                    type="text"
                                    onChange={(e) => setStateNewCollection(e)}
                                    value={stateNewCollection}
                                    placeholder="New Collection"
                                    required
                                    css={css`
                                      padding: 10px;
                                      border: 1px solid whitesmoke;
                                      width: auto%;
                                      background: white;
                                    `}
                                  />
                                </form>
                              </div>
                            )}

                            {listOfCollections && (
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
                                          {colc?.key}
                                        </p>

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
