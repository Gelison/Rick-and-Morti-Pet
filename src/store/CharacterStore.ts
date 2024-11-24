import { makeAutoObservable } from 'mobx';

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
}

class CharacterStore {
  characters: Character[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCharacters(characters: Character[]) {
    this.characters = characters;
  }

  get aliveCharacters() {
    return this.characters.filter((character) => character.status === 'Alive');
  }
}

export default CharacterStore;
