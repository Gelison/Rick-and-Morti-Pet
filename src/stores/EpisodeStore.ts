import { makeAutoObservable } from 'mobx';

class EpisodeStore {
  page: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: number) {
    this.page = page;
  }
}

const episodeStore = new EpisodeStore();

export default episodeStore;
