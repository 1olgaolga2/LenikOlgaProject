import { Page, Locator } from '@playwright/test';
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly openBtn: Locator;
  readonly modal: Locator;

  constructor(page: Page) {
    this.page = page;
    // Navbar login link has id 'login2' on Demoblaze
    this.openBtn = page.locator('#login2');
    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.modal = page.locator('#logInModal');
    this.submitButton = this.modal.getByRole('button', { name: /log in|login/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.openBtn.click();
    await this.modal.waitFor({ state: 'visible', timeout: 5000 });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
