// cypress/support/pages/signInPopup.js
import 'cypress-xpath';
import AlertPage from './alertPage';
const alertPage = new AlertPage();


class SignInPopup {

    fillUsername(username) {
        cy.get('#sign-username').click().clear().type(username);
        return this;
    }

    fillPassword(password) {
        cy.get('#sign-password').click().clear().type(password);
        return this;
    }

    clickSignUpButton() {
        cy.xpath('//button[text()="Sign up"]').click();
        return alertPage;
    }
}

module.exports = SignInPopup; // Exporter la classe pour qu'elle puisse être importée