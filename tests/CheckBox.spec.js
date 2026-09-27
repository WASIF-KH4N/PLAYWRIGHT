const {test,expect}=require("@playwright/test")

test("Handling CheckBox",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil: "domcontentloaded"})

await page.check("//input[@id='wednesday']")

await expect(page.locator("//input[@id='wednesday']")).toBeChecked()

await expect(page.locator("//input[@id='tuesday']")).not.toBeChecked()

await page.waitForTimeout(2000)

// select all the checkboxes
const cbox1 = await page.locator('input[type="checkbox"].form-check-input').elementHandles();

for (const checkbox of cbox1) {
    await checkbox.check();
}

await page.waitForTimeout(2000)

// unselect all the checkboxes

for (const checkbox of cbox1) {
    await checkbox.uncheck();
}

await page.waitForTimeout(2000)

// Select some check boxes
const checkboxes = ['#sunday','#tuesday','#friday']

for(let checks of checkboxes){
    await page.locator(checks).check()
}

})
