import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const buttonText = 'Remove'
const orderQty = '1'

test('Should add item to cart, verify button is changed to Remove for the item, verify cart shows one item in it', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()//adding backpack to cart
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText(buttonText)//verifying that button text changed from add to remove
    await expect(page.locator('a').filter({ hasText: `${orderQty}` })).toContainText(orderQty)//verifying that cart quantity changed to 1 when item was added to cart
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });