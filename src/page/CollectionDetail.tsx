/** @jsxImportSource @emotion/react */
import React, { Key, useEffect, useState } from 'react';
import Container from '../components/common/Container';
import { css } from '@emotion/react';
import Card from '../components/common/Card';
import { isEmpty } from 'lodash';
import Swal from 'sweetalert2';
import Popup from 'reactjs-popup';
import { useHistory, useParams } from 'react-router-dom';
const CollectionDetail: React.FC = () => {
  const specialChars = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
  const history = useHistory();
  const [stateCollectionList, setStateCollectionList]: any = useState([]);
  const [stateCollectionName, setStateCollectionName]: any = useState('');
  const [stateErrorMsg, setStateErrorMsg]: any = useState('');
  const params: any = useParams();
  function containsSpecialChars(str: string) {
    return specialChars.test(str);
  }

  useEffect(() => {
    setStateCollectionName(params?.id);
  }, [params?.id]);

  useEffect(() => {
    if (containsSpecialChars(stateCollectionName)) {
      setStateErrorMsg(
        `Please try to fill with no special characters contain ${specialChars}`,
      );
    } else {
      setStateErrorMsg('');
    }
  }, [stateCollectionName]);

  const handleGetCollectionFromStorage = () => {
    const listCollection = JSON.parse(localStorage.getItem(params?.id) ?? '[]');
    setStateErrorMsg('');
    setStateCollectionList(listCollection);
  };

  useEffect(() => {
    handleGetCollectionFromStorage();
  }, []);

  const handleEditCollection = (e: any, closeButton: any) => {
    e.preventDefault();

    if (!localStorage.getItem(stateCollectionName)) {
      localStorage.setItem(stateCollectionName, '[]');
      const oldData: any = localStorage.getItem(params?.id);
      localStorage.setItem(stateCollectionName, oldData);
      localStorage.removeItem(params?.id);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Successfully update collection to ${stateCollectionName}`,
      });
      history.push(`/collection/${stateCollectionName}`);
      closeButton();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Collection is already exist',
        text: 'Please try to fill with other collection name :)',
      });
    }
  };

  const handleReleaseCollection: any = (e: any, { id, title }: any) => {
    console.log(title);
    Swal.fire({
      title: `Are you sure for delete ${title?.english} from ${params.id} collection?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonAriaLabel: 'white',
      confirmButtonColor: '#d36b00',
    }).then((result: any) => {
      if (result.isConfirmed) {
        const savedCollection: string | undefined =
          localStorage.getItem(params?.id) ?? '';
        const listOfCollection = JSON.parse(savedCollection);
        const filteredCollection = listOfCollection?.filter(
          (val: any) => val?.Media?.id !== id,
        );
        localStorage.setItem(params?.id, JSON.stringify(filteredCollection));
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Successfully released ${title?.english}  from ${params?.id} collection`,
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
            margin-bottom: 80%;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <h2
            css={css({
              fontSize: '25px',
            })}
          >
            {params?.id}
          </h2>
          <Popup
            trigger={
              <button
                css={css`
                  width: auto;
                  border-radius: 8px;
                  font-size: 16px;
                  margin-top: auto;
                  margin-bottom: auto;
                  height: 50px;
                  cursor: pointer;
                  border: none;
                  align-items: center;
                  background: none;
                  display: flex;
                  font-weight: 600;
                  gap: 5px;
                  text-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                `}
              >
                <div
                  css={css`
                    margin-left: auto;
                    margin-right: auto;
                    display: flex;
                    align-items: center;
                  `}
                >
                  <span
                    css={css`
                      color: #d36b00;
                    `}
                    className="material-icons"
                  >
                    edit
                  </span>
                </div>
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
                            onSubmit={(e) => handleEditCollection(e, close)}
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
                                <h2>Edit Collection Name</h2>
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
                                    setStateCollectionName(e.target.value)
                                  }
                                  value={stateCollectionName}
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
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {stateCollectionList?.map((val: any, key: Key) => (
            <Card
              isCollection
              handleReleaseCollection={handleReleaseCollection}
              key={key}
              {...val?.Media}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CollectionDetail;
