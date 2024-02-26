const { test } = require("@playwright/test");

test('MakeanEvent', async ({page})=>{

    const url = "http://54.255.217.1:3000/";
    const username = "vinothskumar5@gmail.com";
    const password = "password";
    
    const login = "";
    const usernamefield = "";
    const passwordfield = "";
    const loginbutton = "";

    await page.goto(url);
    await page.locator(login).click();
    await page.locator(usernamefield).fill(username);
    await page.locator(passwordfield).fill(password);
    await page.locator(loginbutton).click();

})