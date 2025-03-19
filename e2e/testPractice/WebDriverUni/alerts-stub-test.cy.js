describe("Validate alerts", () =>{
    it("Verify simple alert", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //create stub
        const alertStub = cy.stub();
        cy.on('window:alert', alertStub);

        //verify alert is poped
        cy.get('#button1').click();
        
        //Assert that alert is poped with defined text
        cy.wrap(alertStub).should('have.been.calledOnceWith','I am an alert box!');
        
        

    });

    it("Verify confirm alert - OK", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //create OkStub
        const alertOkStub = cy.stub().returns(true);
        cy.on('window:confirm', alertOkStub);

        //verify alert is poped
        cy.get('#button4').click();
        
        // //Assert with defined text for alertOk        
        cy.wrap(alertOkStub).should('have.been.calledOnceWith','Press a button!');

        //Assert that appropriate msg is displayed
        cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed OK!' );


    });


    it.only("Verify confirm alert - Cancel", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#popup-alerts')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on pop-up alert page
        cy.url().should('include', 'Popup-Alerts');

        //create alert stub
        const alertCOnfirmCancelStub = cy.stub().returns(false);
        cy.on('window:confirm',alertCOnfirmCancelStub);

        //verify alert is poped
        cy.get('#button4').click();

        //verify click cancel on pop-up alert using stub
        cy.wrap(alertCOnfirmCancelStub).should('have.been.calledOnceWith','Press a button!');
        
        //assert appropriate msg is displayed
        cy.get('#confirm-alert-text').invoke('text').should('equal', 'You pressed Cancel!' );

    });
});