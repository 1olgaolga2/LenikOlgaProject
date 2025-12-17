 import { test, expect } from './fixtures';

test('Registration successful', async ({ registerPage, page }) => {

  const ts = Date.now();
  const username = `user_${ts}`.slice(0, 15);
    const password = process.env.DEMO_PASSWORD;
    if (!password) {
      throw new Error('DEMO_PASSWORD environment variable is not set. Copy .env.example to .env and set DEMO_PASSWORD.');
    }

  await registerPage.goto();
  const signupMessage = await registerPage.register(username, password);
  await expect.soft(signupMessage?.toLowerCase()).toContain('successful');
  await expect.soft(registerPage.modal).toBeHidden();
  await expect.soft(page).toHaveURL('demoblaze.com');
});

test('Registration with empty password', async ({ registerPage }) => {
  const ts = Date.now();
  const username = `user_${ts}`.slice(0, 15);

  await registerPage.goto();
  const errorMessage = await registerPage.register(username, '');
  
  await expect.soft(errorMessage).toBeTruthy();
  await expect.soft(errorMessage?.toLowerCase()).toContain('please fill out username and password.');
  await expect.soft(registerPage.modal).toBeVisible();
});