import { makeAutoObservable } from 'mobx';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

class EpisodeStore {
  episodes: Episode[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEpisodes(episodes: Episode[]) {
    this.episodes = episodes;
  }

  get firstEpisode() {
    return this.episodes.length > 0 ? this.episodes[0] : null;
  }
}

export default EpisodeStore;
