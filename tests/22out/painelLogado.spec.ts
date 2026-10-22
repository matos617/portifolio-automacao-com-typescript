import { test, expect } from '../../fixtures/auth.fixture.js';

test.describe('Acesso área protegida - Painel', () => {
  test('Deve acessar painel com usuário já logado', async ({ loggedPage }) => {
    // Validar se está na página de painel
    await expect(loggedPage).toHaveURL(/painel\.html/);
    // Verificar existência de título H1
    const h1Painel = loggedPage.locator('#panelTitle');
    await expect(h1Painel).toBeVisible();

    // Verificar se o botão de logout está visível
    const btSair = loggedPage.locator('#logoutButton');
    await expect(btSair).toBeVisible();
  })
})

// await 