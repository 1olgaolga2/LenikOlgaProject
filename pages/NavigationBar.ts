import { Page, Locator } from '@playwright/test';
export class NavigationBar {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.registerLink = page.getByText('Sign up');
    this.logoutLink = page.getByText('Log out');
  }

  async gotoLogin() {
    await this.loginLink.click();
  }

  async gotoRegister() {
    await this.registerLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}
