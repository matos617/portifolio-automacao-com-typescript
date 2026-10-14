// Exercício 2: string, number, boolean e typeof

const id: string = "01M4Y6WEJJPVDWHY05DBAMSR3V";
const nome: string = "Combination Pliers";
const preco: number = 14.15;
const emEstoque: boolean = true;
const ecoFriendly: boolean = false;
const co2Rating: string = "D";
const porPagina: number = 9;

console.log(typeof id);          // esperado: string
console.log(typeof nome);        // esperado: string
console.log(typeof preco);       // esperado: number
console.log(typeof emEstoque);   // esperado: boolean
console.log(typeof ecoFriendly); // esperado: boolean
console.log(typeof co2Rating);   // esperado: string
console.log(typeof porPagina);   // esperado: number

const precoNaTela = "14.15";
console.log(typeof precoNaTela);         // esperado: string
console.log(typeof Number(precoNaTela)); // esperado: number
console.log(Number(precoNaTela) + 1);    // esperado: 15.15
console.log(precoNaTela + 1);            // esperado: 14.151