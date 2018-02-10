<template>
  <div id="app">
    <tc-header></tc-header>
    <!--TODO separate the section into component and pull in through router view-->
    <router-view></router-view>
    <tc-footer></tc-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Landing from './components/Landing.vue'
import Login from './components/Login.vue'
import RegisterNGO from './components/NGO/RegisterNGO.vue'
import RegisterVolunteer from './components/RegisterVolunteer.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    tcHeader: Header,
    tcFooter: Footer,
    tcLanding: Landing,
    tcLogin: Login,
    tcRegisterNGO: RegisterNGO,
    tcRegisterVol: RegisterVolunteer,
    tcHome: Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
