// Exercício 4: template string (crases e ${})

const nome = "Combination Pliers";
const marca = "ForgeFlex Tools";
const preco = 14.15;
const quantidade = 3;
const paginaAtual = 1;
const ultimaPagina = 5;

// Sem template string
console.log("Produto: " + nome + ", marca: " + marca);
// esperado: Produto: Combination Pliers, marca: ForgeFlex Tools

// Com template string
console.log(`Produto: ${nome}, marca: ${marca}`);
// esperado: Produto: Combination Pliers, marca: ForgeFlex Tools


// Expressões dentro do ${}
console.log(`Total: $${(preco * quantidade).toFixed(2)}`);
// esperado: Total: $42.45

console.log(`Página ${paginaAtual} de ${ultimaPagina}`);
// esperado: Página 1 de 5

const url = "https://practicesoftwaretesting.com";
console.log(`[TESTE] Listar produtos -> abrindo ${url}/`);

const relatorio = `Relatório
Produto: ${nome}
Total: ${(preco * quantidade).toFixed(2)}`;
console.log(relatorio);
// esperado (3 linhas): Relatório / Produto: Combination Pliers / Total: 42.45