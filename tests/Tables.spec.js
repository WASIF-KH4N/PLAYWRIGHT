import {test,expect} from "@playwright/test"

test("Handle tables",async({page})=>{
   
    await page.goto("https://testautomationpractice.blogspot.com/",{waitUntil:"domcontentloaded"});

    let tables= await page.locator("#taskTable")

    //Number of column in table
    let cols=tables.locator("thead tr th");
    console.log("No of columns: "+ await cols.count());//5
    await expect(cols).toHaveCount(5);

    //Number of rows in table
    let rows=tables.locator("tbody tr");
    console.log("No of rows: "+ await rows.count());//4
    await expect(rows).toHaveCount(4);

    //Select specific checkbox in table
    let table1 = await page.locator("#productTable")
    let cbox= await table1.locator("//tbody/tr[4]/td[4]/input[1]")
    await cbox.check()
    await expect(cbox).toBeChecked()

    await page.waitForTimeout(4000)
     

    //Print table data

for (let i = 0; i < await rows.count(); i++) {

    const cells = rows.nth(i).locator("td");

    let rowData = [];

    for (let j = 0; j < await cells.count(); j++) {
        rowData.push(await cells.nth(j).textContent());
    }

    console.log(rowData);
}

})