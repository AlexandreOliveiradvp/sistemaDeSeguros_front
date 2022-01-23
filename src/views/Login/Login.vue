<template>
  <div class="body">
    <div>
      <div class="login-card">
        <img class="logo mb-2" width="220" src="../../assets/logo.png" />
        <span class="version-label">Versão 1.0.0</span>

        <div class="form-control border-0">
          <div class="mb-3">
            <label class="form-label">Usuário</label>
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label">Senha</label>
            <router-link class="link" to="/RecuperarSenha">
              <label class="link-label">Esqueceu a senha ?</label>
            </router-link>
            <div class="input-group">
              <input ref="inputPassword" type="password" class="form-control" />
              <button
                v-on:click="revealPassword"
                class="btn btn-outline-secondary"
                type="button"
              >
                <fa v-if="eye" icon="eye-slash" class="icon" />
                <fa v-if="!eye" icon="eye" class="icon" />
              </button>
            </div>
          </div>

          <router-link class="link" to="/">
            <div class="d-grid gap-2 mb-2">
              <button class="btn btn-primary" type="button">Entrar</button>
            </div>
          </router-link>
          <div class="d-grid gap-2">
            <button class="btn btn-outline-primary" type="button">
              Solicitar Acesso
            </button>
          </div>
        </div>
      </div>
      <footer>2022 © Secure Brasil - secure.com.br</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      eye: true,
    };
  },
  methods: {
    revealPassword: function () {
      if (this.$refs.inputPassword.type === "password") {
        this.$refs.inputPassword.type = "text";
        this.eye = false;
      } else {
        this.$refs.inputPassword.type = "password";
        this.eye = true;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./scss/Login.scss"></style>
