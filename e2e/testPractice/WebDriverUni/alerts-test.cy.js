describe("Validate alerts", () =>{
    it("Verify simple alert", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //verify alert is poped
        cy.get('#button1').click();
        
        //verify the text on pop-up alert
        cy.on('window:alert', (str) => {
            expect(str).to.be.equal('I am an alert box!');
        });
        

    });

    it("Verify confirm alert - OK", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //verify alert is poped
        cy.get('#button4').click();
        
        // //verify click ok on pop-up alert
        cy.on('window:confirm', (str) => {
           // expect(str).to.be.equal('I am an alert box!');
            return true;
        });
        
        cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed OK!' );

    });


    it("Verify confirm alert - Cancel", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //verify alert is poped
        cy.get('#button4').click();

        //verify click cancel on pop-up alert
        cy.on('window:confirm', (str) => {
            //expect(str).to.be.equal('I am an alert box!');
            return false;
        });
        
        cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed Cancel!' );

    });
});