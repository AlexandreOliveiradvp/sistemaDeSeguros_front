<template>
  <div class="container-sidebar">

    <!-- Dashboard -->
    <ul class="list-group">
      <router-link class="link" to="/"
        ><li class="list-group-item">
          <fa icon="chart-line" class="icon" /><span>Dashboard</span>
        </li></router-link
      >
    </ul>

    <!-- Cadastro -->
    <ul class="list-group">

      <li class="list-group-item" v-on:click="submenu = !submenu" @click="rotateIcon">
        <fa icon="id-card" class="icon" /><span class="subtitle">Cadastro</span>
        <fa icon="chevron-down" class="float-end mt-1 rotate-init" v-bind:class="{ 'rotate-final': rotate }"/>
      </li>

      <transition name="fade">
        <div class="register" v-if="submenu">

          <router-link class="link" to="/Clientes">
            <li class="list-group-item ps-4">
              <span>Clientes</span>
            </li>
          </router-link>

          <li class="list-group-item ps-4">
            <span>Operadoras</span>
          </li>

          <li class="list-group-item ps-4">
            <span>Usuários</span>
          </li>

        </div>
      </transition>

      <router-link class="link" to="/Login">
        <li class="list-group-item">
          <fa icon="sign-out-alt" class="icon" /><span>Sair</span>
        </li>
      </router-link>

    </ul>

  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      submenu: true,
      rotate: true,
    };
  },
  methods: {
    rotateIcon() {
      if (this.rotate == false) {
        this.rotate = true;
      } else {
        this.rotate = false;
      }
    },
  },
};
</script>
<style scoped lang="scss" src="./scss/sidebar.scss"></style>
