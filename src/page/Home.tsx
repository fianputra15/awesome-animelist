/** @jsxImportSource @emotion/react */
import React, { Key, useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { useQuery, gql } from '@apollo/client';
import Card from '../components/common/Card';
import { isEmpty } from 'lodash';
import Container from '../components/common/Container';
import PaginationGroup from '../components/common/PaginationGroup';
import ShimmerCard from '../components/common/ShimmerCard';

const Home: React.FC = (props: any) => {
  const [statePage, setStatePage] = useState(1);

  const handleNextPagination = () => {
    setStatePage((page: any) => parseInt(page, 10) + 1);
  };
  const handlePrevPagination = () => {
    setStatePage((page: any) => parseInt(page, 10) - 1);
  };
  const handleMovePage = (page: any) => {
    setStatePage(page);
  };

  const GET_ANIMES = gql`
    query {
      Page(page: ${statePage}, perPage: 10) {
        pageInfo{
          total
          currentPage
          lastPage
        }
        mediaList(type: ANIME) {
          media {
            id
            title {
              english
              romaji
            }
            coverImage {
              large
            }
            description
            episodes
            bannerImage
            seasonYear
          }
        }
      }
    }
  `;
  const { data, loading, refetch: refetchAnime } = useQuery(GET_ANIMES);
  const { currentPage, lastPage } = data?.Page?.pageInfo || 1;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    refetchAnime();
  }, [statePage]);
  return (
    <>
      <Container>
        <div
          css={css`
            margin-bottom: 40%;
            padding-right: 15%;
            padding-left: 15%;
            @media (max-width: 600px) {
              padding-right: 5%;
              padding-left: 5%;
              margin-bottom: ${isEmpty(data?.Page.mediaList) ? '100%' : '20%'};
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

            {/* <button
              css={css({
                marginLeft: 'auto',
                width: '140px',
                borderRadius: '8px',
                fontSize: '16px',
                marginTop: 'auto',
                marginBottom: 'auto',
                height: '50px',
                cursor: 'pointer',
                background: '#D36B00',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
              })}
            >
              Add New Anime
            </button> */}
          </div>

          <div>
            <div
              css={css`
                font-size: 30px;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 40px;

                align-items: center;
                justify-content: center;
                gap: 20px;
              `}
            >
              {loading && (
                <>
                  {Array(8)
                    .fill(1)
                    .map((el, i) => (
                      <ShimmerCard key={i} />
                    ))}
                </>
              )}
            </div>
          </div>
          <div
            css={css`
              font-size: 30px;
              display: flex;
              flex-wrap: wrap;

              align-items: center;
              justify-content: center;
              gap: 20px;
            `}
          >
            {data?.Page.mediaList?.map((val: any, key: Key) => (
              <Card key={key} {...val?.media} />
            ))}
          </div>
          <div
            css={css`
              display: flex;
              width: 100%;
              gap: 10px;
            `}
          >
            <div
              css={css`
                margin-left: auto;
                margin-right: auto;
              `}
            >
              <PaginationGroup
                statePage={statePage}
                currentPage={currentPage}
                lastPage={lastPage}
                handlePrevPagination={handlePrevPagination}
                handleMovePage={handleMovePage}
                handleNextPagination={handleNextPagination}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
