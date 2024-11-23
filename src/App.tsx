import './App.css';
import { createContext } from 'react';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';
import { BrowserRouter } from 'react-router';

import AppRouter from './components/AppRouter';

export const Context = createContext<any | null>(null);

function App() {
  return (
    <Context.Provider
      value={{
        user: new UserStore(),
        film: new ItemStore(),
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
