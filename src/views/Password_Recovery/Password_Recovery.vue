<template>
  <div class="body">
    <div>
      <div class="login-card">
        <img class="logo mb-2" width="220" src="../../assets/logo.png" />
        <span class="version-label">Versão 1.0.0</span>

        <h4>Recuperar Senha</h4>
        <span class="descricao-label mb-4"
          >Insira o seu nome de usuário para soliciar um e-mail de redefinição
          de senha.</span
        >

        <div class="form-control border-0">
          <div class="mb-3">
            <label class="form-label">Usuário</label>
            <div class="input-group">
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="d-grid gap-2 mb-2">
            <button class="btn btn-primary" type="button">
              Solicitar e-mail
            </button>
          </div>

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
  name: "PasswordRecover",
};
</script>

<style scoped lang="scss" src="./scss/Password_Recovery.scss"></style>
