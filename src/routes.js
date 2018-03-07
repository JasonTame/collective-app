import Home from './components/Home.vue'
import About from './components/About.vue'

export const routes = [
  {
    path: '/',
    name: 'homeLink',
    component: Home
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About
  },
  { path: '*', redirect: '/'}
]
