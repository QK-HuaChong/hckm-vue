import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Dashboard from "../components/menu/Dashboard.vue";


const router = createRouter({
    history: routerHistory,
    linkActiveClass: '',
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '',
        redirect: '/login'
      },
      {
        path: '/index',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
})

export default router;