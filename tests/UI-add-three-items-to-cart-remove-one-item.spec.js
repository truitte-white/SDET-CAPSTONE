import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/login'
const buttonText = 'Remove'

test('Should add item to cart and verify that item is button is changed to Remove and item is removed from the cart ', async ({ page }) => {
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.logingood()
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toContainText(buttonText)
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toContainText(buttonText)
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    await expect(page.locator('[data-test="remove-sauce-labs-onesie"]')).toContainText(buttonText)
    await expect(page.locator('a').filter({ hasText: '3' })).toContainText('3')
    await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click()
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toContainText('Add to cart')
    await expect(page.locator('a').filter({ hasText: '2' })).toContainText('2')
    await page.locator('a').filter({ hasText: '2' }).click()
    await expect(page.getByText('Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha')).toContainText(`Backpack`)
    await expect(page.getByText('Sauce Labs OnesieRib snap infant onesie for the junior automation engineer in de')).toContainText(`Onesie`)
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.getByRole('link', { name: 'Logout' }).click()
  });