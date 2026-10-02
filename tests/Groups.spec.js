const {test,expect} = require('@playwright/test')

// Before Each Hook
test.beforeEach(async () => {
    console.log("Before Each is running")
  })

// After Each Hook
test.afterEach(async () => {
    console.log("After Each is running")
  })
 
// Suite/Groups 1  
test.describe("Test Suite/Groups 1",()=>{
   test("Test 1",async({page})=>{
   console.log("Test 1 is running")
  })

   test("Test 2",async({page})=>{
   console.log("Test 2 is running")
  })
})

// Suite/Groups 2
test.describe("Test Suite/Groups 2",()=>{
   test("Test 3",async({page})=>{
   console.log("Test 3 is running")
  })

   test("Test 4",async({page})=>{
   console.log("Test 4 is running")
  })
}) 

