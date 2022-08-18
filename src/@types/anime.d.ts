// @types.anime.ts
export interface Anime {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export interface AnimeContextType {
  animes: Anime[];
  saveAnime: (anime: Anime) => void;
  updateAnime: (id: number) => void;
}
