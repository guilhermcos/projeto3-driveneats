/*seleçao cardápio*/
var pratoNome,pratoPreco,bebidaNome,bebidaPreco,sobremesaNome,sobremesaPreco;
var pedidosEscolhidos = 0;
var totalMostrado;

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
    if (pratos !== null && bebidas !== null && sobremesas !== null && pedidosEscolhidos !== 1) {
        const bloqueado = document.querySelector("button.botaoBloqueado");
        const desbloqueado = document.querySelector("button.botaoDesbloqueado");
        bloqueado.classList.remove("botaoBloqueado");
        bloqueado.classList.add("display-none");
        desbloqueado.classList.remove("display-none");
        desbloqueado.classList.add("display-flex");
        desbloqueado.disabled = false;
        pedidosEscolhidos = 1;
    }
}

function fecharPedido() {
    //aparece tela de confirmação
    document.querySelector("div.fundo-opaco-confirmacao").classList.remove("display-none");
    document.querySelector("div.container-confirma-dados").classList.remove("display-none");

    //adiciona nome dos pedidos selecionado na tela de confirmação
    document.querySelector("div.pedido-comida span.nome-pedido").innerHTML = pratoNome;
    document.querySelector("div.pedido-bebida span.nome-pedido").innerHTML = bebidaNome;
    document.querySelector("div.pedido-sobremesa span.nome-pedido").innerHTML = sobremesaNome;

    //adiciona preços convertidos parcialmente na tela de confirmação
    const pratoPrecoConfirm = pratoPreco.replace("R$","");
    document.querySelector("div.pedido-comida span.preco-pedido").innerHTML = pratoPrecoConfirm;
    const bebidaPrecoConfirm = bebidaPreco.replace("R$","");
    document.querySelector("div.pedido-bebida span.preco-pedido").innerHTML = bebidaPrecoConfirm;
    const sobremesaPrecoConfirm = sobremesaPreco.replace("R$","");
    document.querySelector("div.pedido-sobremesa span.preco-pedido").innerHTML = sobremesaPrecoConfirm;

    //converte valores totalmente para numeros js
    const pratoPrecoConvertido = Number(pratoPrecoConfirm.replace(",","."));
    const bebidaPrecoConvertido = Number(bebidaPrecoConfirm.replace(",","."));
    const sobremesaPrecoConvertido = Number(sobremesaPrecoConfirm.replace(",","."));

    //operação de soma dos valores
    const valorTotal = pratoPrecoConvertido+bebidaPrecoConvertido+sobremesaPrecoConvertido;
    //conversão e colocando valor total mostrado na tela de confirmação de pedido
    totalMostrado = "R$ "+valorTotal.toFixed(2);
    totalMostrado = totalMostrado.replace(".",",");
    //adiçao do valor total para a tela de confirmação confirmação
    document.querySelector(".total-confirmar .preco-total").innerHTML = totalMostrado;
    totalMostrado=totalMostrado.replace(",",".");
}

function finalizarPedido() {
    let nomeCliente = prompt("Informe seu nome:");
    if (nomeCliente === null || nomeCliente === "") {nomeCliente = "Nome não informado.";}
    let enderecoCliente = prompt("Informe seu endereço:");
    if (enderecoCliente === null || enderecoCliente === "") {enderecoCliente = "Endereço não informado.";}
    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoNome}\n- Bebida: ${bebidaNome}\n- Sobremesa: ${sobremesaNome}\nTotal: ${totalMostrado}\n\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`;
    window.open(`https://wa.me/5521997576586?text=${encodeURIComponent(mensagem)}`);
}

function cancelarPedido() {
    document.querySelector("div.fundo-opaco-confirmacao").classList.add("display-none");
    document.querySelector("div.container-confirma-dados").classList.add("display-none");
}