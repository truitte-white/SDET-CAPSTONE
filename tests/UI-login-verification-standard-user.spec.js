import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const pageTitle = 'Swag Labs'

test('Should successfully log in as standard user', async ({ page }) => {
  const login = new LoginPage(page)
  await login.gotoLoginPage();
  await login.logingood();//logging in with standard user
  await expect(page.getByText('Swag Labs')).toContainText(pageTitle)//using page title to show that user was able to log in successfully
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});




