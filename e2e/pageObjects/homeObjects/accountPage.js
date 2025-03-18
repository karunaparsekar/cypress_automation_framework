class AccountPage{
    
    get loginNameInput(){
        return cy.get('#loginFrm_loginname');
    }

    get passwordInput(){
        return cy.get('#loginFrm_password');
    }

    get loginButton(){
        return cy.get('button[title="Login"]');
    }

    get invalidCredError(){
        cy.get('.alert-danger').trigger('text');
    }


    visit(){
        cy.visit('/index.php?rt=account/login');
    }

    getCurrentUrl(){
        cy.url().should('include', 'https://automationteststore.com/index.php?rt=account/account');
    }

    getErrorMessage(){
        cy.log(cy.invalidCredError);
        cy.invalidCredError.should('include', 'AbbaError: Incorrect login or password provided');
    }

} export default new AccountPage();