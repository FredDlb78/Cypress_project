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

    // Cas passants
    it('Login', () => {
        headerPage.clickLoginMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickLoginButton()
        .clickLogoutMenu();

    });

    // Cas non passants 1
    it('Login avec un username incorrect', () => {  
        headerPage.setUp();
        headerPage.clickLoginMenu()
        .fillUsername(userUnknown.username)
        .fillPassword(userUnknown.password)
        .clickLoginButtonWithIncorrectUsernamePassword()
        .assertAlertThenAccept('User does not exist.', loginPopup)
        .closeLoginPopup()
        
    });

    // Cas non passants 2
    it('Login avec un mot de passe incorrect', () => {
        headerPage.setUp();
        headerPage.clickLoginMenu()
        .fillUsername(user.username)
        .fillPassword("wrongPassword")
        .clickLoginButtonWithIncorrectUsernamePassword()
        .assertAlertThenAccept('Wrong password.', loginPopup)
        .closeLoginPopup()

    });


    // Cas non passants 3
    it('Login avec un username vide', () => {
        headerPage.setUp();
        headerPage.clickLoginMenu()
        .fillPassword(user.password)
        .clickLoginButtonWithIncorrectUsernamePassword()
        .assertAlertThenAccept('Please fill out Username and Password.', loginPopup)
        .closeLoginPopup()
    });





    
});