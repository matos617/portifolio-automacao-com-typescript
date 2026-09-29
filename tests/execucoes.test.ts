import { describe, it, expect } from "vitest";
import { buscarExecucao } from "./execucoes";

describe("buscarExecucao", () => {

  it("deve encontrar uma execução existente", async () => {
    // CAMINHO DE SUCESSO
    const resultado = await buscarExecucao(1);

    expect(resultado.id).toBe(1);
    expect(resultado.nome).toBe("Login válido");
    expect(resultado.status).toBe("passou");
  });

  it("deve lançar erro quando a execução não existe", async () => {
    // CAMINHO DE ERRO
    await expect(
      buscarExecucao(999)
    ).rejects.toThrow("Execução não encontrada");
  });

});