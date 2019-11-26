<template>
  <div id="app">
    <Nav />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, Nav
  }
}
</script>

<style>

</style>
