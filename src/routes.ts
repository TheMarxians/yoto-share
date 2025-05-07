import type { RouteRecordRaw } from 'vue-router';
import { createRoute, setDefaultLayout } from '@shadcn-ui/helpers';
import { AppLayout } from '@/components';

setDefaultLayout(AppLayout);
const routes: RouteRecordRaw[] = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      menuLabel: 'Home',
      showInMenu: true,
    },
  }),
  // Catch all unmatched routes
  createRoute({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      menuLabel: 'Not Found',
      showInMenu: false,
    },
  }),
];

export default routes;
