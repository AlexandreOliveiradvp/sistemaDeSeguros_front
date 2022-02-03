<template>
  <header>
    <nav
      class="navbar navbar-light bg-light"
      style="z-index: 2; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <div class="container-fluid">
        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleMenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" style="margin-left: 20px" href="home">
            <img width="150" src="../../assets/logo.png" class="nav-logo" />
          </a>
        </div>

        <div style="display: flex; text-align: end">
          <div>
            <div>
              <span class="bem-vindo"> Bem Vindo, </span>
              <span class="account-user-name"> Fernando Souza </span>
            </div>
            <div class="acesso-info">
              <span> Acessado em : </span>
              <span style="color: #eeb667"> 09/01/2022 </span>
            </div>
          </div>
          <span>
            <img src="../../assets/user.jpg" class="account-user-avatar" />
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Header",
  methods:{
    ...mapActions(['toggleMenu'])
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./scss/header.scss"></style>
