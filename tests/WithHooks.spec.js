                      /* beforeEach → Runs before each test.
                       afterEach → Runs after each test.
                       beforeAll → Runs once before all tests.
                       afterAll → Runs once after all tests.*/

    const {test,expect} = require('@playwright/test')

    let page;

    test.beforeEach(async ({browser}) => {
   // test.beforeAll(async ({browser}) => {

    page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
         // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
})

    test.afterEach(async()=>{
    //test.afterAll(async()=>{
        // Logout
    await  page.locator('#react-burger-menu-btn').click();
    await page.locator("#logout_sidebar_link").click();
})

   test('With Hooks Test 1', async () => {
    // Products
    const itemsList = await page.$$(".inventory_item_name");
    expect(itemsList).toHaveLength(6);
})

   test('With Hooks Test 2', async () => {
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

})

