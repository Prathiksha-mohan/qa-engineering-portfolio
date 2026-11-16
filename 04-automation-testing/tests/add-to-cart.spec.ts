
import { test, expect } from '@playwright/test';

test('Buyer can successfully place an order', async ({ page }) => {

  // 1. Navigate to products
  await page.goto('http://localhost:5173/products');

  // 2. Attempt to add a product
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  // 3. Login as buyer
  await page.getByRole('combobox').selectOption('buyer');

  await page.getByRole('textbox', { name: 'Enter username' })
    .fill('Jeyan');

  await page.getByRole('textbox', { name: 'Enter password' })
    .fill('jp123@');

  page.once('dialog', dialog => dialog.dismiss());

  await page.getByRole('button', { name: 'Login' }).click();

  // 4. Add product from product details page
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();

  // 5. Open cart
  await page.getByRole('link', { name: '1' }).click();

  // Verify product is in cart
  await expect(
    page.locator('p.font-semibold', { hasText: 'Carrots' })
  ).toBeVisible();

  // 6. Proceed to checkout
  await page.getByRole('button', {
    name: 'Proceed to checkout →'
  }).click();

  // 7. Enter customer details
  await page.getByRole('textbox', { name: 'First Name' })
    .fill('Jeyan');

  await page.getByRole('textbox', { name: 'Last Name' })
    .fill('Perera');

  await page.getByRole('textbox', { name: 'Phone Number' })
    .fill('0712345677');

  await page.getByRole('button', {
    name: 'Continue to shipping method'
  }).click();

  // 8. Continue through checkout steps
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('button', { name: 'Next' }).click();

  // 9. Place order and verify success alert
page.once('dialog', async dialog => {
  console.log('Order response:', dialog.message());
  expect(dialog.message()).toBeTruthy();
  await dialog.accept();
});

await page.getByRole('button', { name: 'Place Order' }).click();

// 10. Verify redirect to products page
await expect(page).toHaveURL(/\/products$/);

});
