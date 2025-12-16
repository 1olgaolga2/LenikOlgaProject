import { Page, Locator, expect } from '@playwright/test';
import { test } from '../tests/fixtures';
export class RegisterPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly openBtn: Locator;
  readonly modal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.openBtn = page.locator('#signin2');
    this.usernameInput = page.locator('#sign-username');
    this.passwordInput = page.locator('#sign-password');
    this.modal = page.locator('#signInModal');
    this.submitButton = this.modal.getByRole('button', { name: /sign up/i });
  }

  async goto() {
    await this.page.goto('/');
  }

  async register(username: string, password: string): Promise<string | null> {
    await this.openBtn.click();
    await this.modal.waitFor({ state: 'visible', timeout: 5000 });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  
    return await this.handleDialogAfterSubmit();
}

  private async handleDialogAfterSubmit(): Promise<string | null> {
    const isSuccessfulTest = test.info().title.toLowerCase().includes('successful');
    if (isSuccessfulTest) {
      const [dialog] = await Promise.all([
        this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null),
        this.submitButton.click(),
      ]);
      if (dialog) {
        const message = dialog.message();
        await dialog.accept();
        return message;
      }
    } else {
      const result = await Promise.any([
        this.page.waitForEvent('dialog', { timeout: 5000 }).catch(() => null),
        this.submitButton.click(),
      ]).catch(() => null);
      if (result) {
        const message = result.message();
        await result.accept();
        return message;
      }
    }
    return null;
  }
}
