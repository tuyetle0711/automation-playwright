import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('w3');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).press('ArrowDown');
  // await page.locator('iframe[name="a-ynce11tocw9m"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.close()
});