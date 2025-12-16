import { Page } from '@playwright/test';
import { EXPECTED_LAPTOP_NAMES } from '../tests/data/expectedLaptops';

export enum ProductCategory {
  LAPTOPS = 'Laptops',
  PHONES = 'Phones',
  MONITORS = 'Monitors'
}

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }



  async selectFilter(category: ProductCategory): Promise<void> {
    const categoryLink = await this.page.getByRole('link', { name: category }).click();
    await this.page.waitForLoadState('load'); 
}

 async getLaptopsNames(): Promise<string[]> {

 /*NOTE: waitForTimeout() is strongly discouraged, but in given example it's neccessary to wait if all products has been loaded. 
  I've tried to use load await this.page.waitForLoadState('networkidle') and await this.page.waitForLoadState('load');
  but it says page has been loaded (but records are not present yet) and waiting for networkidle failing even after 60 s, probably given demo page is not stable. */
  await this.page.waitForTimeout(15000);  

  const actualNames = (await Promise.all(
    EXPECTED_LAPTOP_NAMES.map(expected =>
      this.page
        .getByRole('link', { name: expected })
        .allTextContents()
    )
  ))
    .flat()
    .map(name => name.trim());

  return actualNames;
}
}