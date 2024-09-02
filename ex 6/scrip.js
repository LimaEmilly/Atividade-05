let largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
let comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros:"));
let area = largura * comprimento;
let classificacao;

if (area < 100) {
    classificacao = "TERRENO POPULAR";
} else if (area >= 100 && area <= 500) {
    classificacao = "TERRENO MASTER";
} else {
    classificacao = "TERRENO VIP";
}

alert("Área do terreno: " + area.toFixed(2) + "m2\nClassificação: " + classificacao);