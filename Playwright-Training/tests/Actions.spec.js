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

import {test, expect} from '@playwright/test'
import { BasePage } from '../PageModel/BasePage';


test.only('Click Test',async({page})=>{
    let basePage = new BasePage(page);
    await basePage.goto("https://the-internet.herokuapp.com/");
    await basePage.clickOnElement('[href="/login"]');
    await basePage.pressSequentially("#username",'tomsmith',3000);
    await basePage.fill("#password",'SuperSecretPassword!');
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
})

test('Checkbox test demo',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/checkboxes"]').click();
    await page.waitForTimeout(5000);
    await page.locator("#checkboxes input").nth(0).check();
    await page.waitForTimeout(5000);
    await page.locator("#checkboxes input").nth(0).uncheck();
    await page.waitForTimeout(5000);
})

test("Iframe and frames test",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator('[href="/frames"]').click();
    await page.locator('[href="/iframe"]').click();
    const framelocator = page.frameLocator("#mce_0_ifr");
    await expect(framelocator.locator("#tinymce p")).toHaveText('Your content goes here.');
    await page.waitForTimeout(5000);
})