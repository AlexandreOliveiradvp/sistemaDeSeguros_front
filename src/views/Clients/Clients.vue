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
                            <th>Razão Social</th>
                            <th>Segmento</th>
                            <th>CNPJ</th>
                            <th>Data de Cadastro</th>
                            <th>Status</th>
                            <th>Teste</th>
                        </tr>
                    </thead>
             <tbody>
               <tr>
                 <td>
                   picas
                 </td>
                 <td>
                   picas
                 </td>
                 <td>
                   picas
                 </td>
                 <td>
                   picas
                 </td>
                 <td>
                   picas
                 </td>
                 <td>
                   picas
                 </td>
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
  /* mounted(){
    let table = new DataTable('#example');
  } */
};
</script>
<style scoped lang="scss" src="./scss/Clients.scss"></style>
