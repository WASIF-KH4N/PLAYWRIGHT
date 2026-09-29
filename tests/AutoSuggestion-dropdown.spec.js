const { test, expect } = require("@playwright/test");

test("Auto suggest dropdown", async ({ page }) => {

    await page.goto("https://www.redbus.in/");

    await page.locator("#srcinput").fill("Delhi"); //Source

    //await page.getByText("Anand Vihar, Delhi").click();

    await page.locator('[aria-label="Anand Vihar, Delhi"]').click()

    await expect(page.locator("#srcinput")).toHaveValue("Anand Vihar, Delhi");

    await page.waitForTimeout(2000)

    await page.locator("#destinput").fill("Mumbai"); //Destination

    await page.locator('[aria-label="Sion, Mumbai"]').click()

    //await page.getByText("Sion, Mumbai").click();
  
    await expect(page.locator("#destinput")).toHaveValue("Sion, Mumbai");
});