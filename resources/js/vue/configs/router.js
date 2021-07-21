import { createRouter, createWebHistory } from 'vue-router';
import {BASE_URL} from './base';

import Dashboard from '../pages/Dashboard.vue';
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', component: Dashboard },
  ]
  
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
export default router