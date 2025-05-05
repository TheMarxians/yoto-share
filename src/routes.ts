import type { RouteRecord } from '@shadcn-ui/types';
import { createRoute } from '@shadcn-ui/helpers';

const routes: Array<RouteRecord> = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
    menuLabel: 'Home',
  }),
  // Catch all unmatched routes
  createRoute({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('./views/NotFound.vue'),
    showInMenu: false,
  }),
];

export default routes;
