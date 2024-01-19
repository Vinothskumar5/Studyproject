const { test, expect, chromium, firefox, webkit } = require('@playwright/test');

test('whatsapplogin', async ({ page }) => {
  const browser = await (chromium).launch('C:\\Users\\vinot\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache\\Cache_Data');
  //context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://web.whatsapp.com/');
  await page.waitForTimeout(3000);
  await browser.close();
});
