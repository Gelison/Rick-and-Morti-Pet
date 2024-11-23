import { Admin } from '../../pages/Admin';
import { Auth } from '../../pages/Auth';
import { CaracterList } from '../../pages/Character/CaracterList';
import { SingleCaracter } from '../../pages/Character/SingleCaracter';
import { EpisodeList } from '../../pages/Episode/EpisodeList';
import { SingleEpisode } from '../../pages/Episode/SingleEpisode';
import { Follow } from '../../pages/Follow';
import { LocationList } from '../../pages/Location/LocationList';
import { SingleLocation } from '../../pages/Location/SingleLocation';
import { Main } from '../../pages/Main';
import { Settings } from '../../pages/Settings';

import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  RESETPASSWORD_ROUTE,
  MAIN_ROUTE,
  FOLLOW_ROUTE,
  SETTINGS_ROUTE,
  CHARACTERS_ROUTE,
  CHARACTER_ROUTE,
  EPISODES_ROUTE,
  EPISODE_ROUTE,
  LOCATIONS_ROUTE,
  LOCATION_ROUTE,
} from './consts';

export const authRoutes = [
  {
    path: FOLLOW_ROUTE,
    Component: Follow,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: RESETPASSWORD_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },

  {
    path: SETTINGS_ROUTE,
    Component: Settings,
  },

  {
    path: CHARACTERS_ROUTE,
    Component: CaracterList,
  },

  {
    path: CHARACTER_ROUTE + '/:id',
    Component: SingleCaracter,
  },

  {
    path: EPISODES_ROUTE,
    Component: EpisodeList,
  },

  {
    path: EPISODE_ROUTE + '/:id',
    Component: SingleEpisode,
  },

  {
    path: LOCATIONS_ROUTE,
    Component: LocationList,
  },

  {
    path: LOCATION_ROUTE + '/:id',
    Component: SingleLocation,
  },
];
