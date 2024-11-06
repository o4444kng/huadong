import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Scroll from '../components/scroll.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/scroll', component: Scroll },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});


export default router;
