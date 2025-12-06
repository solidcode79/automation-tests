import { test, expect } from '../fixtures/test-fixtures';

test('Register User', async ({
  page,
  homePage,
  // signupPage,
  // accountInfoPage,
  // accountCreatedPage
}) => {
  await homePage.goto();
  await expect(homePage.logo).toBeVisible();
  await expect(homePage.homeVisible).toBeVisible();
  await expect(homePage.logo).toHaveJSProperty('naturalWidth', (value: number) => value > 0);
});
