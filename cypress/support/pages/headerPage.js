// cypress/support/pages/headerPage.js
import SignInPopup from './signInPopup';
import LoginPopup from './loginPopup';
const signInPopup = new SignInPopup();
const loginPopup = new LoginPopup();

class HeaderPage {
    clickSignInMenu() {
        cy.get('#signin2').click();
        return signInPopup;

    }

    clickLogInMenu() {
        cy.get('#login2').click();
        return loginPopup;
    }
}

module.exports = HeaderPage; // Exporter la classe pour qu'elle puisse être importée