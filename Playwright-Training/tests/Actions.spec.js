/**
 * Click
 * Filling up the text boxes
 * Selecting Checkbox and radio
 *   files
 * downloading files
 * Frames
 * Gathering Text from the UI
 * Section options from dropdown
 * Javascript Alerts
 * Hover
 * New Page
 * Hover
 * Basic Authencation
 * Drag and Drop
 */

import { test, expect, chromium } from "@playwright/test";
import { BasePage } from "../PageModel/BasePage";

test("Click Test", async ({ page }) => {
  let basePage = new BasePage(page);
  await basePage.goto("https://the-internet.herokuapp.com/");
  await basePage.clickOnElement('[href="/login"]');
  await basePage.pressSequentially("#username", "tomsmith", 3000);
  await basePage.fill("#password", "SuperSecretPassword!");
  // #await page.goto("https://the-internet.herokuapp.com/");
  // await page.locator('[href="/login"]').click({
  //     button:'left',
  //     clickCount:1,
  //     delay:3000,
  //     force:false,
  //     timeout:5000
  // });
  // await page.locator("#username").pressSequentially('tomsmith',{delay: 3000});
  // await page.locator("#password").fill('SuperSecretPassword!');

  await page.waitForTimeout(5000);
});

test("Checkbox test demo", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/checkboxes"]').click();
  await page.waitForTimeout(5000);
  await page.locator("#checkboxes input").nth(0).check();
  await page.waitForTimeout(5000);
  await page.locator("#checkboxes input").nth(0).uncheck();
  await page.waitForTimeout(5000);
});

test("Iframe and frames test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/frames"]').click();
  await page.locator('[href="/iframe"]').click();
  const framelocator = page.frameLocator("#mce_0_ifr");
  await expect(framelocator.locator("#tinymce p")).toHaveText(
    "Your content goes here."
  );
  await page.waitForTimeout(5000);
});

test("Dropdown selection test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/dropdown"]').click();
  await page.waitForTimeout(3000);
  //   await page.locator("select#dropdown").selectOption({ value: "1" });
  //   await page.waitForTimeout(3000);
  //   await page.locator("select#dropdown").selectOption({ label: "Option 2" });
  //   await page.waitForTimeout(3000);
  //   await page.locator("select#dropdown").selectOption({ index: 1 });
  //   await page.waitForTimeout(3000);
  await page.locator("select#dropdown").click();
  await page.waitForTimeout(3000);
  await page.locator("select#dropdown option").nth(1).click();
  await page.waitForTimeout(3000);
});

test("Upload file Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/upload"]').click();
  //   await page
  //     .locator("#file-upload")
  //     .setInputFiles(
  //       "C:/Users/adonge2d/source/PlaywrightJsNovBatch/Playwright-Training/uploadFile/uploadFile.pdf"
  //     );

  //   const fileChooser = page.waitForEvent('filechooser');
  //   await page.locator("#file-upload").click();
  //   const fileChooserEvent = await fileChooser;
  //   await fileChooserEvent.setFiles("C:/Users/adonge2d/source/PlaywrightJsNovBatch/Playwright-Training/uploadFile/uploadFile.pdf");
  let basePage = new BasePage(page);
  await basePage.uploadFile(
    "#file-upload",
    "C:/Users/adonge2d/source/PlaywrightJsNovBatch/Playwright-Training/uploadFile/uploadFile.pdf"
  );
  await page.waitForTimeout(10000);
});

test("Download File test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/download"]').click();
  //   const download = page.waitForEvent('download');
  //   await page.locator('.example a:has-text("TextDoc.txt")').click();
  //   const downloadEvent = await download;
  //   await downloadEvent.saveAs('./DownloadFile/'+downloadEvent.suggestedFilename());
  let basePage = new BasePage(page);
  await basePage.downloadFile(
    '.example a:has-text("manualtesting_material.docx")',
    "./DownloadFile/"
  );
  await page.waitForTimeout(5000);
});

test("Hover test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/hovers"]').click();
  await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(0).hover();
  await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(1).hover();
  await page.waitForTimeout(2000);
  await page.locator(".figure img").nth(2).hover();
  await page.waitForTimeout(2000);
});

test("Drag and Drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/drag_and_drop"]').click();
  await page.waitForTimeout(2000);
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await page.waitForTimeout(5000);
});

test("Js Alert test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await page.waitForTimeout(3000);
  // page.on('dialog',async (dialog)=>{
  //   console.log(dialog.message());
  //   await page.waitForTimeout(3000);
  //   await dialog.accept()
  // });
  // await page.locator('[onclick="jsAlert()"]').click();
  let basePage = new BasePage(page);
  await basePage.handelJSAlert('[onclick="jsAlert()"]');
  await expect(page.locator("#result")).toHaveText(
    "You successfully clicked an alert"
  );
});

//You clicked: Ok
//You clicked: Cancel
test("Js Confirm Accept Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await page.waitForTimeout(3000);
  // page.on('dialog',async (dialog)=>{
  //   console.log(dialog.message());
  //   await page.waitForTimeout(3000);
  //   await dialog.accept()
  // });
  // await page.locator('[onclick="jsConfirm()"]').click();
  let basePage = new BasePage(page);
  await basePage.acceptJsconfirmDialog('[onclick="jsConfirm()"]');
  await expect(page.locator("#result")).toHaveText("You clicked: Ok");
  await page.waitForTimeout(3000);
});

test("Js Confirm Dismiss Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await page.waitForTimeout(3000);
  // page.on('dialog',async (dialog)=>{
  //   console.log(dialog.message());
  //   await page.waitForTimeout(3000);
  //   await dialog.dismiss();
  // });
  // await page.locator('[onclick="jsConfirm()"]').click();
  let basePage = new BasePage(page);
  await basePage.dismissJsconfirmDialog('[onclick="jsConfirm()"]');
  await expect(page.locator("#result")).toHaveText("You clicked: Cancel");
  await page.waitForTimeout(3000);
});

//You entered: Demo
test("Js Prompt Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/javascript_alerts"]').click();
  await page.waitForTimeout(3000);
  page.on('dialog',async (dialog)=>{
    console.log(dialog.message());
    await page.waitForTimeout(3000);
    await dialog.accept('Demo');
  });
  await page.locator('[onclick="jsPrompt()"]').click();
  // let basePage = new BasePage(page);
  // await basePage.dismissJsconfirmDialog('[onclick="jsConfirm()"]');
  await expect(page.locator("#result")).toHaveText("You entered: Demo");
  await page.waitForTimeout(3000);
});

test('Browser, Browser-Context, Page',async()=>{
  const browser = await chromium.launch({
    headless:false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.waitForTimeout(3000);
})

test.only('Multi Window Test',async({context,page})=>{
  await page.goto("https://the-internet.herokuapp.com/");
  await page.locator('[href="/windows"]').click();
  // const newPageEvent = context.waitForEvent('page');
  // await page.locator('[href="/windows/new"]').click();
  // const newPage = await newPageEvent;
  let basePage = new BasePage(page);
  const newPage =await basePage.clickToGetNewPage('[href="/windows/new"]',context);
  await page.waitForTimeout(3000);
  await expect(newPage.locator('.example h3')).toHaveText('New Window');
  await expect(page.locator('.example h3')).toHaveText('Opening a new window');
})