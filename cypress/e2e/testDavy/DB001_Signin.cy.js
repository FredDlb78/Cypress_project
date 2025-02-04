import HeaderPage from '../../support/pages/headerPage';
import userFactory from '../../support/factory/userFactory';
import SignInPopup from '../../support/pages/signInPopup';

describe("Signin feature", () => {

    const headerPage = new HeaderPage();
    const user = new userFactory().newUser();
    const userAlreadyExists = new userFactory().userAlreadyExists();
    const signInPopup = new SignInPopup();

    beforeEach(() => {
        headerPage.setUp();
    });


    // Cas passants
    it('Inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickSignUp()
        .assertAlertThenAccept('Sign up successful.', headerPage);
    });


    // Cas non passants
    it('Inscription avec un username déjà utilisé', () => {
        headerPage.clickSignInMenu()
        .fillUsername(userAlreadyExists.username)
        .fillPassword(userAlreadyExists.password)
        .clickSignUp()
        .assertAlertThenAccept('This user already exist.', signInPopup)
        .closeSignInPopup();


    });



});