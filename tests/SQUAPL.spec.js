// Assertions
import { test, expect } from '@playwright/test';
test ('Verify', async ({ page }) => {

// Go to url
await (page.goto("https://squapl.com/"))


// verify text     Class name can be denoted with ('.') and class name 
await expect(page.locator('.t1')).toContainText("Elevating Businesses With IT Solutions")

// make learnmore button as element store teh xpath as variable and check learnmore button to be clickable
let learnmoreButton = "//a[@href='/about']//button[@class='btn']"
await expect(page.locator(learnmoreButton)).toBeEnabled;

// Scroll to about squapl button
let aboutSQUAPLButton ="//div[@class='link']//a[@href='/pageuc']"
await (page.locator(aboutSQUAPLButton)).scrollIntoViewIfNeeded;


// list of elements 
let navigatioBarlist="//div[@class='navbar-links']//ul"
const listOfElementsTab =["   01Overview    02 Consulting    03 Client story    04 Insights    05 Inside squapl    06 Discover more  "];
await expect (page.locator(navigatioBarlist)).toHaveText(listOfElementsTab);

// ignore case
let descriptionOfElevatingBusiness = "//p[contains(text(),'Unlock your potential with comprehensive IT produc')]"
let descriptionOFText = "Unlock your potential with comprehensive IT products and services. Let us help your business thrive"
await expect(page.locator(descriptionOfElevatingBusiness)).toContainText(descriptionOFText, {ignoreCase:true});


// partial case 
let overview="//p[contains(text(),'Squapl Technologies, is a leading provider of tech')]"
await expect(page.locator(overview)).toHaveText(/Squapl Technologies/);

// verify image is visible
let ConsultingImage = "//div[@id='tab1']//img[@alt='consulting image']"
await expect(page.locator(ConsultingImage)).toBeVisible;
await expect(page.locator(ConsultingImage)).toBeVisible;

// click on about us 
let AboutUS="//span[@class='link aboutUs-link']//a[@class='link-style link primary']"
await page.click(AboutUS);

// Verify text in about us page
await page.getByText("Who We Are?")

// Verify dropdown text 
let ProjectDropdown="//div[contains(text(),'Project')]"
let CaseStdiesDropdown="//div[@class='link'][normalize-space()='Case Studies']"
await page.locator(CaseStdiesDropdown).click(ProjectDropdown);

// verify selected dropdown
let projectimage= "//div[@class='items row-1-top']"
await page.locator(projectimage).toBeVisible;


});