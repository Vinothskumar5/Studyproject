const {test} = require('@playwright/test');

const { _android: android } = require('playwright');

test('atest' , async () => {

    test.setTimeout(120000);

  // Connect to the device.
  const [device] = await android.devices();
  console.log(`Model: ${device.model()}`);
  console.log(`Serial: ${device.serial()}`);


    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: 'page.png' });
    

    const searchaProduct = page.$('//android.view.View[@resource-id="container"]/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.TextView[1]', ({timeout:0}));
    console.log(await searchaProduct);

    await page.waitForNavigation();

    await page.fill('//android.widget.EditText[@resource-id="input-searchsearchpage-input"]', 'shoes');

    await page.click('//android.widget.TextView[@text="shoes for mens"]');

  // Wait for search results to load
    await page.waitForNavigation();


//     await context.close();

//   //Close the device.
//   await device.close();

});