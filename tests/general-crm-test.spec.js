// @ts-check
import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test.beforeEach(async ({ page }) => {  
  // Login into account
  await loginIntoAccount(page, {timeout: 45000});
});


  test('page has title', async ({ page }) => {
    // Expect a title is visible
    await expect(page.getByRole('heading', { name: 'Chats' })).toBeVisible();
  });


  test.describe('Connection button', () => {
  test('Status of your network block displays on the header', async ({ page }) => {
    // Find Network Status block
    const networkStatus = page.getByLabel('Status of your network').locator('div');

    // Expect that Network Status block is visible
    await expect(networkStatus).toBeVisible();
  });
 
  test('Connected text displays on the Status of your network block', async ({ page }) => {
    // Expect a "Connected" title text 
    await expect(page.getByText('Connected')).toBeVisible({ timeout: 5000 });
  });
  
  test('Connected text displays in green color', async ({ page }) => {
    // Find the Connected block
    const block = page.getByText('Connected');
    await expect(block).toBeVisible({timeout:5000});
    
    // Set block CSS color  
    const color = await block.evaluate(el => getComputedStyle(el).color);
    
    // Comparison the block color
    expect(color).toEqual('rgb(67, 147, 103)', { timeout: 5000 });
  });
  
  test('Connection dot icon displays on the Status of your network block', async ({ page }) => {
    // Find dot icon
    const dotIcon = page.getByLabel('Status of your network').locator('span').first();

    // Expect the dot icon is visible
    await expect(dotIcon).toBeVisible({ timeout: 5000 });
  });
 
  test('Connection dot icon displays in green color', async ({ page }) => {
    // Set a timeout to load the page
    await page.waitForTimeout(6000);
    
    // Find the Connected block
    const block = page.getByLabel('Status of your network').locator('span').first();
    await expect(block).toBeVisible({timeout:5000});

    
    // Set icon CSS background color  
    const color = await block.evaluate(el => getComputedStyle(el).backgroundColor);

    // Comparison the dot icon color
    expect(color).toEqual('rgb(96, 210, 148)');
  });
 
  test('Hint block displays after hover over Status of your network block', async ({ page }) => {
    // Set a timeout to load the page
    await page.waitForTimeout(6000);
    
    // Find the Connected block
    const statusBlock = page.getByLabel('Status of your network').locator('div');
    
    // Hover over block
     await statusBlock.hover();
     
    // Find the Hint block
    const hintBlock = page.getByText('Status of your network');

    // Expect the hint block is visible
    await expect(hintBlock).toBeVisible();
  });
});

