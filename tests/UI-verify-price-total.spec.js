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
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toContainText(buttonText)//verifying button text was changed to remove when item was added to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText(buttonText)//verifying button text was changed to remove when item was added to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText(buttonText)//verifying button text was changed to remove when item was added to cart
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()//adding item to cart
    await expect(page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')).toContainText(buttonText)//verifying button text was changed to remove when item was added to cart
    await expect(page.locator('a').filter({ hasText: '4' })).toContainText('4')//verifying there are 4 items in the cart
    await page.locator('a').filter({ hasText: '4' }).click()
    await page.locator('[data-test="checkout"]').click()
    await page.locator('[data-test="firstName"]').fill(firstName)//adding relevant data needed to checkout
    await page.locator('[data-test="lastName"]').fill(lastName)
    await page.locator('[data-test="postalCode"]').fill(zip)
    await page.locator('[data-test="continue"]').click()
    await expect(page.getByText('Item total: $91.96')).toContainText(subTotal)//verifying correct item total
    await expect(page.getByText('Tax: $7.36')).toContainText(tax)//verifying correct tax
    await expect(page.getByText('Total: $99.32')).toContainText(priceTot)//verifying correct total
    await page.locator('[data-test="finish"]').click()
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toContainText(thanks)//verifying correct thank you text
    await page.locator('[data-test="back-to-products"]').click()
    await expect(page.getByText('Swag Labs')).toContainText(pageTitle)//verifying correct redirect page after order is complete
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });