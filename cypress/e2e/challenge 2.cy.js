/// <reference types="cypress"/>

//Exercise #2
//Criteria: When a user visits the amazon.com website in the logged out state and changes the currency settings then the currency 
//for the products should be displayed in the new currency that was selected.

describe('Amazon', () => {
    it('should change the currency settings', () => {
        cy.visit('https://amazon.com');
        cy.get('.icp-nav-link-inner').trigger('mouseover');
        cy.get('.icp-flyout-change').contains('Change').click();
        cy.get(':nth-child(7) > .a-radio > label > .a-icon').should('exist').click();
        cy.get('.a-button-input').click();
        cy.get('.icp-nav-link-inner').contains('AR').should('exist');
    });   
});