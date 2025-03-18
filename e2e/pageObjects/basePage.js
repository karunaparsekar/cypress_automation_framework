class BasePage {




    //actions for home page

    visit() {
        cy.visit('/');
    }

    clickElement(element) {
        cy.get(element).click();
    }


    clickListElement(element) {
        cy.get(element).each(($element, index, $list) => {
            cy.wrap($element).click();
        });
    }
}