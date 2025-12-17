import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    usernameInput ='[data-qa="login-email"]';
    passwordInput = '[data-qa="login-password"]';
    signBtn = '[data-qa="login-button"]';

    constructor(page){
        super(page);
    }

    async enterUserName(userName){
       await this.page.locator(this.usernameInput).fill(userName);
    }

    async enterPassword(password){
       await this.page.locator(this.passwordInput).fill(password);
    }
    
    async signIn(){
        await this.page.locator(this.signBtn).click();
    }
}