<template>
    <div class="body">
        <div>
            <div class="login-card">
                <img class="logo mb-2" width="220" src="../assets/logo.png"/>
                <span class="version-label" >Versão 1.0.0</span>

                <div class="form-control border-0">
                    <div class="mb-3">
                        <label class="form-label">Usuário</label>
                        <div class="input-group">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="mb-4">
                        <label class="form-label">Senha</label>
                        <div class="input-group">
                            <input ref="inputPassword" type="password" class="form-control">
                            <button v-on:click="revealPassword" class="btn btn-outline-secondary" type="button">
                                <fa v-if="eye" icon="eye-slash" class="icon" />
                                <fa v-if="!eye" icon="eye" class="icon" />
                            </button>
                        </div>
                    </div>

                    <router-link class="link" to="/">
                        <div class="d-grid gap-2 mb-2">
                            <button class="btn btn-primary" type="button">Entrar</button>
                        </div>
                    </router-link>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary" type="button">Cadastrar</button>
                    </div>
                </div>

            </div>
            <footer> 2022 © Secure Brasil - secure.com.br</footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                eye: true
            }
        },
        methods: {
            revealPassword: function () {
                if(this.$refs.inputPassword.type === 'password'){
                    this.$refs.inputPassword.type = 'text';
                    this.eye = false;
                }else{
                    this.$refs.inputPassword.type = 'password';
                    this.eye = true;
                }
            }
        }
  }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    .body{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("../assets/background.png");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .login-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        min-width: 408px;
        padding: 60px 20px 24px 20px; 
        border: 1px solid #D8D8D8;
        box-sizing: border-box;
        border-radius: 16px;
        filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.1));
    }
    .logo{
        margin-left: 15px;
        user-select: none;
    }
    .btn-primary{
        background-color: #1ABBB8;
        border: 1px solid #1ABBB8;
    }
    .btn-primary:hover{
        background-color: #158f8d;
        border: 1px solid #158f8d;
    }
    .btn-primary:focus {
        background-color: #158f8d;
        border-color: #158f8d;
        box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
    }
    .btn-primary:active{
        background-color: #158f8d;
        border-color: #158f8d;
    }
    .btn-primary:active:focus{
        box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
    }
    .btn-outline-primary{
        border: 1px solid #158f8d;
        color: #158f8d;
    }
    .btn-outline-primary:hover{
        background-color: #158f8d;
        border: 1px solid #158f8d;
    }
    .form-label{
        margin-bottom: 0.0rem;
        user-select: none;
    }
    .form-control:focus {
        color: #212529;
        background-color: #fff;
        border-color: #1ABBB8;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(26 187 184 / 0%);
    }
    .btn-outline-secondary:focus {
        box-shadow: 0 0 0 0.25rem rgb(108 117 125 / 0%);
    }
    .version-label{
        font-family: 'Roboto';
        font-size: 13px;
        font-weight: 400;
        color: rgb(152, 166, 173);
        margin-bottom: 50px;
        width: 220px;
        text-align: end;
        user-select: none;
    }
    footer{
        position: absolute;
        bottom: 10px;
        font-family: 'Roboto';
        font-size: 13px;
        font-weight: 400;
        color: rgb(152, 166, 173);
        width: 408px;
        text-align: center;
    } 
    .btn-outline-secondary{
        border: solid 1px #ced4da;
    }
    .link{
        text-decoration: none;
    }
</style>
