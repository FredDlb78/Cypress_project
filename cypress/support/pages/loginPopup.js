// cypress/support/pages/signInPopup.js
import 'cypress-xpath';
import BasePage from './basePage';
import HeaderPage from './headerPage';
// const headerPage = HeaderPage;
import AlertPage from './alertPage';
const alertPage = new AlertPage();


class LoginPopup extends BasePage {

    elements = {
        usernameInput: '#loginusername',
        passwordInput: '#loginpassword',
        logInButton: '//button[text()="Log in"]',
        closeLoginPopup: '//div[@id="logInModal"]//button[text()="Close"]'
    };

    fillUsername(username) {
        this.getElementById('usernameInput')
        .click()
        .wait(500)
        .type(username)
        .should('have.value', username);
        return this;
    }

    fillPassword(password) {
        this.getElementById('passwordInput')
        .click()
        .wait(500)
        .type(password)
        .should('have.value', password);
        return this;
        }

    clickLoginButton() {
        this.getElementByXpath('logInButton')
        .click();
        return new HeaderPage();
    }

    clickLoginButtonWithIncorrectUsername() {
        this.getElementByXpath('logInButton')
        .click();
        return alertPage;
    }
    
    closeLoginPopup() {
        this.getElementByXpath('closeLoginPopup')
        .click();
        return new HeaderPage();
    }

}


module.exports = LoginPopup; // Exporter la classe pour qu'elle puisse être importée