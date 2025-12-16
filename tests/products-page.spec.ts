import { ProductCategory } from '../pages/ProductsPage';
import { test, expect } from './fixtures';
import { EXPECTED_LAPTOP_NAMES } from '../tests/data/expectedLaptops';

test('Verify all expected laptops are displayed', async ({ productsPage, page }) => {
  await test.step('Navigate to products page', async () => {
    await page.goto('/');
  });

  await test.step('Verify all expected laptops are displayed', async () => {
    await productsPage.selectFilter(ProductCategory.LAPTOPS);
    const actualNames = await productsPage.getLaptopsNames();

    expect.soft(actualNames).toEqual(expect.arrayContaining(EXPECTED_LAPTOP_NAMES));
    expect.soft(actualNames).toHaveLength(EXPECTED_LAPTOP_NAMES.length);
    
  });
});