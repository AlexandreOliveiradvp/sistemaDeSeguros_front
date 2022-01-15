<template>
  <div class="col-2 container-sidebar">
    <ul class="list-group">
      <li class="list-group-item">
        <fa icon="chart-line" class="icon" /><span>Dashboard</span>
      </li>
    </ul>
    <ul class="list-group register">
      <li class="list-group-item">
        <fa icon="id-card" class="icon" /><span class="subtitle">Cadastro</span>
      </li>
      <li class="list-group-item ps-4">
        <span class="arrow">>></span><span>Clientes</span>
      </li>
      <li class="list-group-item ps-4">
        <span class="arrow">>></span><span>Operadoras</span>
      </li>
      <li class="list-group-item ps-4">
        <span class="arrow">>></span><span>Usuários</span>
      </li>
    </ul>
        <ul class="list-group">
      <li class="list-group-item">
        <fa icon="sign-out-alt" class="icon" /><span>Sair</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
/* methods: {
  alert("teste");
} */
</script>



<style scoped lang="scss" src="./scss/sidebar.scss"></style>