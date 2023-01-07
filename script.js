/*seleçao cardápio*/
var pratoNome,pratoPreco,bebidaNome,bebidaPreco,sobremesaNome,sobremesaPreco;
var pedidosEscolhidos = false

function selecionarPrato(elemento){
    const elementoSelecionado = document.querySelector("div.pratos .selecionado");
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.pratos div.selecionado img.check-icon");
        checkIcon.classList.toggle("display-none");
        elementoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.toggle("selecionado");
    const check = document.querySelector("div.pratos div.selecionado img.check-icon");
    check.classList.toggle("display-none");
    pratoNome = document.querySelector(".selecionado .nome-prato").innerHTML;
    pratoPreco = document.querySelector(".selecionado .preco-prato").innerHTML;
}

function selecionarBebida(elemento){
    const elementoSelecionado = document.querySelector("div.bebidas .selecionado");
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.bebidas div.selecionado img.check-icon");
        checkIcon.classList.toggle("display-none");
        elementoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.toggle("selecionado");
    const check = document.querySelector("div.bebidas div.selecionado img.check-icon");
    check.classList.toggle("display-none");
    bebidaNome = document.querySelector(".selecionado .nome-bebida").innerHTML;
    bebidaPreco = document.querySelector(".selecionado .preco-bebida").innerHTML;
}

function selecionarSobremesa(elemento){
    const elementoSelecionado = document.querySelector("div.sobremesas .selecionado");
    if (elementoSelecionado != null) {
        const checkIcon = document.querySelector("div.sobremesas div.selecionado img.check-icon");
        checkIcon.classList.toggle("display-none");
        elementoSelecionado.classList.remove("selecionado");
    }
    elemento.classList.toggle("selecionado");
    const check = document.querySelector("div.sobremesas div.selecionado img.check-icon");
    check.classList.toggle("display-none");
    sobremesaNome = document.querySelector(".selecionado .nome-sobremesa").innerHTML;
    sobremesaPreco = document.querySelector(".selecionado .preco-sobremesa").innerHTML;
}

function tudoEscolhido(){
    const pratos = document.querySelector("div.pratos .selecionado");
    const bebidas = document.querySelector("div.bebidas .selecionado");
    const sobremesas = document.querySelector("div.sobremesas .selecionado");
    if (pratos != null && bebidas != null && sobremesas != null && pedidosEscolhidos != true) {
        const bloqueado = document.querySelector("div.botaoBloqueado");
        const desbloqueado = document.querySelector("div.botaoDesbloqueado");
        bloqueado.classList.remove("botaoBloqueado");
        bloqueado.classList.add("display-none");
        desbloqueado.classList.remove("display-none");
        desbloqueado.classList.add("display-flex");
        pedidosEscolhidos = true
    }
}

function fecharPedido() {
    document.querySelector("div.fundo-opaco-confirmacao").classList.remove("display-none")
    document.querySelector("div.container-confirma-dados").classList.remove("display-none")
}