import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const firstName = 'Brad'
const lastName = 'Swagger'
const zip = '32202'
const subTotal = '$91.96'
const tax = '$7.36'
const priceTot = '$99.32'
const thanks = 'Thank you for your order!'
const pageTitle = 'Swag Labs'
const buttonText = 'Remove'

test('Verify adding an items to the cart and checking out, that their total price is correct', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toContainText(buttonText)
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText(buttonText)
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText(buttonText)
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()
    await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toContainText(buttonText)
    await expect(page.locator('a').filter({ hasText: '4' })).toContainText('4')
    await page.locator('a').filter({ hasText: '4' }).click()
    await page.locator('[data-test="checkout"]').click()
    await page.locator('[data-test="firstName"]').fill(firstName)
    await page.locator('[data-test="lastName"]').fill(lastName)
    await page.locator('[data-test="postalCode"]').fill(zip)
    await page.locator('[data-test="continue"]').click()
    await expect(page.getByText('Item total: $91.96')).toContainText(subTotal)
    await expect(page.getByText('Tax: $7.36')).toContainText(tax)
    await expect(page.getByText('Total: $99.32')).toContainText(priceTot)
    await page.locator('[data-test="finish"]').click()
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toContainText(thanks)
    await page.locator('[data-test="back-to-products"]').click()
    await expect(page.getByText('Swag Labs')).toContainText(pageTitle)
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });