let distancia = parseFloat(prompt("Qual a distância que você deseja percorrer em Km?"));
let precoPassagem;

if (distancia <= 200) {
    precoPassagem = distancia * 0.50;
} else {
    precoPassagem = distancia * 0.45;
}

alert("O preço da sua passagem é: R$" + precoPassagem.toFixed(2));