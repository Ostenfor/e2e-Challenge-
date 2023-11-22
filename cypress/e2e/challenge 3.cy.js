/// <reference types="cypress"/>

//Exercise #3
//Criteria: When a user visits the https://www.ikea.com/ website and then navigates to a products page (i.e outdoor furniture). 
//On the product page the user should be able to add a furniture item to a shopping list.


describe('Amazon', () => {
    it('should be able to add a furniture item to a shopping list.', () => {
        cy.visit('https://www.ikea.com/');
        cy.wait(2)
        cy.get('button.svelte-p6b4nf').click()
        cy.wait(2)
        cy.get('.menu-content > :nth-child(2) > .holder > .region-picker > .website-link').click()
        cy.wait(2)
        cy.url("https://www.ikea.com.do/en/")
        
    });   
}); 