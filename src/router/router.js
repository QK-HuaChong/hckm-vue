import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

import Login from "components/content/Login.vue";
// import Register from "../components/Register.vue";
const Home = () => import('components/content/home/Home');
const Dashborad = () => import('components/content/menu/Dashboard');
const HomeNote = () => import('components/content/home/HomeNote');
const Register = () => import('components/content/Register');

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
        path: '/dashboard',
        component: Dashborad
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
          {
            path: '',
            redirect: '/home/note'
          },
          {
            path: 'note',
            component: HomeNote
          }
        ]
      },
      {
        path: '/register',
        name: 'Register',
        /**
         * 路由懒加载
         */
        component: Register
      }
    ]
})

export default router;