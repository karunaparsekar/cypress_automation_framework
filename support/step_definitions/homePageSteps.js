import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../e2e/pageObjects/homeObjects/homePage.js'



Given('I am on the home page', () => {
    //cy.log('*************before Reaching Given step with element:');
    HomePage.visit();
    //cy.log('*************after Reaching Given step with element:');
});

When('I click on the {string}', (element) => {
    //cy.log('*************Reaching When step with element:', element);
    HomePage.clickListElementWithGivenText(element);
});

Then('I should be redirected to the {string} page', (element) => {
    HomePage.verifyUrl().then((url) => {
        cy.log(url);
        switch(element){
            case 'Specials':
                expect(url).to.include('special');
                break;
            case 'Login or register':
                expect(url).to.include('account/login');
                break;
            case 'Cart':
            case 'Checkout':
                expect(url).to.include('checkout/cart');
                break;


            

        }
        
    });
});

