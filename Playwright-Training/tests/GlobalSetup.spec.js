import {test,expect} from '@playwright/test'
import { BasePage } from '../PageModel/BasePage';

test("@action Click Test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto(process.env.URL);
  await page.locator('[href="/login"]').click();
//   //await basePage.clickOnElement('[href="/login"]');
//   await basePage.pressSequentially("#username", process.env.USERNAME, 3000);
//   await basePage.fill("#password", process.env.PASSWORD);
  // #await page.goto("https://the-internet.herokuapp.com/");
  // await page.locator('[href="/login"]').click({
  //     button:'left',
  //     clickCount:1,
  //     delay:3000,
  //     force:false,
  //     timeout:5000
  // });
  await page.locator("#username").pressSequentially(process.env.USERNAME,{delay: 500});
  await page.locator("#password").fill(process.env.PASSWORD);

  await page.waitForTimeout(5000);
});