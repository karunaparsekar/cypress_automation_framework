
describe("multiple origin test", () =>{
    it("Verify two roigins in same test", () =>{
        
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#automation-test-store')
            .invoke('removeAttr','target')
            .click();
        cy.origin('https://automationteststore.com', () => {
            cy.url().should('eq', 'https://automationteststore.com/');
        });
    });
});