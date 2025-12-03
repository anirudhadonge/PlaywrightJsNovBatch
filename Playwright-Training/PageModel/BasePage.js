import { text } from "stream/consumers";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    console.log(`Navigate to ${url}`);
    await this.page.goto(url);
  }

  async getLocator(locatorString) {
    console.log("Finding the locator for " + locatorString);
    return this.page.locator(locatorString);
  }

  async clickOnElement(locatorString) {
    console.log(`Click on ${locatorString}`);
    const locator = this.getLocator(locatorString);
    await locator.click();
  }

  async fill(locatorString, textToType) {
    console.log(`Text to fill ${textToType} in locator ${locatorString}`);
    await this.getLocator(locatorString).fill(textToType);
  }

  async pressSequentially(locatorString, textToType, delayTime) {
    console.log(`Text to fill ${textToType} in locator ${locatorString}`);
    await this.getLocator(locatorString).pressSequentially(textToType, {
      delay: delayTime,
    });
  }

  async uploadFile(locator, filePath) {
    const fileChooser = this.page.waitForEvent("filechooser");
    await this.page.locator(locator).click();
    const fileChooserEvent = await fileChooser;
    await fileChooserEvent.setFiles(filePath);
  }

  async downloadFile(fileLocator, filePath) {
    const download = this.page.waitForEvent("download");
    await this.page.locator(fileLocator).click();
    const downloadEvent = await download;
    await downloadEvent.saveAs(filePath + downloadEvent.suggestedFilename());
  }

  async handelJSAlert(locator) {
    this.page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      //await page.waitForTimeout(3000);
      await dialog.accept();
    });
    await this.page.locator(locator).click();
  }

  async acceptJsconfirmDialog(locator) {
    this.page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await this.page.waitForTimeout(3000);
      await dialog.accept();
    });
    await this.page.locator(locator).click();
  }

  async dismissJsconfirmDialog(locator) {
    this.page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await this.page.waitForTimeout(3000);
      await dialog.dismiss();
    });
    await this.page.locator(locator).click();
  }

  async clickToGetNewPage(locator,context) {
    const newPageEvent = context.waitForEvent("page");
    await this.page.locator(locator).click();
    return await newPageEvent;
  }
}
