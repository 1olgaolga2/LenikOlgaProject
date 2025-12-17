import { test, expect } from './fixtures';

test('Login successful with session persistence and logout', async ({ registerPage, apiClient, loginPage, navigationBar, page }) => {
  const ts = Date.now();
  const username = `user_${ts}`.slice(0, 15);
  const password = process.env.DEMO_PASSWORD;
  
  if (!password) {
    throw new Error('DEMO_PASSWORD environment variable is not set.');
  }

  /*NOTE: user registration in this test should be done by API request, 
  I've created API methods to create a user, it returns 200OK status, 
  but it's not possible to log in via UI with this credentials. 
  Maybe some additional authorization is neccessery. That's why here I'm presenting an example 
  how it should be implemented with API request, but below to make test pass I'm registering user with UI.*/
  
  // await apiClient.registerUser(username, password);

  await test.step('Register user via UI', async () => {
    await registerPage.goto();
    const signupMessage = await registerPage.register(username, password);
    await expect.soft(signupMessage?.toLowerCase()).toContain('successful');
    await expect.soft(registerPage.modal).toBeHidden();
  });
  
  await test.step('Login with valid credentials', async () => {
    await loginPage.login(username, password);
    await expect(page.getByText(new RegExp(`Welcome\\s+${username}`, 'i'))).toBeVisible({ timeout: 10000 });
  });

  await test.step('Verify session persistence after page refresh', async () => {
    await page.reload();
    await expect(page.getByText(new RegExp(`Welcome\\s+${username}`, 'i'))).toBeVisible({ timeout: 10000 });
  });

  
  await test.step('Verify state after log-out', async () => {
    await navigationBar.logout();
    await expect(page.getByText(new RegExp(`Welcome\\s+${username}`, 'i'))).not.toBeVisible({ timeout: 5000 });
    await expect(navigationBar.loginLink).toBeVisible();
  });

  await test.step('Verify logged-out state persists after refresh', async () => {
    await page.reload();
    await expect(navigationBar.loginLink).toBeVisible();
  });
});
