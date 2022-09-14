const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/LoginPage.js");
const HomePage = require("../pageobjects/HomePage.js");
// const SecurePage = require('../pageobjects/secure.page');

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the login page$/, async () => {
  await LoginPage.visit();
});

Given(/^I am on the home page$/, async () => {
  await HomePage.visit();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

When(/^I login with invalid credentials$/, async () => {
  await LoginPage.login("invalid-username", "invalid-password");
});

Then(/^I should see error message$/, async () => {
  await LoginPage.assertErrorMessage();
});

Given(/^I search for "([^"]*)"$/, async (text) => {
  await HomePage.searchFor(text);
});

Given(/^I should see results$/, async () => {
  const selector = await $("h2");
  await expect(selector).toBeDisplayed();
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {

//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
