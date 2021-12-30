<template>
  <HeaderAndSidebar />
</template>

<script>
import HeaderAndSidebar from './components/HeaderAndSidebar/HeaderAndSidebar.vue'

export default {
  name: 'App',
  components: {
    HeaderAndSidebar
  }
}
</script>

<style lang="scss">
#app {
  font-family:'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
