import Home from './components/Home.vue'
import About from './components/About.vue'
import Landing from './components/Landing.vue'
import RegisterNGO from './components/NGO/RegisterNGO.vue'
import RegisterVolunteer from './components/RegisterVolunteer.vue'
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
    path: '/about',
    name: 'aboutLink',
    component: About
  },
  {
    path: '/',
    name: 'landingLink',
    component: Landing
  },
  {
    path: '/registerNGO',
    name: 'registerNGOLink',
    component: RegisterNGO
  },
  {
    path: '/registerVol',
    name: 'registerVolunteerLink',
    component: RegisterVolunteer
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
