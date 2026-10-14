// LET e CONST
    
const baseUrl = "https://practicesoftwaretesting.com/";
const nomeProduto = "Combination Pliers";
const precoUnitario = 14.15;

let quantidade = 1
let total = precoUnitario * quantidade;
console.log("Total com 1 item", total); // esperado: 14.15

quantidade = 3;
total = precoUnitario * quantidade;
console.log("Total com 3 itens", total); // esperado 42.45

const carrinho = { produto: nomeProduto, quantidade: 2 };
carrinho.quantidade = 5;
console.log("Quantidade no carrinho:", carrinho.quantidade);

console.log("Site", baseUrl);