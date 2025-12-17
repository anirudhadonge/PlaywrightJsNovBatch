import {test as base} from '@playwright/test'
import { LoginPage } from '../PageModel/LoginPage';
import { HomePage } from '../PageModel/HomePage';
import { log } from 'console';
export const extentedTest = base.extend({
    loginPage: async({page},use)=>{
        let loginPage = new LoginPage(page);
        await loginPage.goto(process.env.URL);
        use(loginPage)
    },
    homePage:async({page},use)=>{
        let homePage = new HomePage(page);
        use(homePage);
    }
})