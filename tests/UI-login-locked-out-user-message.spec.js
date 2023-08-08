import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login';
const lockederror = 'Epic sadface: Sorry, this user has been locked out'

test('Should be locked out and shown error message', async ({ page }) => {
  const login = new LoginPage(page)
  await login.gotoLoginPage();
  await login.loginlocked();//logging in with user that is locked out
  await expect(page.locator('[data-test="error"]')).toContainText(lockederror)//verifying correct error is shown for locked out user
});


