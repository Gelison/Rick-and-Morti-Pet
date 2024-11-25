export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterSingleItem {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}

export interface CharacterItemProps {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
  };
}
