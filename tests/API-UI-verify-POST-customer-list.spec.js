import { test, expect } from '@playwright/test';
import { APILoginPage } from '../page-objects/apilogin';
let wholeName = 'Fake Person'
let bDate = '2000-01-01'
let email = 'findme@robot.com'
let phone = '9995555555'
let address = '500 Cyber Ct. Warehouse X'
let cityStatePostal = 'Internet Web 12345'
let country = 'None'

//this is a UI test to check the data from the POST
//when I run this it makes my bearer token useless so I have to get another bearer token, have not been able to solve that issue
test('This is UI verification tha the data was added, from the POST, to the contact table', async ({ page }) => {
    const login = new APILoginPage(page)
    await login.gotoApiPage()
    await login.myLogin()
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[2]', { name: 'Fake Person' })).toContainText(wholeName)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[3]', { name: '2000-01-01' })).toContainText(bDate)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[4]', { name: 'findme@robot.com' })).toContainText(email)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[5]', { name: '9995555555' })).toContainText(phone)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[6]', { name: '500 Cyber Ct. Warehouse X' })).toContainText(address)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[7]', { name: 'Internet Web 12345' })).toContainText(cityStatePostal)
    await expect(page.locator('//*[@id="myTable"]/tr[3]/td[8]', { name: 'None' })).toContainText(country)
    await page.getByRole('button', { name: 'Logout' }).click()
});

