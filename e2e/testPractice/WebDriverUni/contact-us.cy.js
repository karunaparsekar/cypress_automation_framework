///<reference types="Cypress"/>

describe("Test contact us form for webdriverUni", () =>{
    it.only("Should be able to perform submission via contact us form", () =>{
        cy.visit("https://webdriveruniversity.com/")
        //check document property charset
        cy.document().should('have.property', 'charset').and('eq','UTF-8')

        
        cy.get('#contact-us')
            .invoke('removeAttr', 'target')
            .click()
        cy.get('[name="first_name"]')
            .type("Karuna")
        cy.get('[name="last_name"]')
            .type("Parsekar")
        cy.get('[name="email"]')
            .type("karunaparsekar@gmail.com")
        cy.get('textarea.feedback-input')
            .click()
            .type("Need to connect with customer support")
        cy.get('[type="submit"]').click()
        //assert to check Thank you message is displayed
        cy.get('h1').should('have.text','Thank You for your Message!')
        cy.screenshot();

    });

    it("Should not be able to perform submission via contact us form", () =>{
        
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#contact-us')
            .invoke('removeAttr', 'target')
            .click()
            cy.get('[name="first_name"]')
            .type("Karuna")
        cy.get('[name="last_name"]')
            .type("Parsekar")
        cy.get('textarea.feedback-input')
            .click()
            .type("Need to connect with customer support")
        cy.get('[type="submit"]').click()
        //check error msgg is displayed
        cy.contains('Error: all fields are required')

    });
})