
describe("Test contact us form for webdriverUni", () =>{
    it("Should be able to perform submission via contact us form", () =>{
        cy.visit("https://automationteststore.com/")

        //check document propert description
        cy.document()
          .invoke('querySelector','meta[name="description"]')
          .should('have.property', 'content').and('eq', 'Web Store Meta Description')


        //check title of the webpage
        cy.title().should('eq', 'A place to practice your automation skills!')

        //click on contact us
        cy.get('a[href*="contact"]')
          .invoke('removeAttr', 'target')
          .click()
          .then( function (linkText){
                cy.log("clicked on a link using linkText ", linkText.text())
          })

        cy.get('#ContactUsFrm_first_name').type("Karuna")
        cy.get('#ContactUsFrm_email').type("karunaparsekar@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Need to contact customer support")
        cy.get('button[title="Submit"]').click()
        //verify that query is successfully submitted
        cy.url().should('include', 'success')




    });

   
})