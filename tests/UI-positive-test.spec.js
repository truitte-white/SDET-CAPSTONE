import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const buttonText = 'Remove'
const orderQty = '1'

test('Should add item to cart, verify button is changed to Remove for the item, verify cart shows one item in it', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText(buttonText)
    await expect(page.locator('a').filter({ hasText: `${orderQty}` })).toContainText(orderQty)
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });