const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage.js');
// const SecurePage = require('../pageobjects/secure.page');

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the login page$/, async () => {
    await LoginPage.visit()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


When(/^I login with invalid credentials$/, async () => {
    await LoginPage.login("invalid-username", "invalid-password")
});


Then(/^I should see error message$/, async () => {
    await LoginPage.assertErrorMessage();
});


// Then(/^I should see a flash message saying (.*)$/, async (message) => {
    
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

