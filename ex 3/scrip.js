let valorInicial = parseInt(prompt("Digite o primeiro Valor:"));
let valorFinal = parseInt(prompt("Digite o último Valor:"));
let incremento = parseInt(prompt("Digite o incremento:"));
let contagem = "Contagem: ";

for (let i = valorInicial; i < valorFinal; i += incremento) {
  contagem += i + " ";
}

contagem += "Acabou!";
console.log(contagem);