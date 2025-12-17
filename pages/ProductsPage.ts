import { Page, Locator } from '@playwright/test';
import { EXPECTED_LAPTOP_NAMES } from '../tests/data/expectedLaptops';

export enum ProductCategory {
  LAPTOPS = 'Laptops',
  PHONES = 'Phones',
  MONITORS = 'Monitors'
}

export class ProductsPage {
  readonly page: Page;
  readonly categoryLink: (category: ProductCategory) => Locator;
  readonly expectedProductLink: (name: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryLink = (category: ProductCategory) => page.getByRole('link', { name: category });
    this.expectedProductLink = (name: string) => page.getByRole('link', { name: name });
  }

  async selectFilter(category: ProductCategory): Promise<void> {
    await this.categoryLink(category).click();
  }

  async getLaptopsNames(): Promise<string[]> {
    /*NOTE: waitForTimeout() is strongly discouraged, but in given example it's neccessary to wait if all products has been loaded. 
    I've tried to use load await this.page.waitForLoadState('networkidle') and await this.page.waitForLoadState('load');
    but it says page has been loaded (but records are not present yet) and waiting for networkidle failing even after 60 s, probably given demo page is not stable. */
    await this.page.waitForTimeout(15000);  

    const actualNames = (await Promise.all(
      EXPECTED_LAPTOP_NAMES.map(expected =>
        this.expectedProductLink(expected)
          .allTextContents()
      )
    ))
      .flat()
      .map(name => name.trim());

    return actualNames;
  }
}