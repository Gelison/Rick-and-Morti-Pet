import { makeAutoObservable } from 'mobx';
import { Character } from '../API/types';

class CharacterStore {
  status: string = '';
  gender: string = '';
  species: string = '';
  page: number = 1;
  characters: Character[] = [];
  info: { pages: number } = { pages: 0 };
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setStatus(value: string) {
    this.status = value;
  }

  setGender(value: string) {
    this.gender = value;
  }

  setSpecies(value: string) {
    this.species = value;
  }

  setPage(value: number) {
    this.page = value;
  }

  setCharacters(value: Character[]) {
    this.characters = value;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  updatePageNumber(pageNumber: number) {
    this.page = pageNumber;
  }

  updateInfo(info: { pages: number }) {
    this.info = info;
  }

  saveState() {
    localStorage.setItem('status', this.status);
    localStorage.setItem('gender', this.gender);
    localStorage.setItem('species', this.species);
  }

  loadState() {
    this.status = localStorage.getItem('status') || '';
    this.gender = localStorage.getItem('gender') || '';
    this.species = localStorage.getItem('species') || '';
  }
}

const inputStore = new CharacterStore();
inputStore.loadState();

export default inputStore;
