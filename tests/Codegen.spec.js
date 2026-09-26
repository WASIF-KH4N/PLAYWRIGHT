import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('wasif');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('khan@gmail.com');
  await page.locator('body').click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('Federal B Area');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByLabel('Country:').selectOption('australia');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Sorted List:').selectOption('zebra');
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '2', exact: true }).click();
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'START' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Prompt Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Point Me' }).click();
  await page.getByRole('button', { name: 'Point Me' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.locator('#field2').click();
  await page.locator('#field2').dblclick();
  await page.getByText('Drag me to my target').click();
  await page.locator('.ui-slider-handle').first().click();
  await page.locator('#HTML14 rect').click();
  await page.getByRole('textbox', { name: 'Select an item' }).click();
  await page.getByText('Item 2', { exact: true }).click();
});