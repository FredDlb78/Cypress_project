// cypress/support/pages/signInPopup.js
import 'cypress-xpath';
import BasePage from './basePage';
import HeaderPage from './headerPage';
const headerPage = HeaderPage;

class LoginPopup extends BasePage {

    elements = {
        usernameInput: '#loginusername',
        passwordInput: '#loginpassword',
        logInButton: '//button[text()="Log in"]'
    };

    fillUsername(username) {
        this.getElementById('usernameInput')
        .click()
        .wait(200)
        .type(username)
        .should('have.value', username);
        return this;
    }

        fillPassword(password) {
            this.getElementById('passwordInput')
            .click()
            .wait(200)
            .type(password)
            .should('have.value', password);
            return this;
        }

    clickLoginButton() {
        this.getElementByXpath('logInButton')
        .click();
        return new HeaderPage();
    }
}

module.exports = LoginPopup; // Exporter la classe pour qu'elle puisse être importée