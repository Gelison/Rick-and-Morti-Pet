import { Routes, Route, Navigate } from 'react-router';
import { authRoutes, publicRoutes } from '../utils/router/typeRoute';
import { MAIN_ROUTE } from '../utils/router/consts';
import { useContext } from 'react';
import { Context } from '../App';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path={MAIN_ROUTE} element={<Navigate to='/' />} />
    </Routes>
  );
});

export default AppRouter;
