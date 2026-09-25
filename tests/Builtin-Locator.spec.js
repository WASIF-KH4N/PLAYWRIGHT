import {test,expect} from "@playwright/test"
test("BuiltIn Locator",async({page})=>{
   await page.goto("https://www.saucedemo.com/")

   await page.getByTitle("Swag Labs")

   await page.getByPlaceholder("username").fill("error_user")
   
   await page.getByPlaceholder("Password").fill("secret_sauce")

  // await page.getByRole("button",{name:"Login"}).click()
   await page.getByRole("button",{type:"submit"}).click()

   const bagImg=await page.getByAltText("Sauce Labs Backpack")
   await expect(bagImg).toBeVisible()

   await expect(page.getByText("Products")).toBeVisible()
  

  



   
})