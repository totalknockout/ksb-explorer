import { createBrowserRouter } from 'react-router';
import { Home } from './components/Home';
import { PathwayExplorer } from './components/PathwayExplorer';
import { NotFound } from './components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/pathway/:pathwayId',
    Component: PathwayExplorer,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);