import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import AccountPage from '../../e2e/pageObjects/homeObjects/accountPage.js'


Given('I am on the login page', () => {
    AccountPage.visit();
});

When('I enter valid credentials',() => {
    cy.fixture('creds').then((data) => {
    AccountPage.loginNameInput.type(data.Credentials[0].username);
    AccountPage.passwordInput.type(data.Credentials[0].password);
    AccountPage.loginButton.click({force : true});
    })
    
});


When('I enter invalid credentials',() => {
    AccountPage.loginNameInput.type(data.Credentials[1].username);
    AccountPage.passwordInput.type(data.Credentials[1].password);
    AccountPage.loginButton.click({force : true});
});

Then('I should be redirected to the account dashboard', () => {
    AccountPage.getCurrentUrl
});


Then('I should see an error message', () => {
    AccountPage.getErrorMeesage
});