<template>
  <Header />
</template>

<script>
import Header from "./components/HeaderAndSidebar/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: "Poppins", sans-serif;
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
