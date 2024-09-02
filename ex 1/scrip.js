let somaIdades = 0;
let qtdAlunos = 0;
let idade = 0;

while (true) {
  idade = parseInt(prompt("Digite a idade do aluno ou 999 para encerrar:"));
  if (idade === 999) {
    break;
  }
  somaIdades += idade;
  qtdAlunos++;
}

let mediaIdades = qtdAlunos > 0 ? somaIdades / qtdAlunos : 0;

console.log("Quantidade de alunos na turma: " + qtdAlunos);
console.log("Média de idade do grupo: " + mediaIdades.toFixed(2));