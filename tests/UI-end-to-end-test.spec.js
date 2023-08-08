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
    await login.gotoLoginPage()//go to log in page
    await login.logingood()//log in as good user
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()//clicking backpack item
    await page.locator('a').filter({ hasText: '1' }).click()//clicking the cart
    await page.locator('[data-test="checkout"]').click()//clicking checkout
    await page.locator('[data-test="firstName"]').fill(firstName)//next steps are adding relevant info and clicking continue
    await page.locator('[data-test="lastName"]').fill(lastName)
    await page.locator('[data-test="postalCode"]').fill(zip)
    await page.locator('[data-test="continue"]').click()
    await expect(page.getByText('Payment Information')).toContainText(payInfo)//checking that the correct payment info text is displayed on page
    await expect(page.getByText('Shipping Information')).toContainText(shipInfo)//checking that the correct shipping info text is displayed on page
    await expect(page.getByText('Price Total')).toContainText(priceTot)//checking that the correct price total text is displayed on page
    await page.locator('[data-test="finish"]').click()
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toContainText(thanks)//checking that the correct thank you info is displayed on page
    await page.locator('[data-test="back-to-products"]').click()
    await expect(page.getByText('Swag Labs')).toContainText(pageTitle)//checking that the correct page title info is displayed on page
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });