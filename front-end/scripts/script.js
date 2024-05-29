function logar(){
    let input_usuario = document.getElementById("campo_usuario")
    let input_senha = document.getElementById("campo_senha")
    let usuario = input_usuario.value
    let senha = input_senha.value 
    if (usuario == "adm"){
        if (senha == "123"){
            window.location.replace("../estrutura/inicio.html") // window.locate.replace(link) -> redireciona o usuário para outra página.
        } else {
            console.log("Senha incorreta")
        }
    } else {
        console.log("Usuário incorreto")
    }
};