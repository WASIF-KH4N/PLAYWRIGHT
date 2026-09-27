const {test,expect}=require("@playwright/test")

test("Handling Radio Button",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("//input[@id='male']").check()

await expect(page.locator("//input[@id='male']")).toBeChecked()

const valueCheck=await page.locator("//input[@id='male']").isChecked()
console.log("The value is: "+valueCheck)

await expect(page.locator("//input[@id='female']")).not.toBeChecked()

})