var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;

function ligarDesligar(){
    if(statusCarro === "desligado"){
        statusCarro = "ligado";
    } else {
        statusCarro = "desligado";
    }

    return statusCarro;
}
function acelerar(incremento){
    aceleracao +=  incremento;
    return "Acelerando a " + aceleracao + "m/s²";
}
function frear(decremento){
    aceleracao -=  decremento;
    return "Desacelerando para " + aceleracao + "m/s²";
}
function girarVolante(anguloRotacao){
    rotacaoDoVolante = anguloRotacao;
    return rotacaoDoVolante + "º";
}

console.log(ligarDesligar());
console.log(acelerar(20));
console.log(frear(10));
console.log(girarVolante(-10));

function imprimeSaudacao(nome){
    console.log("Olá, " + nome + "!");
}
var nome = "Grace";
imprimeSaudacao(nome);

console.log(10%3);