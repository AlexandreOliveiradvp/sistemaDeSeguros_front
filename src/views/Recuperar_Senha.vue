<template>
    <div class="body">
        <div>
            <div class="login-card">
                <img class="logo mb-2" width="220" src="../assets/logo.png"/>
                <span class="version-label" >Versão 1.0.0</span>

                <h4>Recuperar Senha</h4>
                <span class="descricao-label mb-4" >Insira o seu nome de usuário para soliciar um e-mail de redefinição de senha.</span>

                <div class="form-control border-0">

                    <div class="mb-3">
                        <label class="form-label">Usuário</label>
                        <div class="input-group">
                            <input type="text" class="form-control">
                        </div>
                    </div>

                    <div class="d-grid gap-2 mb-2">
                        <button class="btn btn-primary" type="button">Solicitar e-mail</button>
                    </div>

                    <router-link class="link" to="/Login">
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary" type="button">Cancelar</button>
                        </div>
                    </router-link>

                </div>
            </div>
            <footer> 2022 © Secure Brasil - secure.com.br</footer>
        </div>
    </div>
</template>

<script>

export default ({
    name: "RecuperarSenha"
})

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
    .form-control:focus {
        color: #212529;
        background-color: #fff;
        border-color: #1ABBB8;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgb(26 187 184 / 0%);
    }
    .version-label{
        font-family: 'Roboto';
        font-size: 13px;
        font-weight: 400;
        color: rgb(152, 166, 173);
        margin-bottom: 20px;
        width: 220px;
        text-align: end;
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
    .descricao-label{
        font-family: 'Roboto';
        color: rgb(152, 166, 173);
        font-size: 14px;
        max-width: 280px;
        text-align: center;
    }
    .btn-outline-primary{
        border: 1px solid #158f8d;
        color: #158f8d;
    }
    .btn-outline-primary:hover{
        background-color: #158f8d;
        border: 1px solid #158f8d;
        color: #FFF;
    }
    .btn-outline-primary:focus{
        box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
    }
    .link{
        text-decoration: none;
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
</style>
