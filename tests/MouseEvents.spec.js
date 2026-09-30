import {test,expect} from "@playwright/test"

test("Mouse Event--Hover",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/")

    const hoverButton= await page.locator(".dropbtn")
    await hoverButton.hover()
    await expect(page.getByRole('link', { name: 'Mobiles' })).toHaveText('Mobiles');

    await page.waitForTimeout(4000)
})

test("Mouse Event--Double Click",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/")

    const DoubleClickButton= await page.locator("button[ondblclick='myFunction1()']")
    await DoubleClickButton.dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")

    await page.waitForTimeout(4000)
})

test("Mouse Event--Right Click",async({page})=>{

    await page.goto("https://www.playwrightautomation.com/practice.html")

    const RightClickButton=await page.locator("(//button[normalize-space()='Right Click Me'])[1]")
    await RightClickButton.click({ button: "right" })
    await expect(page.locator("button[data-testid='context-menu-copy']")).toHaveText("Copy")

    await page.waitForTimeout(4000)

})

test("Mouse Event--Drag and Drop",async({page})=>{

     await page.goto("https://www.playwrightautomation.com/practice.html")

     let source= page.locator("#drag-rome")
     let target= page.locator("#drop-italy")
     await source.dragTo(target)
     await expect(page.locator("#drop-italy")).toHaveText("ITALY ✓ Rome")

     await page.waitForTimeout(4000)
})