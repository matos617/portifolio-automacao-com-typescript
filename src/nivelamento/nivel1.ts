// Formas de Tipar
// forma 1
let idade: number;

// forma 2
const nome = "João";

// forma 3 (desnecessária por ser redudante; não recomendada)
const sobrenome: string = "João";

// Tipagem Especiais

/* 
type usuario = {"nick": string, "age": number};
let jogador: usuario = {nick: "Matanza", age: "18"};
let jogadorVelho: usuario = {nick: "Toin", age: "67"};

function verificarIdade(usuarioAtual: usuario){
    if (usuarioAtual.age>=21) {
        console.log(`✅ Acesso liberado: O jogador ${usuarioAtual.nick} tem ${usuarioAtual.age} anos e pode jogar o jogo.`)
    }else{
        console.log(`❌ EI! ${usuarioAtual.nick} É de menor, só tem ${usuarioAtual.age} anos e não poderá jogar.`)
    }
};

verificarIdade(jogador);
verificarIdade(jogadorVelho);
*/

// Produtos

type produtos = {"tipo": string, "preco": number}
let SofaRosa: produtos = {nome: "Sofá Rosa", preco: "1500"}
let SofaAzul: produtos = {nome: "Sofá Azul", preco: "2000"}

/*
function verificarPreço(produtoAtual: produtos){
    if (produtoAtual.preço<=1500) {
        console.log(`O ${produtoAtual.nome} está com o valor procurado, com o preço exato de ${produtoAtual.preço}`)
    }else{
        console.log(`O ${produtoAtual.nome} está com o valor diferente ao procurado, com o preço exato de ${produtoAtual.preço}`)
    }
};
*/

function verificarPreço(produtoAtual: produtos){
    const resultado = produtoAtual.preco <= 1500 
    ? `O ${produtoAtual.nome} está com o valor procurado, com o preço exato de ${produtoAtual.preco}` 
    : `O ${produtoAtual.nome} está com o valor diferente ao procurado, com o preço exato de ${produtoAtual.preco}`;
    console.log(resultado)
}


verificarPreço(SofaRosa);
verificarPreço(SofaAzul);