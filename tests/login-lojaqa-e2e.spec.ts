import {test, expect} from "@playwright/test";

const BASE_URL = "https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html";

test.describe("Ato 1 - Validar carregamento e visibilidade de elementos", () => {
    test("Validar título e carregamento da página", async({page}) =>{

        // Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`);

        // Validar título
        await expect(page).toHaveTitle(/LojaQA \| Entrar/i);
    });

    test("Verificar exibição dos campos do form de login", async({page}) =>{
        // Validar título
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);

        // Validar campos
        await expect(page.locator("#email")).toBeVisible();
        await expect(page.locator("#password")).toBeVisible();
        await expect(page.locator("#loginBtn")).toBeVisible()

        // Verificar se o botão de login está desabilitado
        await expect(page.locator("#loginBtn")).toBeDisabled();

    });
});