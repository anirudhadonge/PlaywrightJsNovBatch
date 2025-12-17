import {test, expect} from '@playwright/test'
// test("Assertion timeout test",async({page})=>{
//     await page.goto("https://playwright.dev/");
//     await expect(page.locator(".getStarted_Sjon1")).toBeVisible();
// })

test("Hover test", async ({ page }) => {
  await page.goto("/hovers");
//   await page.locator('[href="/hovers"]').click();
   await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(0).hover();
  await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(1).hover();
  await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(2).hover();
  await page.waitForTimeout(2000);
});