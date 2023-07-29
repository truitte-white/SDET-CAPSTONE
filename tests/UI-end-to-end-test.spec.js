import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const firstName = 'john'
const lastName = 'doe'
const zip = '32202'
const payInfo = 'Payment Information'
const shipInfo = 'Shipping Information'
const priceTot = 'Price Total'
const thanks = 'Thank you for your order!'
const pageTitle = 'Swag Labs'

test('Verify adding an item to the cart, checking out and returning the correct messages along the way, then being returned to the correct screen', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('a').filter({ hasText: '1' }).click()
    await page.locator('[data-test="checkout"]').click()
    await page.locator('[data-test="firstName"]').fill(firstName)
    await page.locator('[data-test="lastName"]').fill(lastName)
    await page.locator('[data-test="postalCode"]').fill(zip)
    await page.locator('[data-test="continue"]').click()
    await expect(page.getByText('Payment Information')).toContainText(payInfo)
    await expect(page.getByText('Shipping Information')).toContainText(shipInfo)
    await expect(page.getByText('Price Total')).toContainText(priceTot)
    await page.locator('[data-test="finish"]').click()
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toContainText(thanks)
    await page.locator('[data-test="back-to-products"]').click()
    await expect(page.getByText('Swag Labs')).toContainText(pageTitle)
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });