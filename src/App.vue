<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
// import Registration from '@/components/Registration.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>

</style>
