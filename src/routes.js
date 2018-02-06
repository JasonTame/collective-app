/* eslint-disable */
import Home from './components/Home.vue'
import Landing from './components/Landing.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import ProfileVolunteer from './components/ProfileVolunteer.vue'

export const routes = [
  {
    path: '/home',
    name: 'homeLink',
    component: Home
  },
  {
    path: '/',
    name: 'landingLink',
    component: Landing
  },
  {
    path: '/register',
    name: 'registerLink',
    component: Register
  },
  {
    path: '/login',
    name: 'loginLink',
    component: Login
  },
  {
    path: '/profile-volunteer',
    name: 'profileVolLink',
    component: ProfileVolunteer
  },
  {
    path: '/tc-admin',
    name: 'adminLink',
    component: Admin
  },
  { path: '*', redirect: '/'}
]
