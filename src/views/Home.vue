<template>
  <div>
    <Header />
    <main class="d-flex">
      <Sidebar />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Sidebar from "../components/Sidebar/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar,
  },
};
</script>
