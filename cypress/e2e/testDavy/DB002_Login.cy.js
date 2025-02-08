import HeaderPage from '../../support/pages/headerPage';
import userFactory from '../../support/factory/userFactory';
import LoginPopup from '../../support/pages/loginPopup';

describe("Login feature", () => {

    const headerPage = new HeaderPage();
    const loginPopup = new LoginPopup();
    const user = new userFactory().newUser();
    const userUnknown = new userFactory().userUnknown();



    before(() => {
            headerPage.setUp();
            headerPage.clickSignInMenu()
            .fillUsername(user.username)
            .fillPassword(user.password)
            .clickSignUp()
            .assertAlertThenAccept('Sign up successful.', headerPage);
    });

    it('Login', () => {
        headerPage.clickLoginMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickLoginButton()
        .clickLogoutMenu();
    });


    it('Login avec un username incorrect', () => {  
        headerPage.setUp();
        headerPage.clickLoginMenu()
        .fillUsername(userUnknown.username)
        .fillPassword(userUnknown.password)
        .clickLoginButtonWithIncorrectUsername()
        .assertAlertThenAccept('User does not exist.', loginPopup)
        .closeLoginPopup()
        
    });



    
});