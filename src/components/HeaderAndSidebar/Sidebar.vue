<template>
  <div class="col-2 container-sidebar">
    <ul class="list-group">
      <li class="list-group-item">
        <fa icon="chart-line" class="icon" /><span>Dashboard</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item" @click="menuActionExp()">
        <fa icon="id-card" class="icon" /><span class="subtitle">Cadastro</span
        ><fa
          icon="chevron-down"
          @click="menuActionCol()"
          class="float-end mt-1"
          v-bind:class="{ 'rotate-arrow': rotate }"
        />
      </li>
      <div
        class="register"
        v-bind:class="{ 'display-none': collected, 'display-block': expanded }"
      >
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
      collected: true,
      expanded: false,
      rotate: false,
    };
  },
  methods: {
    menuActionExp() {
      if (this.collected) {
        this.collected = false;
        this.expanded = true;
        this.rotate = true;
      } else {
        this.collected = true;
        this.expanded = false;
        this.rotate = false;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./scss/sidebar.scss"></style>
