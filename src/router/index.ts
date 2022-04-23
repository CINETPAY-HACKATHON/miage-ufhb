import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {layout: 'default-layout'}
  },
  {
    path: '/apropos',
    name: 'apropos',
    component: () => import('@/views/apropos.vue'),
    meta: {layout: 'default-layout'}
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/article.vue'),
    meta: {layout: 'default-layout'}
  },
  {
    path: '/panier',
    name: 'panier',
    component: () => import('@/views/panier.vue'),
    meta: {layout: 'default-layout'}
  },
  {
    path: '/succes',
    name: 'succes',
    component: () => import('@/views/succes.vue'),
    meta: {layout: 'default-layout'}
  },
  {
    path: '/echec',
    name: 'echec',
    component: () => import('@/views/echec.vue'),
    meta: {layout: 'default-layout'}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from) => {
  // @ts-ignore
  document.title = to.meta.title;
});

export default router;
