const { test, expect, chromium } = require('@playwright/test');

test('HandlingTabs', async ({ page, context}) => {
  
  test.setTimeout(120000);
  let url = "https://www.flipkart.com/";

  await page.goto(url);

  const productSearch = await page.locator("//input[@placeholder='Search for Products, Brands and More']");
  await productSearch.fill("water bottle");
  await productSearch.press('Enter');

  // const virtuousBottle = await page.locator("//body/div[@id='container']/div/div[@class='_36fx1h _6t1WkM _3HqJxg']/div[@class='_1YokD2 _2GoDe3']/div[@class='_1YokD2 _3Mn1Gg']/div[1]/div[1]/div[1]/div[1]", {timeout:0});
  //await virtuousBottle.click();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'NIRLON Summer Cool Single' }).nth(1).click()
  ]);

  //await newPage.waitForEvent();
  console.log(await newPage.title());

  const addToCart = await newPage.getByRole('button', { name: 'Add to cart' });
  await addToCart.click();


});
