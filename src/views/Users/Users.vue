<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Usuários</h1>
            <router-link class="link" to="/Usuarios"
              ><p class="text-secondary">Usuários</p></router-link
            >
          </div>
          <div class="col">
            <router-link class="link" to="/CadastrarUsuarios"
              ><button class="btn float-end btn-clients">
                Adicionar Usuários
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
};
</script>
<style scoped lang="scss" src="./scss/Users.scss"></style>