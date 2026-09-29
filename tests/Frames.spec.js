const {test,expect}= require("@playwright/test")
test("Handling Frames",async({page})=>{

 await page.goto("https://ui.vision/demo/webtest/frames/")

 const allFrames=await page.frames()
 console.log("Total frames is: "+allFrames.length) //7

 // Approach 1--> Frames Object but currently not working :(
//const frame1= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//await frame1.fill("[type='text1']","hello")

// Approach 2--> Frames Locator. working
//const frame1 = await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']")
const frame1 = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
await frame1.fill("Hello Frame")

})

