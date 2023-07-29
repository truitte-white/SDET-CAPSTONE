import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const firstName = 'john'
const errorName = 'Error: Last Name is required'

test('When checking out, if only a first name is added, an error is thrown verifying that last name is required ', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('a').filter({ hasText: '1' }).click()
    await page.locator('[data-test="checkout"]').click()
    await page.locator('[data-test="firstName"]').fill(firstName)
    await page.locator('[data-test="continue"]').click()
    await expect(page.locator('[data-test="error"]')).toContainText(errorName)
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });