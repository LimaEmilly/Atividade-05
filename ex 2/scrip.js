let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = 'sim';

while (continuar.toLowerCase() === 'sim') {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));
  let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):");

  if (sexo.toLowerCase() === 'm') {
    totalSalarioHomens += salario;
  } else if (sexo.toLowerCase() === 'f') {
    totalSalarioMulheres += salario;
  }

  continuar = prompt("Deseja continuar? (Sim/Não)");
}

console.log("Total de salários pagos aos homens: R$ " + totalSalarioHomens.toFixed(2));
console.log("Total de salários pagos às mulheres: R$ " + totalSalarioMulheres.toFixed(2));