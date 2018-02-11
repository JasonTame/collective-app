<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <router-link :to="{ name: 'landingLink' }" tag="div">
          <h2 class="is-size-2">Collective</h2></router-link>

      </a>
      <div class="navbar-burger burger" data-target="mainNavbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="mainNavbar" class="navbar-menu">
      <div class="navbar-start">

      </div>

      <div class="navbar-end">
        <router-link :to="{ name: 'homeLink' }"><a class="navbar-item">Home</a></router-link>
        <router-link :to="{ name: 'aboutLink' }"><a class="navbar-item">About</a></router-link>
        <router-link :to="{ name: 'profileVolLink' }"><a class="navbar-item">Profile</a></router-link>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-start,
.navbar-end {
  align-items: center;
}
</style>
