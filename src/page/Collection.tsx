/** @jsxImportSource @emotion/react */
import React, { Key, useEffect, useState } from 'react';
import Container from '../components/common/Container';
import { css } from '@emotion/react';
import ListCollection from '../components/Collection/ListCollection';
import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';
import { isEmpty } from 'lodash';
const Collection: React.FC = () => {
  const specialChars = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
  const [stateCollectionList, setStateCollectionList]: any = useState([]);
  const [stateNewCollection, setStateNewCollection]: any = useState('');
  const [stateErrorMsg, setStateErrorMsg]: any = useState('');
  function containsSpecialChars(str: string) {
    return specialChars.test(str);
  }

  const handleGetCollectionFromStorage = () => {
    const listWebStorage = { ...localStorage };
    const listOfCollections: any =
      Object.entries(listWebStorage)?.map((val) => {
        return {
          key: val[0],
          val: val[1],
        };
      }) || [];

    setStateCollectionList(listOfCollections);
  };

  useEffect(() => {
    handleGetCollectionFromStorage();
  }, []);

  useEffect(() => {
    if (containsSpecialChars(stateNewCollection)) {
      setStateErrorMsg(
        `Please try to fill with no special characters contain ${specialChars}`,
      );
    } else {
      setStateErrorMsg('');
    }
  }, [stateNewCollection]);

  const handleAddNewCollection = (e: any, closeButton: any) => {
    e.preventDefault();
    if (!localStorage.getItem(stateNewCollection)) {
      localStorage.setItem(stateNewCollection, '[]');
      handleGetCollectionFromStorage();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully adding new collection',
      });
      setStateNewCollection('');
      closeButton();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Collection is already exist',
        text: 'Please try to fill with other collection name :)',
      });
    }
  };

  const handleDeleteCollection = (e: any, key: string) => {
    e.preventDefault();
    Swal.fire({
      title: `Are you sure for delete ${key} collection?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonAriaLabel: 'white',
      confirmButtonColor: '#d36b00',
    }).then((result: any) => {
      if (result.isConfirmed) {
        localStorage.removeItem(key);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Successfully deleted ${key} collection`,
        });
        handleGetCollectionFromStorage();
      }
    });
  };

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
            align-items: center;
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
              List Collection
            </h2>
          </div>
          <Popup
            trigger={
              <button
                css={css({
                  width: 'auto',
                  borderRadius: '8px',
                  fontSize: '16px',
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  marginLeft: 'auto',
                  height: '50px',
                  cursor: 'pointer',
                  paddingLeft: '2%',
                  paddingRight: '2%',
                  background: '#D36B00',
                  color: 'white',
                  border: 'none',
                  alignItems: 'center',
                  display: 'flex',
                  fontWeight: '600',
                  gap: '5px',
                  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                })}
              >
                <span className="material-icons">add</span>
                <span>Add New Collection</span>
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
                            onSubmit={(e) => handleAddNewCollection(e, close)}
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
                                <h2>Add New Collection</h2>
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
                                    setStateNewCollection(e.target.value)
                                  }
                                  value={stateNewCollection}
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
                                {stateErrorMsg}
                              </span>

                              <div
                                css={css`
                                  display: flex;
                                  width: 100%;
                                `}
                              >
                                <button
                                  disabled={!isEmpty(stateErrorMsg)}
                                  type="submit"
                                  css={css`
                                    border: none;
                                    padding: 10px;
                                    margin-top: 10px;
                                    margin-left: auto;
                                    background: #d36b00;
                                    cursor: pointer;
                                    opacity: ${!isEmpty(stateErrorMsg)
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
        </div>

        <div
          css={css`
            font-size: 20px;
            align-items: center;
            display: flex;
            margin-top: 10px;
            flex-direction: column;
            gap: 10px;
            justify-content: center;
            gap: 20px;
          `}
        >
          {stateCollectionList?.map((colc: any, key: Key) => (
            <ListCollection
              handleDeleteCollection={handleDeleteCollection}
              colc={colc}
              key={key}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Collection;
