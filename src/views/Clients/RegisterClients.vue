<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Clientes</h1>
            <div class="d-flex">
              <router-link class="link" to="/Clientes"
                ><p class="text-secondary">Clientes</p></router-link
              >
              <p class="arrow-link">>></p>
              <router-link class="link" to="/CadastrarClientes"
                ><p class="text-secondary">Cadastrar Clientes</p></router-link
              >
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients">Salvar Cliente</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card mt-2">
            <div class="card-header bg-white text-secondary">Dados Usuário</div>
              <div class="card-body ">
                <div class="col-12 d-flex">
                  <div class="col-md-12 col-lg-3 pe-2">
                    <label class="form-label label-input text-secondary">Nome:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite seu nome">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2 pe-2">
                    <label class="form-label label-input text-secondary">Email:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite seu email">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2 pe-2">
                    <label class="form-label label-input text-secondary">CPF:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite seu CPF">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2">
                    <label class="form-label label-input text-secondary">Telefone:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite seu telefone">
                    </div>
                  </div>
                </div>
                <div class="col-12 d-flex">
                  <div class="col-md-12 col-lg-3 pe-2">
                    <label class="form-label label-input text-secondary">Nome de Usuário:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite o nome">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2 pe-2">
                    <label class="form-label label-input text-secondary">Senha:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control" placeholder="Digite a senha">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2 pe-2">
                    <label class="form-label label-input text-secondary">Tipo:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 ps-2">
                    <label class="form-label label-input text-secondary">Departamento:</label>
                    <div class="input-group mb-3">
                      <input type="text" class="form-control">
                    </div>
                  </div>
                </div>
              </div>
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
