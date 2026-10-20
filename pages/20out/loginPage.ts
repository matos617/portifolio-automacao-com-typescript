import type { Locator, Page } from '@playwright/test';

// RECEBER O PAGE CONSTRUCTOR
// ENCAPSULA OS SELETORES/UI
// MÉTODOS CLAROS, EX.: login(), fillEmail()...
// MÉTODOS RETPRNAM OS LOCATOS PARA O TESTE APENAS FAZER O (ASSERT)
// Melhor PQ SE UM SELETOR MUDAR NO HTML SÓ ATUALIZAMOS EM UM ÚNICO LOCAL NO PAGE OBJECT

export class LoginPage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly statusMessage: Locator;
  readonly credentialsBox: Locator;

  constructor(private readonly page: Page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginBtn');
    this.errorMessage = page.locator('#errorMessage');
    this.statusMessage = page.locator('#statusMessage');
    this.credentialsBox = page.locator('.credentials-info');
  }

  // Navegar na tela de login
  async goto(){
    await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html')
  }

  // Função/método/Ação de login
  async login(username: string, password: string){
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Apenas preencher o E-mail
  async fillEmail(email:string) {
    await this.emailInput.fill(email);
  }

  // Apenas preencher senha
  async fillPassword(password:string){
    await this.passwordInput.fill(password)
  }

  // Apenas clicar no botão de login
  async clickLoginButton(){
    await this.loginButton.click();
  }

}