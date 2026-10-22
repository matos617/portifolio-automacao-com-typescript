import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/20out/loginPage.js';
import { ctsLogins } from '../../data/login.data.js';

test.describe('Autentificação por Data-Driven de múltiplos perfis com POM', () => {
  for (const cenarios of ctsLogins) {
    test(`Login com Perfil: ${ cenarios.perfil }`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(cenarios.email, cenarios.senha);

      if(cenarios.esperaSucesso){
        await expect(page).toHaveURL(cenarios.urlEsperada);
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
        await expect(page).toHaveURL(cenarios.urlEsperada);
      }
    });
  };
});
