<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Usuários</h1>
            <div class="d-flex">
                <router-link class="link" to="/Usuarios"><p class="text-secondary">Usuários</p></router-link>
                <p class="arrow-link">>></p>
                <router-link class="link" to="/CadastrarUsuarios"><p class="text-secondary">Cadastrar Usuários</p></router-link>
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients">
              Salvar Usuário
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card mt-2">
            <div class="card-header bg-white text-secondary"><fa icon="table"/><span class="ps-1">Dados do Clientes</span></div>
            <div class="card-body">
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Nome:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite a razão social"
                      ref="inputName"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o nome!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Telefone:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputPhone"
                      v-mask="'(##)####-####'"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o telefone!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Email:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputEmail"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o email!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex">  
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >CPF:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputCpf"
                      v-mask="'##.###.###/####-##'"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o CNPJ!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Tipo:</label
                  >
                  <div class="mb-3">
                    <select name="" class="form-select form-select-sm input-text">
                      <option value="null">Selecione</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Financeiro">Financeiro</option>
                      <option value="Vendas">Vendas</option>
                      <option value="Gerência">Gerência</option>
                    </select>
                    <div class="invalid-feedback">
                      <span class="invalid">Selecione uma opção!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Departamento:</label
                  >
                  <div class="mb-3">
                    <select name="" class="form-select form-select-sm input-text">
                      <option value="null">Selecione</option>
                      <option value="Gerência">Gerência</option>
                      <option value="Financeiro">Comercial</option>
                      <option value="Tecnologia da Informação">Tecnologia da Informação</option>
                    </select>
                    <div class="invalid-feedback">
                      <span class="invalid">Selecione uma opção!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Status:</label
                  >
                  <div class="mb-3">
                    <select name="" class="form-select form-select-sm input-text">
                      <option value="null">Selecione</option>
                      <option value="Ativo">Ativo</option>
                      <option value="Inativo">Inativo</option>
                    </select>
                    <div class="invalid-feedback">
                      <span class="invalid">Selecione uma opção!</span>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card mt-2">
            <div class="card-header bg-white text-secondary"><fa icon="table"/><span class="ps-1">Dados do Clientes</span></div>
            <div class="card-body">
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Nome usuário:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome de usuário!"
                      ref="inputName"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o nome de usuário!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Senha:</label
                  >
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite a senha!"
                      ref="inputPhone"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite a senha!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Repita a senha:</label
                  >
                  <div class="mb-3">
                    <input
                      type="password"
                      class="form-control form-control-sm input-text"
                      placeholder="Repita a senha!"
                      ref="inputPhone"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Repita a senha!</span>
                    </div>
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
  name: "RegisterUsers",
};
</script>
<style scoped lang="scss" src="./scss/RegisterUsers.scss"></style>