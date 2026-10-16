interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET
async function buscarPost(id: number): Promise<Post> {
  const resposta = await fetch(`${BASE_URL}/posts/${id}`);
  if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
  return resposta.json();
}

// POST
async function criarPost(dados: Omit<Post, "id">): Promise<Post> {
  const resposta = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
  return resposta.json();
}

(async () => {
  const post = await buscarPost(1);
  console.log("GET:", post.title);

  const novo = await criarPost({ userId: 1, title: "Olá", body: "Meu primeiro post" });
  console.log("POST:", novo);
})();
