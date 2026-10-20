import { test, expect } from '../../fixtures/auth.fixture.js';

test('Usuário já está logado', async ({ loggedPage }) => {
  await expect(loggedPage).toHaveURL(/painel\.html/);
}).