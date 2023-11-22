/// <reference types="cypress"/>

//Exercise #4
//Criteria: When a user visits https://www.sony.com/en/SonyInfo/design/stories/. the user should be able to switch between story categories and see the correct list of stories based on the selection.

describe('Sony', () => {
    it('should be able to switch between story categories and see the correct list of stories based on the selection', () => {
        cy.visit('https://www.sony.com/en/SonyInfo/design/stories/');
        

    });   
});