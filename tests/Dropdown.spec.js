import {test,expect} from "@playwright/test"
test("Handling Dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/" )
 
    // SELECTING A VALUE IN A DROPDOWN

    // Approach 1 (By label)
    await page.locator("#country").selectOption({label:"Germany"})
    await expect(page.locator("#country option:checked")).toHaveText("Germany")

    await page.waitForTimeout(3000)

    // Approach 2 (By Visible Text)
    await page.locator("#country").selectOption("China")
    await expect(page.locator("#country option:checked")).toHaveText("China")

    await page.waitForTimeout(3000)

    // Approach 3 (By using value)
    await page.locator("#country").selectOption({value:"brazil"})
    await expect(page.locator("#country")).toHaveValue("brazil")

    await page.waitForTimeout(3000)

    // Approach 4 (By using index)
    await page.locator("#country").selectOption({index:4})
    await expect(page.locator("#country option:checked")).toHaveText("France")

    // Assertions
    await expect(page.locator("#country option")).toHaveCount(10); //total options in dropdown

    // Print all the options
    const options = await page.locator("#country option").allTextContents();
    for (const option of options) {
    console.log(option.trim());
  }

})