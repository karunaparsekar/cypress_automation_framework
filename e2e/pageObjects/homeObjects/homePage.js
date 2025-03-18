class HomePage {

    //web elements on home page

    get storeLogo() {
        return cy.get('a.logo');
    }

    get mainMenu() {
        return cy.get('.main_menu');
    }

    get menuAccount(){
        return cy.get('.menu_account');
    }

  
    clickListElementWithGivenText(element) {
        //cy.log('here it is');
        // cy.get(this.getMainMenu()).eq(0).click().debug();
        let elementToClick = String(element);
        if (elementToClick === 'Login' || elementToClick === 'Check Your Order') {
            this.mainMenu.contains('Account').trigger('mouseover');
            cy.get('.sub_menu.dropdown-menu').contains(elementToClick).should('be.visible');
            cy.get('.sub_menu.dropdown-menu').contains(elementToClick).click();
         
            
        } else {
            this.mainMenu.contains(elementToClick).click();
        }
    }


    visit() {
        cy.visit('https://automationteststore.com/').debug();
    }

    clickElement(element) {
        cy.get(element).click();
    }


    clickListElement(element) {
        cy.get(element).each(($element, index, $list) => {
            cy.wrap($element).click();
        });
    }

    verifyUrl(element) {
        return cy.url();
    }

} export default new HomePage();