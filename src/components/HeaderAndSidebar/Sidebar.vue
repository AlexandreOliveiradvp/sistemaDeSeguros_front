<template>
  <div class="col-2 container-sidebar">
    <ul class="list-group">
      <li class="list-group-item">
        <fa icon="chart-line" class="icon" /><span>Dashboard</span>
      </li>
    </ul>
    <ul @click="menuAction()" class="list-group">
      <li class="list-group-item">
        <fa icon="id-card" class="icon" /><span class="subtitle">Cadastro</span
        ><fa icon="chevron-down" class="float-end mt-1" />
      </li>
      <div class="register" v-bind:class="drop">
        <li class="list-group-item ps-4">
          <span class="arrow">>></span><span>Clientes</span>
        </li>
        <li class="list-group-item ps-4">
          <span class="arrow">>></span><span>Operadoras</span>
        </li>
        <li class="list-group-item ps-4">
          <span class="arrow">>></span><span>Usuários</span>
        </li>
      </div>
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
  data() {
    return {
      drop: "display-none",
    };
  },
  methods: {
    menuAction() {
      if (this.drop == "display-none") this.drop = "display-block";
      /*       else (this.drop == 'display-block')
        this.drop = 'display-none' */
    },
  },
};
</script>

<style scoped lang="scss" src="./scss/sidebar.scss"></style>
