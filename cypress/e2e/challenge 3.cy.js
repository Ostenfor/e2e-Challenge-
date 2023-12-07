/// <reference types="cypress"/>

//Exercise #3
//Criteria: When a user visits https://www.sony.com/en/SonyInfo/design/stories/. the user should be able to switch between story categories and see the correct list of stories based on the selection.

/// <reference types="cypress"/>

describe('Sony', () => {
    it('should be able to switch between story categories and see the correct list of stories based on the selection', () => {
        // Avoid uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        // Visit the webpage with the correct URL
        cy.visit('https://www.sony.com/en/SonyInfo/design/stories/')
        cy.viewport(1600, 800);

        //we take the class of the heading li and find the children and move with eq to verify each one.
        cy.get('.tag-list-heading').find('.tag-item a').eq(1).click()
        cy.url().should('include', 'https://www.sony.com/en/SonyInfo/design/stories/#product')

        cy.get('.tag-list-heading').find('.tag-item a').eq(2).click()
        cy.url().should('include', 'https://www.sony.com/en/SonyInfo/design/stories/#ui-ux')

        cy.get('.tag-list-heading').find('.tag-item a').eq(3).click()
        cy.url().should('include', 'https://www.sony.com/en/SonyInfo/design/stories/#communication')

        cy.get('.tag-list-heading').find('.tag-item a').eq(4).click()
        cy.url().should('include', 'https://www.sony.com/en/SonyInfo/design/stories/#interviews')

        cy.get('.tag-list-heading').find('.tag-item a').eq(5).click()
        cy.url().should('include', 'https://www.sony.com/en/SonyInfo/design/stories/#perspectives')

    });
});
