import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  //Login into account
  await loginIntoAccount(page);
});

test('enter message into text field', async ({ page }) => {
    // Find the Live Chat (First chat) block
  const chatBlock = page.locator('#live_chat_list_container > div > div > a:nth-child(1)');
  await expect(chatBlock).toBeVisible({ timeout: 10000 });

  // Click on the Chat block
  await chatBlock.click();

  // Find the text field
  const textField = page.getByRole('textbox', { name: 'Add your message' });

  // Click on text field
  await textField.click();
  
  // Enter text into text field
  await textField.fill('text');
  
  // Find the Send button
  const sendButton = page.getByRole('button', { name: 'Send' });
  await expect(sendButton).toBeVisible({ timeout: 10000 });

  // Click on Send button
  await sendButton.click();

  //  Check sent message on chat
  await expect(page.getByTestId('virtuoso-item-list').getByText('text')).toBeVisible({timeout:10000})


});

async function loginIntoAccount(page) {
  // Open the page
  await page.goto('https://stage-astrocrm.obrio.net/login');
 
  // Click and fill email field
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('shumitska@gmail.com');
 
  // Click and fill password field
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Bn57!aF790');
 
  // Click on Sign In button
  await page.getByRole('button', { name: 'Sign In' }).click(); 
 }