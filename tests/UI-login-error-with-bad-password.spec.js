import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const loginerror = 'Epic sadface: Username and password do not match any user in this service'

test('Should have an error logging in with bad password', async ({ page }) => {
  const login = new LoginPage(page)
  await login.gotoLoginPage();
  await login.loginproblem();
  await expect(page.locator('[data-test="error"]')).toContainText(loginerror)
});
