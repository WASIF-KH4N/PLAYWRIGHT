
const { test, expect } = require('@playwright/test');
test("First-test",async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await expect(page).toHaveTitle("Swag Labs");

   // await page.locator("#user-name").fill("performance_glitch_user")
   // await page.type("id=user-name","performance_glitch_user")  differnt way to write 
      await page.fill("#user-name","performance_glitch_user")

   // await page.locator("#password").fill("secret_sauce")
   // await page.type("id=password","secret_sauce")  differnt way to write 
      await page.fill("#password","secret_sauce")

   // await page.locator("#login-button").click();
      await page.click("id=login-button") // differnt way to write 
     
      await expect(page.locator('[data-test="title"]')).toHaveText("Products");

      // Print all links text
     // const link = await page.$$("a")

     // print product names
        const link = await page.$$("//*[@id='inventory_container']//a/div")
      for(const links of link){
       const linkText= await links.textContent()
       console.log(linkText)
      }
    })
