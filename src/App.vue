<template>
  <div>
    <Header v-if="login_deletion"/>
    <main class="d-flex">
      <Sidebar v-if="login_deletion"/>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/HeaderAndSidebar/Header.vue";
import Sidebar from "./components/HeaderAndSidebar/Sidebar.vue";

export default {
  name: "App",
  computed: {
    login_deletion() {
        if(this.$route.name == "Login" || this.$route.name == "404"){return false}else{return true}        
    }
  },
  components: {
    Header,
    Sidebar,
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
