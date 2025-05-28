console.log("Questão 01: Impressão de Números Pares")


let numeroint = parseInt(prompt("Digite até qual número você deseja exibir os pares"));

for (let pares = 0; pares <= numeroint; pares = pares + 2 ) {
    console.log(pares);
}


console.log("Questão 02: Contagem Regressiva");

for (let i = 10; i >= 0; i-- ) {
    console.log("..." + i);
}

console.log("Questão 03: Tabuada de Multiplicação");

let num = parseInt(prompt("Digite qual número você deseja calcular a tabuada: "));

for (let i = 1; i <= 10; i++) {
    resultado = i * num;
    console.log(num + " x " + i + " = " + resultado);
}