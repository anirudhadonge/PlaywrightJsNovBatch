import {test,expect} from '@playwright/test'
import fs from 'fs'

let testData;
test.beforeEach('This is before each',async()=>{
    testData = fs.readFileSync('C:/Users/adonge2d/source/PlaywrightJsNovBatch/Playwright-Training/TestData/testdata.csv');
})

test('Parameterization of the test data ',async()=>{
    console.log(testData);
})
