import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    
    test.setTimeout(60000);

  await page.goto('http://54.255.217.1:3000/');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click({button: 'right'});
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click({button: 'right'});
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('vinothskumar5@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Pages' }).click();
  await page.locator('label span').click();
  await page.getByRole('searchbox', { name: 'Search Pages' }).click();
  await page.getByRole('searchbox', { name: 'Search Pages' }).click();
  await page.getByRole('searchbox', { name: 'Search Pages' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search Pages' }).fill('B');
  await page.getByRole('searchbox', { name: 'Search Pages' }).press('CapsLock');
  await page.getByRole('searchbox', { name: 'Search Pages' }).fill('Bad');
  await page.getByRole('link', { name: 'Bad on Badminton Club (' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: 'Events' }).click();
  await page.waitForTimeout(3000);
  await page.locator('//button[normalize-space()="Create Event"]').click();
  await page.getByPlaceholder('Enter your Event Name').click();
  await page.getByPlaceholder('Enter your Event Name').press('CapsLock');
  await page.getByPlaceholder('Enter your Event Name').fill('T');
  await page.getByPlaceholder('Enter your Event Name').press('CapsLock');
  await page.getByPlaceholder('Enter your Event Name').fill('Test event');
  await page.locator('#field-83').selectOption('49');
  await page.locator('div').filter({ hasText: /^DescriptionDescription$/ }).getByRole('textbox').locator('div').nth(2).click();
  await page.locator('div').filter({ hasText: /^DescriptionDescription$/ }).getByRole('textbox').fill('test');
  await page.locator("//p[text()='No Payment']").click();
  await page.getByPlaceholder('From').click();
  await page.getByRole('combobox').nth(2).selectOption('1972');
  await page.getByLabel('Choose Tuesday, February 1st,').click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByPlaceholder('From').click();
  await page.getByRole('combobox').nth(2).selectOption('2024');
  await page.getByLabel('Next Month').click();
  await page.getByLabel('Choose Wednesday, March 20th,').click();
  await page.getByPlaceholder('To').click();
  await page.getByLabel('Next Month').click();
  await page.getByLabel('Choose Saturday, March 30th,').click();
  await page.getByPlaceholder('Start').click();
  await page.getByLabel('Choose Monday, February 26th,').click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByPlaceholder('End').click();
  await page.getByLabel('Next Month').click();
  await page.getByLabel('Choose Friday, March 15th,').click();
  await page.getByPlaceholder('Phone / Mobile Number').click();
  await page.getByPlaceholder('Phone / Mobile Number').fill('+91 93848 54849');
  await page.getByPlaceholder('Name', { exact: true }).click();
  await page.getByPlaceholder('Name', { exact: true }).fill('ram');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ram@gmail.com');
  await page.locator('div').filter({ hasText: /^Event RulesEvent Rules$/ }).getByRole('textbox').locator('div').nth(2).click();
  await page.locator('div').filter({ hasText: /^Event RulesEvent Rules$/ }).getByRole('textbox').fill('no');
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.waitForTimeout(3000);
  await page.locator('.css-ackcql').click();
  await page.locator('(//div[text()="Yellow Turf"])[1]').click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('button', { name: '+ Add Sports' }).click();
  await page.getByLabel('Select Sport').selectOption('12');
  await page.getByLabel('Select Category').selectOption('TEAMCA');
  await page.locator('.css-ackcql').first().click();
  await page.locator('//div[@class=" css-1n7v3ny-option"]').click();
  await page.getByLabel('Participant Category').selectOption('131');
  await page.locator("(//option[text()='Under']//..)[1]").selectOption('Under');
  await page.locator('#field-137').click();
  await page.locator('#field-137').fill('24');
  await page.getByPlaceholder('From').click();
  await page.locator('.react-datepicker__year-dropdown-container').click();
  await page.locator('.react-datepicker__year-select').selectOption('1970');
  await page.getByLabel('Choose Sunday, February 1st,').click();
  await page.getByPlaceholder('To').click();
  await page.getByLabel('Choose Thursday, February 1st,').click();
  await page.getByLabel('Select Format').selectOption('GRPKNO');
  await page.locator('.css-1d8n9bt > .css-ackcql').first().click();
  await page.locator('(//div[text()="Yellow Turf"])[1]').click();
  await page.locator('(//p[contains (text(),"Overall minim")]//..//input)[1]').fill('1');
  await page.locator('(//p[contains (text(),"Overall minim")]//..//input)[2]').click();
  await page.locator('(//p[contains (text(),"Overall minim")]//..//input)[2]').fill('16');
  await page.locator('(//p[contains (text(),"Overall Minimum")]//..//input)[1]').click();
  await page.locator('(//p[contains (text(),"Overall Minimum")]//..//input)[1]').fill('1');
  await page.locator('(//p[contains (text(),"Overall Minimum")]//..//input)[2]').click();
  await page.locator('(//p[contains (text(),"Overall Minimum")]//..//input)[2]').fill('5');
  await page.locator('.css-1d8n9bt > .css-ackcql').click();
  await page.getByText('Certificate', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^DescriptionDescription$/ }).getByRole('textbox').locator('div').nth(2).click();
  await page.locator('div').filter({ hasText: /^DescriptionDescription$/ }).getByRole('textbox').fill('no');
  await page.locator('div').filter({ hasText: /^Playing ConditionsPlaying Conditions$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Playing ConditionsPlaying Conditions$/ }).getByRole('textbox').fill('nil');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Save & Proceed' }).click();
  await page.getByRole('button', { name: 'Save & Publish' }).click();
  await page.getByRole('button', { name: 'Save & Publish' }).click();
  /*await page.getByRole('button', { name: 'REGISTER' }).click();
  await page.locator('#field-73').selectOption("//option[text()='Badminton - Team Event (Under 24)']");
  await page.locator('//select[@name="selected_team_id"]').selectOption("//option[text()='This is my team']");
  await page.getByRole('button', { name: '+ Add Player From Team' }).click();
  await page.getByLabel('Add Players from Team').locator('span').nth(1).click();
  await page.getByLabel('Add Players from Team').locator('span').nth(3).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByPlaceholder('Event Team Name').click();
  await page.getByPlaceholder('Event Team Name').press('CapsLock');
  await page.getByPlaceholder('Event Team Name').fill('T');
  await page.getByPlaceholder('Event Team Name').press('CapsLock');
  await page.getByPlaceholder('Event Team Name').fill('The team of teams');
  await page.locator('label span').first().click();
  await page.getByRole('button', { name: 'Register' }).click();
  await page.locator('#field-104').selectOption('F');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('tab', { name: 'Matches' }).click();*/
});