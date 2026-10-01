const { test, expect } = require('@playwright/test');

test('Keyboard Actions', async ({ page }) => {      

await page.goto('https://gotranscript.com/text-compare');

//await page.locator('textarea[name="text1"]').fill('Hello, World!');

await page.fill('textarea[name="text1"]', 'Hello, World!');

//await page.type("textarea[name='text1']", "Hello, World!"); Line 7,9,11 doing same work!

await page.keyboard.press("Control+A");

await page.keyboard.press("Control+C");

//await page.keyboard.press("Tab");

await page.keyboard.down("Tab"); // Or using this 2 lines instead of line 17
await page.keyboard.up("Tab");

await page.keyboard.press("Control+V");

await page.keyboard.press("Tab"); // go to checkbox

await page.keyboard.press("Tab"); // go to compare button
 
await page.locator("#recaptcha").click();

await page.waitForTimeout(4000);

})