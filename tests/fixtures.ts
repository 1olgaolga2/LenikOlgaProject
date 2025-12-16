import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { NavigationBar } from '../pages/NavigationBar';
import { ApiClient } from '../api/ApiClient';

type TestFixtures = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  navigationBar: NavigationBar;
  apiClient: ApiClient;
};

export const test = base.extend<TestFixtures>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navigationBar: async ({ page }, use) => {
    await use(new NavigationBar(page));
  },
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },
});

export { expect } from '@playwright/test';
