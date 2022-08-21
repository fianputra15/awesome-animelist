/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import AnimeInfo from './AnimeInfo';
import AnimeDescription from './AnimeDescription';
interface AnimeContentType {
  shimeringLoading: any;
  data: any;
  stateNewCollection: any;
  setStateNewCollection: any;
  stateOpenedFormNew: any;
  setStateOpenedFormNew: any;
  listOfCollections: any;
  handleAddToCollection: Function;
  handleAddNewCollection: Function;
  handleReleaseCollection: Function;
  stateErrorMsg: string;
}

export const AnimeContent: React.FC<any> = (props: AnimeContentType) => {
  const {
    shimeringLoading,
    data,
    stateNewCollection,
    setStateNewCollection,
    stateOpenedFormNew,
    handleAddToCollection,
    handleAddNewCollection,
    handleReleaseCollection,
    listOfCollections,
    stateErrorMsg,
    setStateOpenedFormNew,
  } = props;
  return (
    <div
      // css={css`
      //   padding-right: 15%;
      //   position: absolute;
      //   top: 85%;
      //   padding-left: 15%;
      //   @media (max-width: 600px) {
      //     padding-right: 5%;
      //     padding-left: 5%;
      //     top: 60%;
      //   }
      // `}
      css={css`
        padding-right: 15%;
        padding-left: 15%;
        @media (max-width: 600px) {
          padding-right: 5%;
          padding-left: 5%;
        }
      `}
    >
      <AnimeInfo
        stateNewCollection={stateNewCollection}
        setStateNewCollection={setStateNewCollection}
        stateOpenedFormNew={stateOpenedFormNew}
        setStateOpenedFormNew={setStateOpenedFormNew}
        handleAddNewCollection={handleAddNewCollection}
        handleReleaseCollection={handleReleaseCollection}
        shimeringLoading={shimeringLoading}
        {...data?.Media}
        {...data?.Review}
        data={data}
        stateErrorMsg={stateErrorMsg}
        listOfCollections={listOfCollections}
        handleAddToCollection={handleAddToCollection}
      />

      <AnimeDescription description={data?.Media?.description} />
    </div>
  );
};
