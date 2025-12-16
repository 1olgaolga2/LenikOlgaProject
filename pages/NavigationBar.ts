import { Page, Locator } from '@playwright/test';
export class NavigationBar {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly toolsLink: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: /home|product store/i });
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.registerLink = page.getByText('Sign up');
    this.toolsLink = page.getByRole('link', { name: /cart/i });
    this.logoutLink = page.getByText('Log out');
  }

  async gotoHome() {
    await this.homeLink.click();
  }

  async gotoLogin() {
    await this.loginLink.click();
  }

  async gotoRegister() {
    await this.registerLink.click();
  }

  async gotoTools() {
    await this.toolsLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}
