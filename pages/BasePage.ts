import { Page } from '@playwright/test';
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async waitForUrl(pattern: RegExp, timeout = 10000) {
    await this.page.waitForURL(pattern, { timeout });
  }
}
