<template>
  <header>
    <nav class="navbar navbar-light bg-light nav-bar-container">
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
          <a class="navbar-brand link-logo" href="home">
            <img width="150" src="../../assets/logo.png" class="nav-logo" />
          </a>
        </div>

        <div class="d-flex text-end">
          <div>
            <div>
              <span class="bem-vindo text-secondary"> Bem vindo, </span>
              <span class="account-user-name"> Fernando Souza </span>
            </div>
            <div class="acesso-info">
              <span class="text-secondary"> Acessado em : </span>
              <span class="span-date"> 09/01/2022 </span>
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
import { mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions(["toggleMenu"]),
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./scss/header.scss"></style>
