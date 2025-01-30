// cypress/support/pages/headerPage.js
import SignInPopup from './signInPopup';
const signInPopup = new SignInPopup();

class HeaderPage {
    clickSignInMenu() {
        cy.get('#signin2').click();
        return signInPopup;

    }
}

module.exports = HeaderPage; // Exporter la classe pour qu'elle puisse être importée