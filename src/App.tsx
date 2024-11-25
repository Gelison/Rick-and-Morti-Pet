import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
// import { Favourites } from './pages/Favorites';
import { SingleCharacter } from './pages/SingleCharacter';
import { ResetPassword } from './pages/auth/ResetPasswordPage';

import { NotFoundPage } from './pages/NotFoundPage';

import { SigninForm } from './pages/auth/SingIn';
import { SignupForm } from './pages/auth/SingUp';

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
        <Route path='signin' element={<SigninForm />} />
        <Route path='signup' element={<SignupForm />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
