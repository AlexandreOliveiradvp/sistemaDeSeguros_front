<template>
  <div>
    <nav class="navbar navbar-light bg-light border">
      <div class="container-fluid col-3">
        <a class="navbar-brand" href="#">Logo</a>
        <fa icon="phone" />
        <fa icon="id-card" />
      </div>
            <div class="col-6">Espaçamento</div>
            <div class="col-3 text-end">
        <a class="navbar-brand" href="#">Info cliente</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderAndSidebar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./style.scss"></style>
