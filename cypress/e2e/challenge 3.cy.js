/// <reference types="cypress"/>

//Exercise #3
//Criteria: When a user visits the https://www.ikea.com/ website and then navigates to a products page (i.e outdoor furniture). 
//On the product page the user should be able to add a furniture item to a shopping list.


describe('Amazon', () => {
    it('should be able to add a furniture item to a shopping list.', () => {
        cy.visit('https://www.ikea.com/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#onetrust-accept-btn-handler').should('not.be.visible');
        cy.get('.inner > .holder > [data-cy="region-picker"] > [data-cy="go-to-website"]').as('Products');
        cy.get('.inner > .holder > [data-cy="region-picker"] > [data-cy="go-to-website"] > .go-shopping').click();
        cy.wait(2000);
        cy.get('.svelte-eiqkgn').trigger('mouseover');
    });   
});