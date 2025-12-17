import { test, expect } from "@playwright/test";

/**m
Locate by role
Locate by labelp
Locate by placeholder
Locate by text
Locate by alt text
Locate by title
Locate byt test id
Locate by CSS or XPath
 */

test("Test for Locator by role", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/checkboxes");
  await page.waitForTimeout(5000);
  await page.getByRole("checkbox").nth(0).check();
  await page.waitForTimeout(10000);
});

test("Test for Locator by Label", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.waitForTimeout(5000);
  await page.getByLabel("Username").fill("tomsmith");
  await page.getByLabel("Password").fill("SuperSecretPassword!");
  await page.waitForTimeout(10000);
});

test("Test for Locator by placeholder", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForTimeout(5000);
  await page.getByPlaceholder("Enter your company").nth(0).fill("myCompany");
  await page.waitForTimeout(10000);
});

test("@locator Test for Locator by Text", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForTimeout(5000);
  await page.getByText(" SelectorsHub Youtube Channel  ").nth(0).click();
  await page.getByAltText();
  await page.waitForTimeout(10000);
});

test("@locator Test for GetByAltText", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(5000);
  await page.getByText("Get started").click();
  await page.waitForTimeout(5000);
  await expect(page.getByText("Installation").nth(0)).toBeVisible();
  await page.getByAltText("Playwright logo").click();
  await expect(page.getByText("Get started")).toBeVisible();
  await page.waitForTimeout(10000);
});

test("@locator test for getByTitle", async ({ page }) => {
  await page.goto("https://selectorshub.com/xpath-practice-page/");
  await page.waitForTimeout(5000);
  await page.getByTitle("Password").fill("xyz@xyz.com");
   await page.waitForTimeout(5000);
});

test("Test for Locator", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForTimeout(5000);
  await page.locator(".getStarted_Sjon").click();
  await page.waitForTimeout(5000);
  await expect(page.locator("//div[@class='theme-doc-markdown markdown']//h1").nth(0)).toBeVisible();
  await page.getByAltText("Playwright logo").click();
  await expect(page.locator(".getStarted_Sjon")).toBeVisible();
  await page.waitForTimeout(10000);
});