/// <reference types="cypress"/>

//Exercise #5
//Criteria: as a user that visits https://androidenterprisepartners.withgoogle.com/devices/ I'm able to compare devices i've selected. 
//Write 1 or more automation test scenarios  that verifies a user can successfully compare devices.


describe('android devices list', () => {
  it('should adds and compare mutiple devices', () => {
    cy.visit('https://androidenterprisepartners.withgoogle.com/devices/');
    cy.get('.modal__item-button').click();
  
    cy.window().scrollTo('bottom');

    cy.get('[style=""] > .result-card > .result-card__primary > .result-card__compare-btn > .js-track-click > .md-container').click();
    //checking that each device was added to the list.
    cy.get('.cp-console__counter').contains('1/3');

    cy.get(':nth-child(2) > .result-card > .result-card__primary > .result-card__compare-btn > .js-track-click > .md-container').click();
    cy.window().scrollTo('center');
    //checking that each device was added to the list.
    cy.get('.cp-console__counter').contains('2/3');

    cy.window().scrollTo('center');
    cy.get(':nth-child(11) > .result-card > .result-card__primary > .result-card__compare-btn > .js-track-click > .md-container').click();
    //checking that each device was added to the list.
    cy.get('.cp-console__counter').contains('3/3');
    cy.get('.cp-console__anchor').click();


    cy.get('h1').contains('Comparing Devices');

    //checking that there are actually 3 devices. 
    cy.screenshot();
    cy.get('[ng-repeat="i in [].constructor(3) track by $index"][style=""]').contains('View Device').should('have.length',1);
    cy.get('.compare-preview > .compare-content__row-center > .compare-content__row > :nth-child(3)').contains('View Device').should('have.length',1);
    cy.get('.compare-preview > .compare-content__row-center > .compare-content__row > :nth-child(4)').contains('View Device').should('have.length',1);
  })
})  