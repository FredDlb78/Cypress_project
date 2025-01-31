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
        .clear()
        .type(username);
        return this;
    }

    fillPassword(password) {
        this.getElementById('passwordInput')
        .click()
        .clear()
        .type(password);
        return this;
    }

    clickSignUp() {
        this.getElementByXpath('signUpButton')
        .click();
        return alertPage;
    }
}

export default SignInPopup;