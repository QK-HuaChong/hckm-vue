import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

import Login from "./components/Login.vue";
import Register from "./components/Register.vue";


const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
})

export default router;