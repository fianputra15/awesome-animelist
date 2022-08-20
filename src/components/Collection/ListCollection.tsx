/** @jsxImportSource @emotion/react */
import React, { Key, useEffect } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import Popup from 'reactjs-popup';

interface ListCollectionType {
  key: Key;
  colc: any;
  handleDeleteCollection: any;
  handleEditCollection: any;
  stateErrorMsgEdit: boolean;
  setStateEditCollectionName: any;
  stateEditCollectionName: string;
}

const ListCollection: React.FC<any> = (props: ListCollectionType) => {
  const {
    key,
    colc,
    handleDeleteCollection,
    handleEditCollection,
    stateErrorMsgEdit,
    setStateEditCollectionName,
    stateEditCollectionName,
  } = props;
  const history: any = useHistory();
  const handleRedirectToDetail = () => {
    history.push(`/collection/${colc?.key}`);
  };
  useEffect(() => {
    setStateEditCollectionName(colc?.key);
  }, [colc]);

  return (
    <button
      css={css`
        width: 100%;
        background: white;
        border: none;
      `}
      type="button"
      onClick={() => handleRedirectToDetail()}
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
        <div
          css={css`
            position: absolute;
            display: flex;
            z-index: 100;
            right: 0%;
            top: 1%;
          `}
        >
          <Popup
            onClick={(e: any) => e?.stopPropagation()}
            trigger={
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setStateEditCollectionName(colc?.key);
                }}
                type="button"
                css={css`
                  align-self: baseline;
                  width: 100%;
                  margin-top: auto;
                  margin-bottom: auto;
                  background: transparent;
                  cursor: pointer;
                  border: none;
                  text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                  padding: 10px;
                  color: white;
                  border-radius: 8px;
                  z-index: 100;
                  font-weight: 700;
                  &:hover {
                    transform: scale(150%);
                  }
                `}
              >
                <span className="material-icons">edit</span>
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
                          ></div>
                        </div>

                        <div>
                          <form
                            onSubmit={(e) =>
                              handleEditCollection(e, close, colc?.key)
                            }
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
                              <div>
                                <h2>Edit Collection</h2>
                              </div>
                              <div
                                css={css`
                                  display: flex;
                                  width: 100%;
                                `}
                              >
                                <input
                                  type="text"
                                  onChange={(e) =>
                                    setStateEditCollectionName(e.target.value)
                                  }
                                  value={stateEditCollectionName}
                                  placeholder="New Collection"
                                  required
                                  css={css`
                                    padding: 10px;
                                    width: 100%;
                                    border: 2px solid gray;
                                    border-radius: 10px;
                                  `}
                                />
                                <br />
                              </div>
                              <span
                                css={css`
                                  display: block;
                                  font-size: 10px;
                                  margin-top: 5px;
                                  color: red;
                                `}
                              >
                                {stateErrorMsgEdit}
                              </span>

                              <div
                                css={css`
                                  display: flex;
                                  width: 100%;
                                `}
                              >
                                <button
                                  disabled={!isEmpty(stateErrorMsgEdit)}
                                  type="submit"
                                  css={css`
                                    border: none;
                                    padding: 10px;
                                    margin-top: 10px;
                                    margin-left: auto;
                                    background: #d36b00;
                                    cursor: pointer;
                                    opacity: ${!isEmpty(stateErrorMsgEdit)
                                      ? '50%'
                                      : '100%'};
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
                      </div>
                    </div>
                  </div>
                );
              }
            }
          </Popup>
          <button
            onClick={(e: any) => {
              e.stopPropagation();
              handleDeleteCollection(e, colc?.key);
            }}
            type="button"
            css={css`
              align-self: baseline;
              margin-top: auto;
              margin-bottom: auto;
              background: transparent;
              cursor: pointer;
              border: none;
              text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              padding: 10px;
              color: white;
              border-radius: 8px;
              font-weight: 700;
              &:hover {
                transform: scale(150%);
              }
            `}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>

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
                object-position: center;
                filter: brightness(60%);
                @media (max-width: 600px) {
                  object-position: cover;
                  width: 100%;
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
    </button>
  );
};

export default ListCollection;
