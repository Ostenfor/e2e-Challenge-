/// <reference types="cypress"/>

//Exercise #2
//Criteria: When a user visits the amazon.com website in the logged out state and changes the currency settings then the currency 
//for the products should be displayed in the new currency that was selected.

describe('Amazon', () => {
    it('should change the currency settings', () => {
        cy.visit('https://amazon.com');
        cy.visit('https://amazon.com');
        cy.get('.icp-nav-link-inner > .nav-line-2') .trigger('mouseover');
        cy.wait(1)
        cy.get('#nav-flyout-icp > .nav-template > :nth-child(14) > .nav-text > .icp-flyout-change').contains('Change').click();
        cy.wait(1)
        cy.get('.a-dropdown-prompt').click();
        cy.wait(1)
        cy.get('#icp-currency-dropdown_20').click();
        cy.wait(1)
        cy.get('.a-button-input').click()
        cy.wait(1)
        cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click()
        cy.wait(1)
        cy.get('#twotabsearchtextbox').type('firehd10')
        cy.wait(1)
        cy.get('#nav-search-submit-button').click()
        cy.wait(1)
        cy.get('.a-list-item > form > :nth-child(7)').contains('JPY')
    });   
});