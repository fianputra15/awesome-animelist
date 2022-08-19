/** @jsxImportSource @emotion/react */
/* eslint-disable */
import React, { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import 'reactjs-popup/dist/index.css';
import Container from '../components/common/Container';
import Swal from 'sweetalert2';
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
  const history = useHistory();
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
        seasonYear
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

  const handleAddToCollection: any = (key: any | undefined, anime: any) => {
    const lengthOfCollection: string | undefined =
      localStorage.getItem(key) ?? '';
    console.log(lengthOfCollection.length);
    if (lengthOfCollection.length <= 0) {
      const listOfCollection: any[] = [];
      listOfCollection.push(anime);
      localStorage.setItem(key, JSON.stringify(listOfCollection));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Successfully adding ${anime?.Media?.title?.english}  to ${key} collection`,
      });
    } else {
      const existingCollection = JSON.parse(localStorage.getItem(key) ?? '[]');
      existingCollection.push(anime);
      localStorage.setItem(key, JSON.stringify(existingCollection));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: `Successfully adding ${anime?.Media?.title?.english}  to ${key} collection`,
      });
    }
    setInterval(() => {
      history.go(0);
    }, 1500);
  };

  const handleReleaseCollection: any = (key: any | undefined, anime: any) => {
    const savedCollection: string | undefined =
      localStorage.getItem(key) ?? '';
    const listOfCollection = JSON.parse(savedCollection)
    const filteredCollection = listOfCollection?.filter((val: any) => val?.Media?.id !== anime?.Media?.id)
    localStorage.setItem(key, JSON.stringify(filteredCollection));
    // listOfCollection.set(anime);

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: `Successfully released ${anime?.Media?.title?.english}  from ${key} collection`,
    });   
    setInterval(() => {
      history.go(0);
    }, 1500);
  };

  const handleAddNewCollection = (e: any) => {
    e.preventDefault();
    if (!localStorage.getItem(stateNewCollection)) {
      localStorage.setItem(stateNewCollection, '[]');
      setInterval(() => {
        history.go(0);
      }, 1500);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Successfully adding new collection',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops... Collection is already exist',
        text: 'Please try to fill with other collection name :)',
      });
    }
  };

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
            handleReleaseCollection={handleReleaseCollection}
            handleAddToCollection={handleAddToCollection}
            handleAddNewCollection={handleAddNewCollection}
          />
        </div>
      </Container>
    </>
  );
};

export default Anime;
