let icone = document.getElementsByClassName("imagem_tres_barras")[0];
let menu = document.getElementById("aba_menu");
menu.style.transform = "translateX(-101%)"

icone.addEventListener("click", function(){
    if (menu.style.transform == "translateX(-101%)"){
        menu.style.transform = "translateX(0)"
        console.log("abrindo")
    } else {
        menu.style.transform = "translateX(-101%)"
        console.log("fechando")
    }
});

window.addEventListener("click", function(clique){ // evento de fechar o menu, caso clique fora do menu.
    if (!menu.contains(clique.target) && !icone.contains(clique.target)){ // se a tela foi clicada, porém o menu NÃO foi clicado E o icone também NÃO foi clicado,
        menu.style.transform = "translateX(-101%)" // o menu fecha
    }
});