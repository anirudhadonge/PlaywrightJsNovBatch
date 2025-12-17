/**
 * Describe
 * BeforeALl
 * Before Each
 * After Each
 * After All
 * step
 */
/**
 * only
 * slow 
 * skip
 */
/**
 * 
 */
import { test, expect } from "@playwright/test";

test.describe("Checkbox and Iframe test grouped", async () => {
  test.beforeAll("Before All Method", async () => {
    await test.step("before All step", async () => {
      console.log("This is a before all method");
    });
  });
  test.beforeEach("Before Each Method", async ({ page }) => {
    await test.step("Navigating to https://the-internet.herokuapp.com/", async () => {
      console.log("Before Each test getting executed");
      await page.goto("/");
    });
  });

  test.afterEach("After Each Method", async () => {
    console.log("After Each ......");
  });
  test.afterAll("After All Method", async () => {
    console.log("This is a After all method");
  });

  // test("Click Test", async ({ page }) => {
  //   let basePage = new BasePage(page);
  //   await basePage.goto("https://the-internet.herokuapp.com/");
  //   await basePage.clickOnElement('[href="/login"]');
  //   await basePage.pressSequentially("#username", "tomsmith", 3000);
  //   await basePage.fill("#password", "SuperSecretPassword!");
  //  });

  test("@annotation @smoke Checkbox test demo", async ({ page }) => {

    console.log("Checkbox test start");
    await test.step("Click on Checkbox link on the home page", async () => {
      await page.waitForTimeout(5000);
      await page.locator('[href="/checkboxes"]').click();
    });

    await test.step("Check the first Check Box and Validate it is checked", async () => {
      await page.locator("#checkboxes input").nth(0).check();
      await expect.soft(page.locator("#checkboxes input").nth(0)).toBeChecked();
    });

    await test.step("Uncheck the send Checkbox ", async () => {
      await page.locator("#checkboxes input").nth(1).uncheck();
      console.log("Checkbox test Ends");
    });
  });

  test("@annotation @regression Iframe and frames test", async ({ page }) => {
  // //   console.log("Iframe test starts");
  // //   await page.locator('[href="/frames"]').click();
  // //   await page.locator('[href="/iframe"]').click();
  // //   const framelocator = page.frameLocator("#mce_0_ifr");
  // //   await expect(framelocator.locator("#tinymce p")).toHaveText(
  // //     "Your content goes here."
  // //   );
  // //   console.log("Iframe test Ends");
  // });
});
});

// test("@annotation Hover test", async ({ page }) => {
//   await page.goto("https://the-internet.herokuapp.com/");
//   await page.locator('[href="/hovers"]').click();
//   await page.waitForTimeout(2000);
//   await page.locator(".figure img").nth(0).hover();
//   await page.waitForTimeout(2000);
//   await page.locator(".figure img").nth(1).hover();
//   await page.waitForTimeout(2000);
//   await page.locator(".figure img").nth(2).hover();
//   await page.waitForTimeout(2000);
// });


// test("<tags> <description>",async()=>{
//   <body></body>
// })