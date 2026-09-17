import {test, expect} from "vitest";

const BASE_URL = "https://jsonplaceholder.typicode.com"

test("Método POST para criar um novo post", async() =>{ // todo teste vai ser uma função assíncrona
    const res = await fetch(`${BASE_URL}/posts`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            userId: 1,
            title: "Meu novo post.",
            body: "Conteúdo do meu novo post."
        })
    });
    // Testa status code
        expect(res.status).toBe(201);
    // Testa se o retorno é um objeto JSON
    const dados = await res.json();
    expect(dados.title).toBe("Meu novo post.");
    expect(dados.body).toBe("Conteúdo do meu novo post.");
});

test("Método PUT para atualizar post completo", async() =>{
    const res = await fetch(`${BASE_URL}/posts/1`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            userId: 1,
            title: "Meu post atualizado.",
            body: "Conteúdo do meu post atualizado."
        })
    });
    // Testa status code
        expect(res.status).toBe(200);
    // Testa se o retorno é um objeto JSON
    const dados = await res.json();
    expect(dados.title).toBe("Meu post atualizado.");
    expect(dados.body).toBe("Conteúdo do meu post atualizado.");
});

test("Método PATCH para substituir post parcial", async() =>{
    const res = await fetch(`${BASE_URL}/posts/1`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            userId: 1,
            title: "Meu título atualizado.",
            body: "Conteúdo do meu post atualizado."
        })
    });
    // Testa status code
        expect(res.status).toBe(200);
    // Testa se o retorno é um objeto JSON
    const dados = await res.json();
    expect(dados.title).toBe("Meu título atualizado.");
    expect(dados.body).toBe("Conteúdo do meu post atualizado.");
});

test("Método DELETE para DELETAR um post", async() =>{
    const res = await fetch(`${BASE_URL}/posts/1`,{
        method:"DELETE",
    });
    // Testa status code
        expect(res.status).toBe(200);
});