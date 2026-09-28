import {test,expect} from "@playwright/test"
test("Hidden Dropdown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:"domcontentloaded"})

    await page.locator("[name='username']").fill("Admin")

    await page.locator("[name='password']").fill("admin123")

    await page.locator("[type='submit']").click()

    await page.locator(".oxd-icon").click()


})