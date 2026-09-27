const {test,expect}= require("@playwright/test")

test("Handling Input Field",async({page})=>{

 await page.goto("https://testautomationpractice.blogspot.com/",{ waitUntil: "domcontentloaded"})

 await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

 await expect(page.locator("//input[@id='name']")).toBeVisible()

 await expect(page.locator("//input[@id='name']")).toBeEditable()

 await expect(page.locator("//input[@id='name']")).toBeEmpty()

 await page.fill("//input[@id='name']","Wasif Khan")

 await expect(page.locator("//input[@id='name']")).toHaveValue("Wasif Khan")

 await page.waitForTimeout(5000) // wait for 5 seconds

 await page.fill("#email","wasif1@email.com")

 await expect(page.locator("#email")).toHaveValue("wasif1@email.com")

})
