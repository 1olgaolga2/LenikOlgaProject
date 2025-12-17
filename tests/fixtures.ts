import { test as base } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { NavigationBar } from '../pages/NavigationBar';
import { ProductsPage } from '../pages/ProductsPage';
import { ApiClient } from '../api/ApiClient';

type TestFixtures = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  navigationBar: NavigationBar;
  productsPage: ProductsPage;
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
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  apiClient: async ({ request }, use) => {
    await use(new ApiClient(request));
  },
});

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  // additionally here should be implemented steps like user registration via API, login via cookies etc. Now it's inside my tests. 
});

test.afterEach(async () => {
  // here should be implemented cleanup steps - e.g. deleting users which has been created during tests
});

export { expect } from '@playwright/test';
