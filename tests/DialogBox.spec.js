const {test,expect}=require("@playwright/test")

test("Simple Alert with Ok", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/")

page.on("dialog", async Dialog => {
     expect(Dialog.type()).toContain("alert")
     expect(Dialog.message()).toContain("I am an alert box!")
     await Dialog.accept();
});

     await page.locator("#alertBtn").click()

     await page.waitForTimeout(5000)

})

test("Confirmation Alert with Ok and Cancel", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/")

page.on("dialog", async Dialog => {
     expect(Dialog.type()).toContain("confirm")
     expect(Dialog.message()).toContain("Press a button!")
     await Dialog.accept();
     
});
     await page.locator("#confirmBtn").click()
     await expect(page.locator('p[id="demo"]')).toHaveText("You pressed OK!")

     await page.waitForTimeout(5000)

})

test("Prompt Alert with Ok and Cancel", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/")

page.on("dialog", async Dialog => {
     expect(Dialog.type()).toContain("prompt")
     expect(Dialog.message()).toContain("Please enter your name:")
     expect(Dialog.defaultValue()).toContain("Harry Potter")
     await Dialog.accept("Wasif Khan");
     
});
     await page.locator("#promptBtn").click()
     await expect(page.locator('p[id="demo"]')).toHaveText("Hello Wasif Khan! How are you today?")

     await page.waitForTimeout(5000)

})