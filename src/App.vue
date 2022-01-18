<template>
  <div>
    <Header />
    <main class="d-flex">
      <Sidebar />
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/HeaderAndSidebar/Header.vue";
import Sidebar from "./components/HeaderAndSidebar/Sidebar.vue";
import Dashboard from "./views/Dashboard.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Dashboard,
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
