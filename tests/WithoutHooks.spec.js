const {test,expect} = require('@playwright/test')

test('Without Hooks Test 1', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Products
    const itemsList = await page.$$(".inventory_item_name");
    expect(itemsList).toHaveLength(6);
    // Logout
    await  page.locator('#react-burger-menu-btn').click();
    await page.locator("#logout_sidebar_link").click();

})


test('Without Hooks Test 2', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Add Product to cart
   await page.locator("#add-to-cart-sauce-labs-backpack").click();
   expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveText("1");
   await page.locator(".shopping_cart_link").click();
   await page.locator("#checkout").click();
   await page.fill("#first-name","John");
   await page.fill("#last-name","Doe");
   await page.fill("#postal-code","12345");
   await page.locator("#continue").click();
   await page.locator("#finish").click();


    // Logout
    await  page.locator('#react-burger-menu-btn').click();
    await page.locator("#logout_sidebar_link").click();

})

