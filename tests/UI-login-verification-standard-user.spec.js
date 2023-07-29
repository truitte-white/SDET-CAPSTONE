import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const pageTitle = 'Swag Labs'

test('Should successfully log in as standard user', async ({ page }) => {
  const login = new LoginPage(page)
  await login.gotoLoginPage();
  await login.logingood();
  await expect(page.getByText('Swag Labs')).toContainText(pageTitle)
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});




