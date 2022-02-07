<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Clientes</h1>
            <div class="d-flex">
                <router-link class="link" to="/Clientes"><p class="text-secondary">Clientes</p></router-link>
                <p class="arrow-link">>></p>
                <router-link class="link" to="/CadastrarClientes"><p class="text-secondary">Cadastrar Clientes</p></router-link>
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients">
              Salvar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterClients",
};
</script>
<style scoped lang="scss" src="./scss/RegisterClients.scss"></style>
