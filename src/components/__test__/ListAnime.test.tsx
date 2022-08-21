import Card from '../common/Card';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { screen } from '@testing-library/react';

configure({ adapter: new Adapter() });
test('Checking anime card list is rendered', () => {
  const animeList = {
    media: {
      id: 1,
      title: {
        english: 'Cowboy Bebop',
        romaji: 'Cowboy Bebop',
        __typename: 'MediaTitle',
      },
      coverImage: {
        large:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png',
        __typename: 'MediaCoverImage',
      },
      description:
        'Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?',
      episodes: 26,
      bannerImage:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg',
      seasonYear: 1998,
      __typename: 'Media',
    },
    __typename: 'MediaList',
  };
  shallow(<Card {...animeList} />);
  expect(screen.getByText(`Cowboy Bebops`)).toBeTruthy();
});
