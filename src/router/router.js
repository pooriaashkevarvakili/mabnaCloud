import { createRouter, createWebHistory } from 'vue-router'
import Helloworld from '../components/HelloWorld.vue'
import Login from '../components/Login.vue'
const routes = [
  {
    path: '/',
    name: 'helloworld',
    component: Helloworld,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
