import HeaderPage from '../../support/pages/headerPage';
import userFactory from '../../support/factory/userFactory';
import LoginPopup from '../../support/pages/loginPopup';

describe("Login feature", () => {

    const headerPage = new HeaderPage();
    const loginPopup = new LoginPopup();
    const user = new userFactory().newUser();

    beforeAll(() => {
            headerPage.setUp();
            headerPage.clickSignInMenu()
            .fillUsername(user.username)
            .fillPassword(user.password)
            .clickSignUp()
            .assertAlertThenAccept('Sign up successful.');
    }
    it('Login', () => {
        headerPage.clickLoginMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickLoginButton();
        cy.wait(5000);
        headerPage.clickLogoutMenu();
    });
});