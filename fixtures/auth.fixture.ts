import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../pages/20out/loginPage.js';

type authFixture = {
  loginPage: LoginPage;
  loggedPage: Page;
};
export const test = base.extend<authFixture>({
  // entregando a página já estanciada no test
  loginPage:async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  }

  // entregrando página logada
  loggedPage:async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin@system.com', 'AdminPassword123');
    await page.waitForURL(/painel\.html/);
    await use(page);
  }
}); 

export { expect } from '@playwright/test';