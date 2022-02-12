<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Operadoras</h1>
            <div class="d-flex">
                <router-link class="link" to="/Operadoras"><p class="text-secondary">Operadoras</p></router-link>
                <p class="arrow-link">>></p>
                <router-link class="link" to="/CadastrarOperadoras"><p class="text-secondary">Cadastrar Operadoras</p></router-link>
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients">
              Salvar Operadoras
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterOperators",
};
</script>
<style scoped lang="scss" src="./scss/RegisterOperators.scss"></style>