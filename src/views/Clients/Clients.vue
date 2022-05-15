<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
          <h1 class="text-secondary pt-2">Clientes</h1>
          <router-link class="link" to="/Clientes"><p class="text-secondary">Clientes</p></router-link>
          </div>
          <div class="col">
          <router-link class="link" to="/CadastrarClientes"><button class="btn float-end btn-clients">Adicionar Clientes</button></router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table id="example" class="display table" style="width:100%">
            <thead>
              <tr>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
                <th>Email</th>
              </tr>
            </thead>
             <tbody>
               <tr v-for="client in clients" v-bind:key="client.Id">
                 <td>{{ client.FantasyName }}</td>
                 <td>{{ client.CNPJ }}</td>
                 <td>{{ client.Email }}</td>
               </tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clients",
  data() {
    return {
      clients:[]
    }
  },
  mounted(){
    this.getData();
  },
  methods: {
    async getData(){
      await this.axios
        .get(`http://localhost:3000/Client/${localStorage.getItem("token")}`)
        .then((response) => {
          this.clients = response.data.result;
        });
      let table = new DataTable('#example');
    }
  }
};
</script>
<style scoped lang="scss" src="./scss/Clients.scss"></style>
