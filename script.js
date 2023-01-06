/*seleçao cardápio*/

function selecionarPrato(elemento){
    let elementoSelecionado = document.querySelector("div.pratos .selecionado")
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.pratos div.selecionado img.check-icon")
        checkIcon.classList.toggle("display-none")
        elementoSelecionado.classList.remove("selecionado")
    }
    elemento.classList.toggle("selecionado");
    let check = document.querySelector("div.pratos div.selecionado img.check-icon");
    check.classList.toggle("display-none");
}

function selecionarBebida(elemento){
    let elementoSelecionado = document.querySelector("div.bebidas .selecionado")
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.bebidas div.selecionado img.check-icon")
        checkIcon.classList.toggle("display-none")
        elementoSelecionado.classList.remove("selecionado")
    }
    elemento.classList.toggle("selecionado");
    let check = document.querySelector("div.bebidas div.selecionado img.check-icon");
    check.classList.toggle("display-none");
}

function selecionarSobremesa(elemento){
    let elementoSelecionado = document.querySelector("div.sobremesas .selecionado")
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.sobremesas div.selecionado img.check-icon")
        checkIcon.classList.toggle("display-none")
        elementoSelecionado.classList.remove("selecionado")
    }
    elemento.classList.toggle("selecionado");
    let check = document.querySelector("div.sobremesas div.selecionado img.check-icon");
    check.classList.toggle("display-none");
}

function tudoEscolhido(){
    const pratos = document.querySelector("div.pratos .selecionado");
    const bebidas = document.querySelector("div.bebidas .selecionado");
    const sobremesas = document.querySelector("div.sobremesas .selecionado");
    if (pratos != null && bebidas != null && sobremesas != null) {
        const bloqueado = document.querySelector("div.botaoBloqueado");
        const desbloqueado = document.querySelector("div.botaoDesbloqueado");
        bloqueado.classList.remove("botaoBloqueado")
        bloqueado.classList.add("display-none")
        desbloqueado.classList.remove("display-none")
        desbloqueado.classList.add("display-flex")
    }
}
/*
quando clicado

clicado vai receber a classe .selecionado
icone do clicado vai ser retirado .display:none
*/