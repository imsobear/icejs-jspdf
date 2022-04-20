import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import(/* webpackChunkName: 'about' */'@/pages/About'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routerConfig;
