<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Usuários</h1>
            <div class="d-flex">
                <router-link class="link" to="/Usuarios"><p class="text-secondary">Usuários</p></router-link>
                <p class="arrow-link">>></p>
                <router-link class="link" to="/CadastrarUsuarios"><p class="text-secondary">Cadastrar Usuários</p></router-link>
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients">
              Salvar Usuário
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUsers",
};
</script>
<style scoped lang="scss" src="./scss/RegisterUsers.scss"></style>