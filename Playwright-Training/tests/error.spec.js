import { test, expect } from "@playwright/test";
test("@annotation Test for locator by role", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  await page.getByRole("checkbox").nth(0).check();
  await page.waitForTimeout(2000);
});
 
test("Test for locator by Lable", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").fill("SuperSecretPassword");
  await page.waitForTimeout(2000);
});
 