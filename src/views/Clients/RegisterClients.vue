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
            <button class="btn float-end btn-clients" @click="Validation()">
              Salvar Cliente
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card mt-2">
            <div class="card-header bg-white text-secondary">Dados Usuário</div>
            <div class="card-body">
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-3 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Razão Social:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Digite a razão social"
                      ref="inputSocialReason"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid">Digite a Razão Social!</span>
                  </div>
                </div>
                <div class="col-md-12 col-lg-3 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Nome Fantasia:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Digite o nome fantasia"
                      ref="inputFantasyName"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid">Digite o nome fantasia!</span>
                  </div>
                </div>
                <div class="col-md-12 col-lg-3 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Telefone:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Digite o telefone"
                      ref="inputPhone"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid">Digite o telefone!</span>
                  </div>
                </div>
                <div class="col-md-12 col-lg-3 ps-2">
                  <label class="form-label label-input text-secondary"
                    >Email:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Digite o email"
                      ref="inputEmail"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid">Digite o email!</span>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-3 pe-2">
                  <label class="form-label label-input text-secondary"
                    >CNPJ:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Digite o CNPJ"
                      ref="inputCnpj"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid">Digite o CNPJ!</span>
                  </div>
                </div>
                <div class="col-md-12 col-lg-2 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Número Funcionario:</label
                  >
                  <div class="input-group mb-3">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      min="01"
                      max="5000"
                      ref="inputNumberEmployees"
                    />
                  </div>
                  <div class="invalid-feedback">
                    <span class="invalid"
                      >Informe o número de funcionários!</span
                    >
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
  data() {
    return {};
  },
  methods: {
    Validation: function () {
      if (
        this.$refs.inputSocialReason.value == "" ||
        this.$refs.inputFantasyName.value == "" ||
        this.$refs.inputPhone.value == "" ||
        this.$refs.inputEmail.value == "" ||
        this.$refs.inputCnpj.value == "" ||
        this.$refs.inputCnpj.value == ""
      ) {
        if (this.$refs.inputSocialReason.value == "") {
          this.$refs.inputSocialReason.classList.add("is-invalid");
        }
        if (this.$refs.inputFantasyName.value == "") {
          this.$refs.inputFantasyName.classList.add("is-invalid");
        }
        if (this.$refs.inputPhone.value == "") {
          this.$refs.inputPhone.classList.add("is-invalid");
        }
        if (this.$refs.inputEmail.value == "") {
          this.$refs.inputEmail.classList.add("is-invalid");
        }
        if (this.$refs.inputCnpj.value == "") {
          this.$refs.inputCnpj.classList.add("is-invalid");
        }
        if (this.$refs.inputNumberEmployees.value == "") {
          this.$refs.inputNumberEmployees.classList.add("is-invalid");
        }
      }
      else{
        alert ('submeteu formulário!');
      }
    },
  },
};
</script>
<style scoped lang="scss" src="./scss/RegisterClients.scss"></style>
