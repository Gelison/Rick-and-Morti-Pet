import './App.css';
import { createContext } from 'react';
import { BrowserRouter } from 'react-router';

import AppRouter from './components/AppRouter';
import CharacterStore from './store/CharacterStore';
import EpisodeStore from './store/EpisodeStore';
import LocationStore from './store/LocationStore';

export const Context = createContext<any | null>(null);

function App() {
  return (
    <Context.Provider
      value={{
        character: new CharacterStore(),
        episode: new EpisodeStore(),
        location: new LocationStore(),
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
