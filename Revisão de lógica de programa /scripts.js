console.log("Questão 01: Calculadora de Média de Notas");

let nota1 = parseFloat(prompt("Digite uma nota entre 0 e 10"));
let nota2 = parseFloat(prompt("Digite uma nota entre 0 e 10"));
let nota3 = parseFloat(prompt("Digite uma nota entre 0 e 10"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log("Sua média é: " + media + ". Você foi Aprovado!");
} else {
    console.log("Sua média é: " + media + ". Você foi Reprovado!");
}


console.log("Questão 02: Algoritmo de Verificação de Idade para Carteira de Motorista");


let idade = parseInt(prompt("Digite sua idade"));

if (idade >= 18) {
    console.log("Você pode obter a carteira de motorista");
} else {
    console.log("Você não pode obter a carteira de motorista");
}


console.log("Questão 03: Algoritmo de Verificação de Saldo");

let saldo = parseFloat(prompt("Digite o saldo da  conta"));
let valorcompra = parseFloat(prompt("Digite o valor da compra"));

if (saldo >= valorcompra) {
    console.log("Compra realizada com sucesso");
} else {
    console.log("Saldo insuficiente");
}


console.log("Questão 04: Calculadora de Índice de Massa Corporal (IMC)");

let peso = parseFloat(prompt("Digite seu peso em kg"));
let altura = parseFloat(prompt("Digite sua altura em metros"));

let imc = peso / (altura * altura);

if (imc <= 18.5) {
    console.log("Seu IMC é: " + imc +". Você está Abaixo do peso.");
} else if ( 18.5 <= imc <= 24.9) {
    console.log("Seu IMC é: " + imc + ". Você está com o Peso normal.");
} else if (25 <= imc < 29.9) {
    console.log("Seu IMC é: " + imc + ". Você está com Sobrepeso.");
} else {
    console.log("Seu IMC é: " + imc + ". Você está com Obesidade.");
}