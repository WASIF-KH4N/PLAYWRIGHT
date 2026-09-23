
const { test, expect } = require('@playwright/test');
test("First-test",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator("#user-name").fill("performance_glitch_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click();
    await page.pause();


})


