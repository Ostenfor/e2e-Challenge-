/// <reference types="cypress"/>

//Exercise #4
//Criteria: When a user navigates to a smartphone detail page on www.samsung.com website on a mobile device. The user should be able to select online exclusive colors and see a larger preview of the phone in that color.


describe('Samsung', () => {
    it('should be able to select online exclusive colors and see a larger preview of the phone in that color.', () => {
        cy.visit('www.samsung.com');
        cy.scrollTo('bottom')
        cy.get(':nth-child(2) > .footer-category > .footer-category__list-wrap > .footer-category__list > :nth-child(1) > .footer-category__link').click()
        cy.wait(2)
        cy.url('https://www.samsung.com/latin/smartphones/?product1=sm-f916bznqgto&product2=&product3=sm-a525mzkgtpa')
        cy.wait(2)
        cy.get(':nth-child(1) > .nv14-visual-lnb__featured-item-link > .image > .image__main').click()
        cy.wait(1)
        cy.get('[data-productidx="0"] > .pd03-product-card > .pd03-product-card__item > .pd03-product-card__product-content > .pd03-product-card__product-content-primary > .pd03-product-card__option-selector > .option-selector-v2 > .option-selector-v2__wrap--color-chip > .option-selector-v2__swiper > .option-selector-v2__swiper-container > .option-selector-v2__swiper-wrapper > :nth-child(3) > .option-selector-v2__color > .option-selector-v2__color-code').click()
        cy.wait(1)
        cy.get('[data-productidx="0"] > .pd03-product-card > .pd03-product-card__item > .pd03-product-card__product-content > .pd03-product-card__product-content-primary > .pd03-product-card__option-selector > .option-selector-v2 > .option-selector-v2__color-name > .option-selector-v2__color-name-text > .option-selector-v2__color-name-text-in').contains('Graphite')
    });   
});