<template>
  <div class="body">
    <div>
      <div class="login-card">
        <img class="logo mb-2" width="220" src="../../assets/logo.png" />
        <span class="version-label">Versão 1.0.0</span>

        <div class="form-control border-0">
          <div class="mb-3">
            <label class="form-label">Usuário</label>
            <div class="col-12 input-group">
              <input
                ref="inputUsername"
                type="text"
                class="form-control col-8"
                v-bind:class="{ 'is-invalid': invalidUsr }"
                @click="cleanInfoUsr()"
              />
              <div class="invalid-feedback">
                <span class="invalid">Digite um usuário válido!</span>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label">Senha</label>
            <router-link class="link" to="/RecuperarSenha">
              <label class="link-label float-end">Esqueceu a senha ?</label>
            </router-link>
            <div class="col-12 input-group">
              <input
                ref="inputPassword"
                type="password"
                class="form-control"
                v-bind:class="{ 'is-invalid': invalidPsw }"
                @click="cleanInfoPsw()"
              />
              <button
                v-on:click="revealPassword"
                class="btn btn-outline-secondary"
                type="button"
              >
                <fa v-if="eye" icon="eye-slash" class="icon" />
                <fa v-if="!eye" icon="eye" class="icon" />
              </button>
              <div class="invalid-feedback">
                <span class="invalid">Digite uma senha!</span>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2 mb-2">
            <button
              @click="
                auth(
                  this.$refs.inputUsername.value,
                  this.$refs.inputPassword.value
                )
              "
              class="btn btn-primary"
              type="button"
            >
              Entrar
            </button>
          </div>

          <router-link class="link" to="/SolicitarAcesso">
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" type="button">
                Solicitar Acesso
              </button>
            </div>
          </router-link>
          <div
            class="alert alert-danger mt-3 text-center"
            role="alert"
            ref="error_info"
            v-bind:class="{ 'd-none': d_none_error }"
          >
            {{ msg }}
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
      d_none_error: true,
      invalidUsr: false,
      invalidPsw: false,
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
    cleanInfoUsr: function () {
      this.invalidUsr = false;
    },
    cleanInfoPsw: function () {
      this.invalidPsw = false;
    },
    auth(username, password) {
      if (username == "") {
        this.invalidUsr = true;
        this.msgUsr = "Digite um usuário válido!";
      }
      if (password == "") {
        this.invalidPsw = true;
        this.msgPsw = "Digite uma senha!";
      } else {
        this.axios
          .post(`http://localhost:3000/Auth/${username}/${password}`)
          .then((response) => {
            if (response.data.error) {
              this.d_none_error = false;
              this.msg = "Tentativa de login inválida!";
            } else {
              localStorage.setItem("token", response.data.token);
              location = "/";
            }
          });
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./scss/Login.scss"></style>
