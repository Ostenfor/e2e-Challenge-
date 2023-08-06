/// <reference types="cypress"/>

//Exercise #1
//Criteria: When a user visits the amazon.com website in the logged out state and clicks on the Watchlist menu item they are redirected to a login/signup page.

describe('Amazon', () => {
    it('click on the Watchlist menu item they are redirected to a login/signup page.', () => {
        cy.visit('https://amazon.com');
        cy.get('#nav-link-accountList').trigger('mouseover');
        cy.get('.nav-text').contains('Watchlist').should('be.visible').click();
        cy.get('h1').contains('Sign in').should('exist');
    });   
});