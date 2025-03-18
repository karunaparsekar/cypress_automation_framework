describe("Validate go back ,forward and reload", () =>{
    it("Verify two oigins in same test", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#to-do-list')
            .invoke('removeAttr','target')
            .click();
        
        //verify page is on to do list page
        cy.url().should('include', 'To-Do-List');

        //go back and forward and verify
        cy.go('back');
        cy.url().should('equal', 'https://webdriveruniversity.com/');

        cy.go('forward');
        cy.url().should('equal', 'https://webdriveruniversity.com/To-Do-List/index.html');


    });
});