test.describe('Status of your profiles on block', () => {
  // Offline status
  test('Status [Offline] of your profiles on block displays on the header', async ({ page }) => {
    // Find User Status block
    const userStatus = page.getByLabel('Status of your profiles on').locator('div');

    // Expect that User Status block is visible
    await expect(userStatus).toBeVisible();
  });
 
  test('Offline text displays on the Status [Offline] of your profiles on block', async ({ page }) => {
    // Find Offline text
    const offlineText = page.getByText('Offline');

    // Expect that Offline text is visible
    await expect(offlineText).toBeVisible();
  });
  
  test('Offline text displays in grey color', async ({ page }) => {
    // Find the User Status block by Offline text
    const block = page.getByText('Offline');
    await expect(block).toBeVisible({timeout:5000});
    
    // Set text CSS color  
    const color = await block.evaluate(el => getComputedStyle(el).color);
    
    // Comparison the text color
    expect(color).toEqual('rgb(130, 130, 130)', { timeout: 5000 });
  });
 
  test('Status [Offline] of your profiles on block has grey background', async ({ page }) => {
    // Set a timeout to load the page
    await page.waitForTimeout(7000);
    
    // Find the User Status block
    const block = page.getByLabel('Status of your profiles on').locator('div');
    await expect(block).toBeVisible({timeout:5000});

    // Set block CSS background color  
    const color = await block.evaluate(el => getComputedStyle(el).backgroundColor);
    
    // Comparison the block background color
    expect(color).toEqual('rgba(130, 130, 130, 0.1)');
  });

  test('Hint block displays after hover over Status [Offline] of your profiles on block', async ({ page }) => {
    // Set a timeout to load the page
    await page.waitForTimeout(6000);
    
    // Find the User Status block
    const statusBlock = page.getByLabel('Status of your profiles on').locator('div');
    
    // Hover over block
    await statusBlock.hover();
     
    // Find the Hint block
    const hintBlock = page.getByText('Status of your profiles on');
    
    // Expect the hint block is visible
    await expect(hintBlock).toBeVisible();
  });


// Online status
test('Status [Online] of your profiles on block displays on the header', async ({ page }) => {
  // Click on the Start Work button
  await clickOnStartWorkButton(page);

  // Find User Status block
  const userStatus = page.getByLabel('Status of your profiles on').locator('div');

  // Expect that User Status block is visible
  await expect(userStatus).toBeVisible({ timeout: 5000 });
});

test('Online text displays on the Status [Online] of your profiles block', async ({ page }) => {
  // Click on the Start Work button
  await clickOnStartWorkButton(page);

  // Find Offline text
  const offlineText = page.getByText('Online');

  // Expect that Offline text is visible
  await expect(offlineText).toBeVisible({ timeout: 5000 });
});

test('Online text displays in green color', async ({ page }) => {
  // Click on the Start Work button
  await clickOnStartWorkButton(page);

  // Find the User Status block by Online text
  const block = page.getByText('Online');
  await expect(block).toBeVisible();

  // Set text CSS color  
  const color = await block.evaluate(el => getComputedStyle(el).color);
  
  // Comparison the text color
  expect(color).toEqual('rgb(77, 171, 117)', { timeout: 5000 });
});

test('Status [Online] of your profiles on block has green background', async ({ page }) => {
  // Click on the Start Work button
  await clickOnStartWorkButton(page);
  
  // Set a timeout to load the page
  await page.waitForTimeout(5000);
  
  // Find the User Status block
  const block = page.getByLabel('Status of your profiles on').locator('div');
  await expect(block).toBeVisible();

  // Set block CSS background color  
  const color = await block.evaluate(el => getComputedStyle(el).backgroundColor);
  
  // Comparison the block background color
  expect(color).toEqual('rgba(77, 171, 117, 0.1)');
});

test('Hint block displays after hover over Status [Online] of your profiles on block', async ({ page }) => {
  // Click on the Start Work button
  await clickOnStartWorkButton(page);
  
  // Set a timeout to load the page
  await page.waitForTimeout(6000);

  // Find the User Status block
  const statusBlock = page.getByLabel('Status of your profiles on').locator('div');
  
  // Hover over block
  await statusBlock.hover();
   
  // Find the Hint block
  const hintBlock = page.getByText('Status of your profiles on');
  
  // Expect the hint block is visible
  await expect(hintBlock).toBeVisible();
});
});





async function clickOnStartWorkButton(page) {
  // Find the Start Work button
  const startWork = page.getByRole('button', { name: 'Start work' });
  await expect(startWork).toBeVisible({ timeout: 10000 });

  // Click on the Start Work button
  await startWork.click();

  // Find Yes button
  const yesButton = page.getByRole('button', { name: 'Yes' });
  await expect(yesButton).toBeVisible({ timeout: 5000 });
  
  // Click on Yes button
  await yesButton.click();
};

async function loginIntoAccount(page) {
  // Open the page 
  await page.goto('https://stage-astrocrm.obrio.net/login', { timeout: 25000 });
  
  // Find elements on the screen
  const emailField = page.getByRole('textbox', { name: 'E-mail' });
  const passwordField = page.getByRole('textbox', { name: 'Password' });
  const signInButton = page.getByRole('button', { name: 'Sign In' });
  
  // Fill the email field
  await expect(emailField).toBeVisible({ timeout: 10000 });
  await emailField.fill('shumitska@gmail.com');
  
  // Fill the password field
  await expect(passwordField).toBeVisible();
  await passwordField.fill('Bn57!aF790');
  
  // Click on Sign In button
  await expect(signInButton).toBeVisible();
  await signInButton.click();
 
  // Wait for loading /chat page
  await page.waitForURL('**/chat', { timeout: 10000 });

}