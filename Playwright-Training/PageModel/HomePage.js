import { BasePage } from "./BasePage";
import {expect} from '@playwright/test'

export class HomePage extends BasePage{
    addToCartMessage=".modal-body .text-center";
    constructor(page){
        super(page);
    }

    async addToCart(productName){
        let productLocator = `//p[text()='${productName}']//following-sibling::a[@class='btn btn-default add-to-cart']`
        await this.page.locator(productLocator).nth(0).click();
    }

    async validateAddtoCart(message){
        await expect(await this.page.locator(this.addToCartMessage).nth(0)).toHaveText(message);
    }
}