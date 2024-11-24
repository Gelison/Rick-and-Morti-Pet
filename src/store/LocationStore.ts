import { makeAutoObservable } from 'mobx';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

class LocationStore {
  locations: Location[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setLocations(locations: Location[]) {
    this.locations = locations;
  }

  get firstLocation() {
    return this.locations.length > 0 ? this.locations[0] : null;
  }
}

export default LocationStore;
