// Exercício 3: operadores

const preco = 14.15;
const quantidade = 3;
const total = 45;     
const porPagina = 9;

// Aritméticos
console.log(preco * quantidade); // esperado: 42.45
console.log(total / porPagina);  // esperado 5
console.log(total % porPagina);  // esperado: 0 
console.log(47 % porPagina);     // esperado: 2
console.log(total - porPagina);  // esperado: 36
console.log(total + porPagina);  // esperado: 54
console.log(3 ** 2);             // esperado: 9

// Comparação
console.log(preco === 14.15);   // esperado: true
console.log(preco !== 14.15);   // esperado: false
console.log(preco > 20);        // esperado: false
console.log(preco >= 14.15);    // esperado: true
console.log(preco === ("14.15" as unknown)); // esperado: false

// Lógicos
const emEstoque = true;
const aluguel = false;
console.log(emEstoque && !aluguel); // esperado: true
console.log(emEstoque && aluguel);  // esperado: false
console.log(!emEstoque || aluguel); // esperado: false

// Atribuição composta
let itens = 10;
itens += 5; // 15
itens -= 3; // 12
itens *= 2; // 24
console.log(itens); // esperado: 24

let contador = 0;
contador++;
contador++;
console.log(contador); // esperado: 2