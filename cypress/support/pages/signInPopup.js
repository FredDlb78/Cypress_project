import BasePage from './basePage';
import AlertPage from './alertPage';
const alertPage = new AlertPage();

class SignInPopup extends BasePage {

    elements = {
        usernameInput: '#sign-username',
        passwordInput: '#sign-password',
        signUpButton: '//button[text()="Sign up"]'
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

    clickSignUp() {
        this.getElementByXpath('signUpButton')
        .click();
        return alertPage;
    }
}

export default SignInPopup;