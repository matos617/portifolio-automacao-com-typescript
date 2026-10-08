/*
 * ========================================================================
 * DESAFIO PRÁTICO: Mapeamento de Localizadores - Painel Administrativo
 * ========================================================================
 *
 * Pré-condições (beforeEach):
 * 1. Acessar a aplicação.
 * 2. Realizar autenticação com credenciais válidas de Administrador.
 * 3. Validar o redirecionamento para o Painel.
 *
 * Cenários de Teste:
 *
 * [CT 01] Validar exibição da lista de Usuários
 * - Acessar o filtro/aba de "Usuários".
 * - Validar a renderização de ao menos um usuário listado na tabela.
 *
 * [CT 02] Validar listagem e filtros de Produtos
 * - Acessar o filtro/aba de "Produtos".
 * - Validar a visibilidade do campo de pesquisa de produtos.
 * - Validar a visibilidade do seletor (dropdown) de categorias.
 * - Validar a renderização de ao menos um produto na lista.
 *
 * [CT 03] Validar informações na lista de Lojas
 * - Acessar o filtro/aba de "Lojas".
 * - Localizar e validar a exibição do título/nome da loja.
 * - Validar a renderização dos dados e informações detalhadas da loja.
 */

import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('Painel Administrativo - Mapeamento de Localizadores', () => {
    
    test.beforeEach(async ({ page }) => {
        // 1. Acessa a aplicação de prática
        await page.goto(`${BASE_URL}/login.html`);

        // 2. Realiza autenticação com credenciais válidas de Administrador
        await page.getByRole('textbox', { name: /E-mail/i }).fill("admin@system.com"); 
        await page.getByRole('textbox', { name: /Senha/i }).fill("AdminPassword1123");

        // 3. Clica no botão "Entrar" e valida o redirecionamento para o Painel
        await page.getByRole('button', { name: /Entrar/i }).click();

        // 4. Valida o redirecionamento para o Painel
        await expect(page).toHaveURL(/.*\/painel.html$/);
    });

    test('CT 01 - Validar exibição da lista de Usuários', async ({ page }) => {
        // Acessa o filtro/aba de "Usuários"
        await page.getByRole('link', { name: /Administração/i }).click();
        await page.getByRole('button', { name: /Usuários/i }).click();

        // Validação da renderização de ao menos um usuário listado na tabela
        const usuarioPadrao = page.getByRole('tab', { name: /Usuário Padrão.user@system.com/i }); // /Usuário Padrão.*user@system\.com/i
        await expect(usuarioPadrao).toBeVisible();
    });
});