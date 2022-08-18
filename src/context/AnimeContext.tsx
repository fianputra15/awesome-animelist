import * as React from 'react';
import { AnimeContextType, Anime } from '../@types/anime';

export const AnimeContext = React.createContext<AnimeContextType | null>(null);

const AnimeProvider: React.FC<React.ReactNode> = ({ children }: any) => {
  const [animes, setAnimes] = React.useState<Anime[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]);
  const saveAnime = (anime: Anime) => {
    const newAnime: Anime = {
      id: Math.random(), // not really unique - but fine for this example
      title: anime?.title,
      description: anime.description,
      status: false,
    };
    setAnimes([...animes, newAnime]);
  };
  const updateAnime = (id: number) => {
    animes.filter((anime: Anime) => {
      if (anime.id === id) {
        anime.status = true;
        setAnimes([...animes]);
      }
    });
  };
  return (
    <AnimeContext.Provider value={{ animes, saveAnime, updateAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
