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


export default {
  name: 'app',
  components: {
    tcHeader: Header,
    tcFooter: Footer,
  }
}
</script>

<style>

</style>
