function logar(){ //validação do login
    let inputUsuario = document.getElementById("campo_usuario")
    let inputSenha = document.getElementById("campo_senha")
    let usuario = inputUsuario.value
    let senha = inputSenha.value 
    if (usuario == "adm"){
        if (senha == "123"){
            window.location.replace("../estrutura/inicio.html") // window.locate.replace(link) -> redireciona o usuário para outra página.
        } else {
            console.log("Senha incorreta")
            window.alert("Um dos campos está incorreto.")
        }
    } else {
        console.log("Usuário incorreto")
        window.alert("Um dos campos está incorreto.")
    }
};

function recuperarSenha(){
    window.alert("Recuperar senha: Funcionando.")
};

function site_login(){
    window.location.replace("../estrutura/login.html")
};

function site_cadastro(){
    window.location.replace("../estrutura/cadastro.html")
}

let icone = document.getElementsByClassName("imagem_tres_barras")[0];

icone.addEventListener("click", function(){
    window.location.replace("../estrutura/menu.html")
})