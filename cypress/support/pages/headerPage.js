// cypress/support/pages/headerPage.js
import SignInPopup from './signInPopup';
import LoginPopup from './loginPopup';
import AboutUsPopup from './aboutUsPopup';
const signInPopup = new SignInPopup();
const loginPopup = new LoginPopup();
const aboutUsPopup = new AboutUsPopup();

class HeaderPage {
    clickSignInMenu() {
        cy.get('#signin2').click();
        return signInPopup;

    }

    clickLogInMenu() {
        cy.get('#login2').click();
        return loginPopup;
    }

    clickAboutUs() {
        cy.get('[data-target="#videoModal"]').click()
        return aboutUsPopup;
    }
    
    
}

module.exports = HeaderPage; // Exporter la classe pour qu'elle puisse être importée