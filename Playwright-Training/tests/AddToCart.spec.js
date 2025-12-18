// import {test,expect} from '@playwright/test'
import { extentedTest } from "../Fixtures/fixture";
import { HomePage } from "../PageModel/HomePage";
import { LoginPage } from "../PageModel/LoginPage";
import fs from "fs";

const addToCart = JSON.parse(
  fs.readFileSync("./TestData/AddToCart.json", "utf-8")
);

console.log(addToCart);

let loginPage;
let homePage;
test("Add to Cart Test",async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.goto(process.env.URL);
    await loginPage.clickLogin();
    await loginPage.enterUserName(process.env.USERNAME);
    await loginPage.enterPassword(process.env.PASSWORD);
    await loginPage.signIn();
    homePage = new HomePage(page);
    await homePage.addToCart(addToCart['productName']);
    //await page.waitForTimeout(5000);
    await homePage.validateAddtoCart(addToCart['message']);
})

extentedTest("Test with Fixture", async ({ loginPage, homePage }) => {
  await loginPage.clickLogin();
  await loginPage.enterUserName(process.env.USERNAME);
  await loginPage.enterPassword(process.env.PASSWORD);
  await loginPage.signIn();
  await homePage.addToCart(addToCart["productName"]);
  await homePage.addToCart(addToCart["productName"]);
  //await page.waitForTimeout(5000);
  await homePage.validateAddtoCart(addToCart["message"]);
});
