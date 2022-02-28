import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/cards',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../views/Cards.vue'),
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../views/Payments.vue'),
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import('../views/Credit.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
