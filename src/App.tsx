import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/Layout';

import Home from './pages/Home';
import { Settings } from './pages/Settings';
import { SingleCharacter } from './pages/SingleCharacter';

import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='settings'>
            <Route index element={<Settings />} />
          </Route>
          <Route index element={<Home />} />
          <Route path='character/:id' element={<SingleCharacter />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
