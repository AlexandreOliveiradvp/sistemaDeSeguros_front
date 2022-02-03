<template>
  <div class="body">
    <div>
      <div class="login-card">
        <img class="logo mb-2" width="220" src="../../assets/logo.png" />
        <span class="version-label">Versão 1.0.0</span>

        <h4>Solicitar Acesso</h4>
        <span class="descricao-label mb-4"
          >Para solicitar o acesso ao sistema, inisira seus dados abaixo. Caso
          seu acesso seja liberado, você receberá uma senha por e-mail.</span
        >

        <div class="form-control border-0">
          <div class="mb-3">
            <label class="form-label">Nome</label>
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Celeluar</label>
            <div class="input-group">
              <input
                type="phone"
                ref="inputPhone"
                class="form-control"
                placeholder="(__) _____-____"
                @keyup="mask()"
                maxlength="15"
              />
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">E-Mail</label>
            <div class="input-group">
              <input type="email" class="form-control" />
            </div>
          </div>

          <router-link class="link" to="/">
            <div class="d-grid gap-2 mb-2">
              <button class="btn btn-primary" type="button">
                Solicitar Acesso
              </button>
            </div>
          </router-link>

          <router-link class="link" to="/Login">
            <div class="d-grid gap-2">
              <button class="btn btn-outline-primary" type="button">
                Cancelar
              </button>
            </div>
          </router-link>
        </div>
      </div>
      <footer>2022 © Secure Brasil - secure.com.br</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestAccess",
  methods: {
    mask: function () {
      var v = this.$refs.inputPhone.value;

      v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
      v = v.replace(/^(\d\d)(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      v = v.replace(/(\d{5})(\d)/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos

      this.$refs.inputPhone.value = v;
    },
  },
};
</script>

<style scoped lang="scss" src="./scss/Request_Access.scss"></style>
