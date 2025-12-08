import {test,expect} from '@playwright/test'

test('@first First test',async({page})=>{
    await page.waitForTimeout(5000);
    await page.goto("https://playwright.dev/"); // Navigating to https://playwright.dev/
    await page.locator(".getStarted_Sjon").click(); // Clicking on the Get Started Button
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation"); // Verifying the Header test on intro page.
    await page.waitForTimeout(5000);
})