// cypress/support/pages/signInPopup.js
import 'cypress-xpath';


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
    }
}

module.exports = LoginPopup; // Exporter la classe pour qu'elle puisse être importée