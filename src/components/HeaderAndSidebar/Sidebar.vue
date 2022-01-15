<template>
  <div class="col-2 container-sidebar">
    <ul class="list-group li-group">
      <li class="list-group-item">
        <fa icon="chart-line" class="icon" /><span>Dashboard</span>
      </li>
    </ul>
    <ul class="list-group li-group">
      <li class="list-group-item">
        <fa icon="id-card" class="icon" /><span>Cadastro</span>
      </li>
      <li class="list-group-item">
        <fa icon="arrow-right" class="icon" /><span>Clientes</span>
      </li>
      <li class="list-group-item">
        <fa icon="arrow-right" class="icon" /><span>Operadoras</span>
      </li>
      <li class="list-group-item">
        <fa icon="arrow-right" class="icon" /><span>Usuários</span>
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