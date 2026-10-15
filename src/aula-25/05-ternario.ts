// Exercício 5: operador ternário  (condicao ? seTrue : seFalse)

const emEstoque = true;
console.log(emEstoque ? "Em estoque" : "Fora de estoque");
// esperado: Em estoque

const ecoFriendly = false;
const selo = ecoFriendly ? "Produto ecológico" : "Produto padrão";
console.log(selo); // esperado: Produto padrão

const preco = 14.15;
const faixa = preco < 10 ? "Barato" : preco < 20 ? "Médio" : "Caro"; // encadeado
console.log(`Faixa de preço: ${faixa}`); // esperado: Faixa de preço: Médio

// if/else
let faixaIf: string;
if (preco < 10) {
  faixaIf = "Barato";
} else if (preco < 20) {
  faixaIf = "Médio";
} else {
  faixaIf = "Caro";
}
console.log(faixaIf === faixa); // esperado: true

const paginaAtual = 1;
const ultimaPagina = 5;
console.log(paginaAtual < ultimaPagina ? "Tem próxima página" : "Última página");
// esperado: Tem próxima página