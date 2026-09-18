interface ExecucaoTeste {
  id: number;
  nome: string;
  status: "passou" | "falhou";
  duracao: number;
}

export const execucoes: ExecucaoTeste[] = [
  {
    id: 1,
    nome: "Login válido",
    status: "passou",
    duracao: 120
  },
  {
    id: 2,
    nome: "Login inválido",
    status: "falhou",
    duracao: 150
  },
  {
    id: 3,
    nome: "Cadastro de usuário",
    status: "passou",
    duracao: 200
  },
  {
    id: 4,
    nome: "Exclusão de usuário",
    status: "falhou",
    duracao: 180
  },
  {
    id: 5,
    nome: "Logout",
    status: "passou",
    duracao: 100
  }
];

// MAP pega apenas os nomes
export const nomes = execucoes.map(
  execucao => execucao.nome
);

// FILTER pega apenas os testes que passaram
export const testesAprovados = execucoes.filter(
  execucao => execucao.status === "passou"
);

// REDUCE soma a duração de todos os testes
export const duracaoTotal = execucoes.reduce(
  (total, execucao) => total + execucao.duracao,
  0
);

// Simula uma espera de rede
function esperar(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Busca execução pelo ID
export async function buscarExecucao(
  id: number
): Promise<ExecucaoTeste> {

  await esperar(500);

  const execucao = execucoes.find(
    execucao => execucao.id === id
  );

  if (!execucao) {
    throw new Error("Execução não encontrada");
  }

  return execucao;
}