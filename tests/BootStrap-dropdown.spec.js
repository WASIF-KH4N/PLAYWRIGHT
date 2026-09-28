const { test, expect } = require("@playwright/test");

test("Bootstrap Dropdown", async ({ page }) => {

    await page.goto("https://www.playwrightautomation.com/practice.html",{waitUntil:"domcontentloaded"});

    await page.locator(".bd-select-trigger").click();

    //await page.getByRole("option", { name: "QA Engineer" }).click();

    await page.locator(".bd-select-option").filter({ hasText: "QA Engineer" }).click();

    await expect(page.locator(".bd-select-trigger")).toHaveText("QA Engineer");

    await expect(page.locator(".bd-select-option")).toHaveCount(10)
     
    // Print all roles
    const opt = await page.locator(".bd-select-option").allTextContents()
    for(let option of opt)
        console.log("Roles are: "+option)

    // print only role whose index value is 4
    const opts = await page.locator(".bd-select-option").nth(4).textContent()
        console.log("Role is: "+opts)


});