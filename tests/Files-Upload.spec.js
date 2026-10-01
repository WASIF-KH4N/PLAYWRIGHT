const {test, expect} = require('@playwright/test');

test('Single File Upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/',{ waitUntil: "domcontentloaded" });

    //await page.setInputFiles("#singleFileInput", "tests/Upload-files/pizza.png");
    await page.locator("#singleFileInput").setInputFiles("tests/Upload-files/pizza.png"); // other way to upload file

    await page.locator("//button[text()='Upload Single File']").click();

    expect(page.locator("//p[@id='singleFileStatus']")).toContainText("Single file selected");

    await page.waitForTimeout(5000);

})

test('Multiple Files Upload', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/',{ waitUntil: "domcontentloaded" });

    // await page.setInputFiles("#multipleFilesInput", ["tests/Upload-files/practice.png", "tests/Upload-files/Project2/pdf"]);
    await page.locator("#multipleFilesInput").setInputFiles(["tests/Upload-files/practice.png", "tests/Upload-files/Project2.pdf"]); // other way to upload file

    await page.locator("//button[text()='Upload Multiple Files']").click();

    expect(page.locator("//p[@id='multipleFilesStatus']")).toContainText("Multiple files selected");

    await page.waitForTimeout(5000);

    })