import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import Favorite from './components/pages/Favorite.vue';
import Search from './components/pages/Search.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Favorite', component: Favorite },
    { path: '/Search', component: Search },
  ]
});

export default router;