import { text } from "stream/consumers";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url){
    console.log(`Navigate to ${url}`);
    await this.page.goto(url);
  }

  async getLocator(locatorString) {
    console.log("Finding the locator for " + locatorString);
    return this.page.locator(locatorString);
  }

  async clickOnElement(locatorString){
    console.log(`Click on ${locatorString}`);
    await this.getLocator(locatorString).click();
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
}
