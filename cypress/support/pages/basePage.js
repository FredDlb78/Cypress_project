import 'cypress-xpath';

class BasePage {
    constructor() {
        this.baseUrl = 'https://demoblaze.com';
        this.elements = {};
    }

    setUp() {
        cy.visit(this.baseUrl);
        cy.get('body').should('be.visible');
    }

    getElementById(name) {
        return cy.get(this.elements[name]);
    }

    getElementByXpath(name) {
        return cy.xpath(this.elements[name]);
    }
}

export default BasePage;
