const { test, expect, chromium } = require('@playwright/test');

test('whatsapplogin', async ({ page }) => {
  const browser = await (chromium).launch('C:\\Users\\vinot\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache\\Cache_Data');
  //context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(3000);
  let search = '//input[@placeholder="Search for Products, Brands and More"]';
  await expect(page.locator(search)).toHaveValue("Search for Products, Brands and More");
  //await expect(page).toHaveText("Mobiles & Tablets");
  await page.locator(search).fill('camera');
  let option1 = "//div[normalize-space()='in Cameras']";
  await page.locator(option1).click;
  await expect(page.locator(option1)).toHaveText("Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens");
  //await expect(page).toHaveText("₹30,990");
  //await expect(page).toHaveText("CATEGORIES");
  let camera = "//div[normalize-space()='Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens']";
  await page.locator(camera).click;
  await page.waitForTimeout(3000);
  await browser.close();
});
