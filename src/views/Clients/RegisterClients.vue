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
            <div class="card-header bg-white text-secondary"><fa icon="table"/><span class="ps-1">Dados do Clientes</span></div>
            <div class="card-body">
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Razão Social:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite a razão social"
                      ref="inputSocialReason"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite a Razão Social!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Nome Fantasia:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputFantasyName"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o nome fantasia!</span>
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
                      placeholder="(12)1234-5678"
                      ref="inputPhone"
                      maxlength="14"
                      v-mask="'(##)####-####'"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o telefone!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 d-flex">
                <div class="col-md-12 col-lg-4 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Email:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="email@email.com.br"
                      ref="inputEmail"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o email!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 pe-2 ps-2">
                  <label class="form-label label-input text-secondary"
                    >CNPJ:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="12.345.678/1234-56"
                      ref="inputCnpj"
                      v-mask="'##.###.###/####-##'"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o CNPJ!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-2 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Número Funcionários:</label
                  >
                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control form-control-sm"
                      min="01"
                      max="5000"
                      ref="inputNumberEmployees"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">
                        Informe o número de funcionários!
                      </span>
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
        this.$refs.inputSocialReason.addEventListener('change',this.CleanIvalid);
        this.$refs.inputFantasyName.addEventListener('change',this.CleanIvalid);
        this.$refs.inputPhone.addEventListener('change',this.CleanIvalid);
        this.$refs.inputEmail.addEventListener('change',this.CleanIvalid);
        this.$refs.inputCnpj.addEventListener('change',this.CleanIvalid);
        this.$refs.inputNumberEmployees.addEventListener('change',this.CleanIvalid);
      } else {
        alert("submeteu formulário!");
      }
    },
    CleanIvalid: function (){
      if (this.$refs.inputSocialReason.value != "") {
          this.$refs.inputSocialReason.classList.remove("is-invalid");
        }
      if (this.$refs.inputFantasyName.value != "") {
          this.$refs.inputFantasyName.classList.remove("is-invalid");
        }
      if (this.$refs.inputPhone.value != "") {
          this.$refs.inputPhone.classList.remove("is-invalid");
        }  
      if (this.$refs.inputEmail.value != "") {
          this.$refs.inputEmail.classList.remove("is-invalid");
        }
      if (this.$refs.inputCnpj.value != "") {
          this.$refs.inputCnpj.classList.remove("is-invalid");
        }
      if (this.$refs.inputNumberEmployees.value != "") {
          this.$refs.inputNumberEmployees.classList.remove("is-invalid");
        }
    }
  },
};
</script>
<style scoped lang="scss" src="./scss/RegisterClients.scss"></style>
