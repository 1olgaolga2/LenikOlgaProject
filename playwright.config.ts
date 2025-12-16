import { defineConfig, devices } from '@playwright/test';
import os from 'os';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
// Load environment variables from repository root .env (ignored)
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry only on CI (no retries locally). Increase as needed on CI. */
  retries: process.env.CI ? 1 : 0,
  /* Configure worker count: use 80% CPU on CI, otherwise default on locaL */
  workers: process.env.CI ? '80%' : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // Use 'list' reporter for CLI output, and generate HTML report only on demand
  reporter: [
    ['list'],
    // Optionally, enable HTML report only if needed
    ['html', { open: 'never' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.demoblaze.com/',
    
    /* Run headless on CI (no X server); keep headed locally for debugging */
    headless: !!process.env.CI,

    /* Helpful launch args for container/CI environments */
    launchOptions: {
      args: process.env.CI ? ['--no-sandbox', '--disable-setuid-sandbox'] : [],
    },

    /* Only keep screenshots for failures to save disk space */
    screenshot: 'only-on-failure',

    /* On first retry save trace and video so the HTML report links to trace + video when a test fails twice */
    trace: 'on-first-retry',
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
