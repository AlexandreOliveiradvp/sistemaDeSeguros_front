<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col d-flex">
          <div class="col">
            <h1 class="text-secondary pt-2">Cadastrar Operadoras</h1>
            <div class="d-flex">
                <router-link class="link" to="/Operadoras"><p class="text-secondary">Operadoras</p></router-link>
                <p class="arrow-link">>></p>
                <router-link class="link" to="/CadastrarOperadoras"><p class="text-secondary">Cadastrar Operadoras</p></router-link>
            </div>
          </div>
          <div class="col">
            <button class="btn float-end btn-clients" @click="Validation()">
              Salvar Operadoras
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
                    >Nome Fantasia:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite a razão social"
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
                    >CNPJ:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputCnpj"
                      v-mask="'##.###.###/####-##'"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite o CNPJ!</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-lg-4 ps-2 pe-2">
                  <label class="form-label label-input text-secondary"
                    >Razão Social:</label
                  >
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control form-control-sm input-text"
                      placeholder="Digite o nome fantasia"
                      ref="inputSocialReason"
                    />
                    <div class="invalid-feedback">
                      <span class="invalid">Digite a razão social!</span>
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
  name: "RegisterOperators",
  data(){
    return{}
  },
  methods: {
    Validation: function () {
      if (
        this.$refs.inputFantasyName.value == "" ||
        this.$refs.inputPhone.value == "" ||
        this.$refs.inputEmail.value == "" ||
        this.$refs.inputCnpj.value == "" ||
        this.$refs.inputSocialReason.value == ""
      ) {
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
        if (this.$refs.inputSocialReason.value == "") {
          this.$refs.inputSocialReason.classList.add("is-invalid");
        }
        this.$refs.inputFantasyName.addEventListener('change',this.CleanIvalid);
        this.$refs.inputPhone.addEventListener('change',this.CleanIvalid);
        this.$refs.inputEmail.addEventListener('change',this.CleanIvalid);
        this.$refs.inputCnpj.addEventListener('change',this.CleanIvalid);
        this.$refs.inputSocialReason.addEventListener('change',this.CleanIvalid);
      } else {
        alert("submeteu formulário!");
      }
    },
    CleanIvalid: function (){
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
      if (this.$refs.inputSocialReason.value != "") {
          this.$refs.inputSocialReason.classList.remove("is-invalid");
        }
    }
  },
};
</script>
<style scoped lang="scss" src="./scss/RegisterOperators.scss"></style>