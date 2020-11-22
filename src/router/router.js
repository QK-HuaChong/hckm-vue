import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

import Login from "../components/Login.vue";
// import Register from "../components/Register.vue";
const Home = () => import('../components/home/Home');
const Dashborad = () => import('../components/menu/Dashboard');
const HomeNote = () => import("../components/home/HomeNote");


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
        component: () => import('../components/Register')
      }
    ]
})

export default router;