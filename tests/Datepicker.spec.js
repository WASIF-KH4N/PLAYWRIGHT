import {test,expect} from "@playwright/test"

test("Handle Datepicker",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:"domcontentloaded"});

    // Approach 1, Enter date in input field
   // await page.locator("#datepicker").fill("09/30/2026")

   // Approach 2, Custom, pick from datepicker

const targetMonth = "January";
const targetYear = "2026";
const targetDate = "25";

await page.locator("#datepicker").click();

while (true) {
    const month = (await page.locator(".ui-datepicker-month").textContent()).trim();
    const year = (await page.locator(".ui-datepicker-year").textContent()).trim();

    if (month === targetMonth && year === targetYear) {
        break;
    }

    await page.locator("a[data-handler='prev']").click(); // Previous 

   // await page.locator("a[data-handler='next']").click(); // Next 

}

await page.locator(`a[data-date="${targetDate}"]`).click();

await page.waitForTimeout(4000)

})