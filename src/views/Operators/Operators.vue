<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Operadoras</h1>
            <router-link class="link" to="/Operadoras"
              ><p class="text-secondary">Operadoras</p></router-link
            >
          </div>
          <div class="col">
            <router-link class="link" to="/CadastrarOperadoras"
              ><button class="btn float-end btn-clients">
                Adicionar Operadoras
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
  name: "Operators",
};
</script>
<style scoped lang="scss" src="./scss/Operators.scss"></style>
