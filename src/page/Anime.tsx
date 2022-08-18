/** @jsxImportSource @emotion/react */
/* eslint-disable */
import React, { Key, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import 'reactjs-popup/dist/index.css';
import Container from '../components/common/Container';
import { AnimeBanner } from '../components/Anime/AnimeBanner';
import { AnimeContent } from '../components/Anime/AnimeContent/AnimeContent';
const fadeCover = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;
const fadeBanner = keyframes`
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
`;
const Anime: React.FC = (props: any) => {
  const params: any = useParams();
  const [stateNewCollection, setStateNewCollection]: any = useState(null);
  const [stateOpenedFormNew, setStateOpenedFormNew]: any = useState(false);
  const GET_ANIMES = gql`
    query ($id: Int) {
      Media(id: $id) {
        id
        title {
          english
          romaji
        }
        genres
        coverImage {
          large
        }
        description
        episodes
        bannerImage
      }
      Review(mediaId: $id) {
        ratingAmount
        rating
      }
    }
  `;
  const {
    data,
    loading,
    refetch: refetchAnime,
  } = useQuery(GET_ANIMES, {
    variables: {
      id: params?.id,
    },
  });

  const handleAddToCollection = (key: any | undefined, anime: any) => {
    if (localStorage.length < 0) {
      const animeList = [];
      animeList.push(anime);
      localStorage.setItem('anime_collection', JSON.stringify(animeList));
    } else {
      const existingCollection = JSON.parse(localStorage.getItem(key) ?? '');
      console.log(existingCollection);
    }
  };

  const handleAddNew = () => {};

  const listWebStorage = { ...localStorage };
  const listOfCollections: any =
    Object.entries(listWebStorage)?.map((val) => {
      return {
        key: val[0],
        val: val[1],
      };
    }) || [];

  return (
    <>
      <Container>
        <div
          css={css`
            position: relative;
            margin-bottom: 230px;
          `}
        >
          <AnimeBanner
            fadeBanner={fadeBanner}
            image={data?.Media?.bannerImage}
          />

          <AnimeContent
            stateNewCollection={stateNewCollection}
            setStateNewCollection={setStateNewCollection}
            stateOpenedFormNew={stateOpenedFormNew}
            setStateOpenedFormNew={setStateOpenedFormNew}
            fadeCover={fadeCover}
            listWebStorage={listWebStorage}
            data={data}
            listOfCollections={listOfCollections}
            handleAddToCollection={handleAddToCollection}
          />
  
        </div>
      </Container>
    </>
  );
};

export default Anime;
