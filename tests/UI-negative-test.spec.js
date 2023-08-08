import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const firstName = 'john'
const errorName = 'Error: Last Name is required'

test('When checking out, if only a first name is added, an error is thrown verifying that last name is required ', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()//adding backpack to cart
    await page.locator('a').filter({ hasText: '1' }).click()//clicking cart
    await page.locator('[data-test="checkout"]').click()//clicking checkout
    await page.locator('[data-test="firstName"]').fill(firstName)//adding first name
    await page.locator('[data-test="continue"]').click()//clicking continue
    await expect(page.locator('[data-test="error"]')).toContainText(errorName)//verifying that error is received for only entering first name when checking out
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });