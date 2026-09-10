// importando dependencias
import{test, expect, vi} from "vitest";

// simulando loin lento
function loginLento(usuario:string):Promise<string>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`BEM VINDO, ${usuario}!`);
        },5000)
    });
}

test("Simular login usando fake time", async()=> {
    // Ligando o Vitest (a máquina do tempo)
    vi.useFakeTimers();
    console.log("INICIANDO CENÁRIO DE TESTE");
    // Chamando promisse de usuário sem await ainda
    const promessaLogin = loginLento("Carla");

    // Cponfigurar avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    // Verificar resultado
    expect(resultado).toBe("BEM VINDO, Carla!");
    console.log("Sucesso. Teste realizado na velocidade da Luz");
    // Desligando a máquina do tempo
    vi.useRealTimers();
});