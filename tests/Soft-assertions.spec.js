const {test,expect}= require("@playwright/test")
test("Soft Assertions",async({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/" )

     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

     await expect.soft(page).toHaveTitle("Automation Testing Practice34") //wrong title but further test scripts will execute

     await expect(page.locator("//input[@id='name']")).toBeVisible()

     await expect(page.locator("//input[@id='name']")).toBeEnabled()

     await page.locator("#name").fill("Roy")

})