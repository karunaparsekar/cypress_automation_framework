describe('Validate iframes', () => {
    it('Verify text and buttons inside iframe', () => {

        //click on iframes link
        cy.visit("https://webdriveruniversity.com/");
        cy.get('#iframe')
            .invoke('removeAttr', 'target')
            .click({force: true});

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click();

        //get modal
        cy.get('@iframe').find('#myModal').as('modal');

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.include('a wide range of electrical goods');
        })

        

    });
});