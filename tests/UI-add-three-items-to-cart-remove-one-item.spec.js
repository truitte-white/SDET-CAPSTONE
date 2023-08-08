import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const buttonText = 'Remove'

test('Add item to cart and verify that item button is changed to Remove and item is removed from the cart ', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()//function to go to login pafe
    await login.logingood()//loggin on with good password
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText(buttonText)//checking that button text is changed to remove
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText(buttonText)//checking that button text is changed to remove
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toContainText(buttonText)//checking that button text is changed to remove
    await expect(page.locator('a').filter({ hasText: '3' })).toContainText('3')//checking that there are three items in cart
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click()//removing the fleece jacket from the cart
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toContainText('Add to cart')//checking that the button was changed from remove to add
    await expect(page.locator('a').filter({ hasText: '2' })).toContainText('2')//checked that cart number was reduced from 3 to 2
    await page.locator('a').filter({ hasText: '2' }).click()//clicking the cart
    await expect(page.getByText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha')).toContainText(`Backpack`)//checking that backpack is still in cart
    await expect(page.getByText('Sauce Labs OnesieRib snap infant onesie for the junior automation engineer in de')).toContainText(`Onesie`)//checking that onesie is still in cart
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });