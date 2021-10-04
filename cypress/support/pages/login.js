/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
const email="#usernameField"
const password="#passwordField"
//const submitclick=".waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform"


class loginpage {
    login(){
        cy.clearCookies();
        cy.visit(Cypress.env('url'));
        cy.get(email).click().type(Cypress.env('email'));
        cy.get(password).click().type(Cypress.env('password'));
        cy.contains('Login').click();
        cy.wait(3000);
        /*cy.fixture('testdata').then(data =>{
            var login = data.ShineLogin;
            cy.get(email).click().type(login.email);
            cy.get(password).click().type(login.password);
            cy.contains('Login').click();
            //cy.wait(30000);
            

        }) */

    }
}
export default loginpage










