import HeaderPage from '../../support/pages/headerPage';
import userFactory from '../../support/factory/userFactory';
import LoginPopup from '../../support/pages/loginPopup';

describe("Signup feature", () => {

    const headerPage = new HeaderPage();
    const user = new userFactory().newUser();
    const loginPopup = new LoginPopup();

    beforeEach(() => {
        headerPage.setUp();
    });

    it('inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickSignUp()
        .assertAlertThenAccept('Sign up successful.');
    });

    // it('login', () => {
    //     headerPage.clickLoginMenu()
    //     .fillUsername(user.username)
    //     .fillPassword(user.password)
    //     .clickLoginButton()
    //     .clickLogoutMenu()
    // });

    it('Login', () => {
        headerPage.clickLoginMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickLoginButton();
        cy.wait(5000);
        headerPage.clickLogoutMenu();
    });

    

});