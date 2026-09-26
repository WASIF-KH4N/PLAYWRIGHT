import {test,expect} from "@playwright/test"
test("Assertions in Playwright",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/" )

    // 1) expect(page).toHaveURL()
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

    // 2) expect(page).toHaveTitle()
    await expect(page).toHaveTitle("Automation Testing Practice")

    // 3 expect(locator),toBeVisible()
    await expect(page.locator("//input[@id='name']")).toBeVisible()

    // 4 expect(locator).toBeEnabled()
    await expect(page.locator("//input[@id='name']")).toBeEnabled()

    // 5 expect(locator).toBeDisabled()
    await expect(page.locator("//input[@id='name']")).not.toBeDisabled()

    // 6 expect(locator).toHaveText()
    await expect(page.locator("p[class='description'] span")).toHaveText("For Selenium, Cypress & Playwright")

    // 7 expect(locator)toContainText()
    await expect(page.locator("p[class='description'] span")).toContainText("For Sele")

    // 8 expect(locator).toHaveCount()
    await expect(page.locator("//select[@id='country']/option")).toHaveCount(10)

    // 9 expect(locator).toBeChecked()
    let checkbox =await page.locator("//input[@id='tuesday']")
    await checkbox.check()
    await expect(checkbox).toBeChecked()

    // 10 expect(locator).not.toBeChecked() 
    await expect(page.locator("//input[@id='female']")).not.toBeChecked()

    // 11 expect(locator).toHaveAttribute()
    await expect(page.locator("button[name='start']")).toHaveAttribute("class","start")

    // 12 expect(locator).toHaveValue()
    let phoneField= await page.locator("//input[@id='phone']")
    await phoneField.fill("0448984")
    await expect(phoneField).toHaveValue("0448984")

})