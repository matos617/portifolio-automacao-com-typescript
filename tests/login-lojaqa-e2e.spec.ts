import {test, expect} from "@playwright/test";

const BASE_URL = "https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login";

test.describe("Ato 1 - Validar carregamento e visibilidade de elementos", () => {
    test("Validar título e carregamento da página", async({page}) =>{

        // Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`);

        // Validar título
        await expect(page).toHaveTitle(/LojaQA \| Entrar/i);
    });

    test("Verificar exibição dos campos do form de login", async({page}) =>{
        await page.goto(`${BASE_URL}/login.html`);

        // Validar título
        await expect(page).toHaveTitle(/LojaQA \| Entrar/i);

        // Validar campos
        await expect(page.locator("#email")).toBeVisible();
        await expect(page.locator("#password")).toBeVisible();
        await expect(page.locator("#loginBtn")).toBeVisible();

        // Verificar se o botão de login está desabilitado
        await expect(page.locator("#loginBtn")).toBeDisabled();

    });
});

test.describe("Ato 2 - Caminho Feliz", () =>{
    test("Validar acesso e redicionar ao painel", async({page}) =>{

        // Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`);

        // Preencher campos utilizando o fill()
        await page.fill("#email","admin@system.com");
        await page.fill("#password","AdminPassword123");
        
        // Verificar botão ativo
        await expect(page.locator("#loginBtn")).toBeEnabled();

        // Ação de click no botão de login
        await page.click("#loginBtn");

        // Validar redirecionamento para a página /painel
        await expect(page).toHaveURL(`${BASE_URL}/painel.html`);
    });
});

/*
yarn playwright test ./tests/login-lojaqa-e2e.spec.ts --headed

yarn playwright test ./tests/login-lojaqa-e2e.spec.ts --headed --reporter=html
yarn playwright show-report
*/