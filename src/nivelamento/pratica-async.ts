// Importando a função utilitáia de aguardar tempo (delay)
import {aguardar} from "../../utils/helpers";

// Simulando uma API de login
function simularLogin(usuario:string, senha:string):Promise<string> {
    return new Promise((resolve,reject) => {
        if (usuario === "admin" && senha === "123456"){
            resolve("token-secreto-aprovado-123");
        }else{
            reject("ERRO 401 - USUÁRIO OU SENHA INVÁLIDOS");
        }
    });
}

// Função principal, testando com ASYNC/AWAIT
async function executarCenario() {
    console.log("Iniciando cenário de teste :3");
    try {
        console.log("Passo 1: Abrindo tela de login ...");
        await aguardar(2000);
        console.log("Passo 2: Inserindo credenciais ...");
        await aguardar(3000);

        const token = await simularLogin("aaaaa", "123456");
        console.log(`SUCESSO! USUÁRIO LOGADO - TOKEN RECEBIDO: ${token}\n`);
    }catch(erro){
        console.error(`FALHA NO TESTE: ${erro}\n`);
    }finally{
        console.log("Passo Final: fechando o navegador e limpando dados.");
    }
}

executarCenario();