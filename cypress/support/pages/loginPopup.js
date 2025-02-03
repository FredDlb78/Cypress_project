// cypress/support/pages/signInPopup.js
import 'cypress-xpath';
import HeaderPage from './headerPage';
const headerPage = HeaderPage;
class LoginPopup {
    

    fillUsername(username) {
        cy.get('#loginusername').click().clear().type(username);
        return this;
    }

    fillPassword(password) {
        cy.get('#loginpassword').click().clear().type(password);
        return this;
    }

    clickLoginButton() {
        cy.xpath('//button[text()="Log in"]').click();
        return headerPage;
    }
}

module.exports = LoginPopup; // Exporter la classe pour qu'elle puisse être importée