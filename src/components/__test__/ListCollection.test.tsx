import ListCollection from '../Collection/ListCollection';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

let wrapper: any;
configure({ adapter: new Adapter() });
beforeEach(() => {
  const collectionItem = {
    key: 'old favorite',
    val: '[{"Media":{"__typename":"Media","id":356,"title":{"__typename":"MediaTitle","english":"Fate/stay night","romaji":"Fate/stay night"},"genres":["Action","Fantasy","Romance","Supernatural"],"coverImage":{"__typename":"MediaCoverImage","large":"https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx356-mTpMvtillumS.png"},"description":"Raised by a mysterious sorcerer after the death of his parents in a catastrophic fire, Shirou Emiya has only just begun to learn small tidbits of magic. When he is caught in a battle between two powerful Magi, however, he ends up performing a spell above his expected ability, accidentally summoning a beautiful woman knight to protect him. \\n<br><br>\\nShirou is thus unwillingly thrust into the competition known as the Holy Grail War where Seven Magi called Masters, together with their spirit partners called Servants, fight to acquire a powerful artifact said to grant every wish. \\n","episodes":24,"bannerImage":"https://s4.anilist.co/file/anilistcdn/media/anime/banner/356-0VzS7BcObayT.jpg","seasonYear":2006},"Review":{"__typename":"Review","ratingAmount":50,"rating":28}}]',
  };
  wrapper = shallow(<ListCollection colc={collectionItem} />);
});
test('Checking collection card list is rendered', () => {
  expect(wrapper.find('tes')).toBeTruthy();
});
