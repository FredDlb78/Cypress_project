import HeaderPage from '../../support/pages/headerPage';
import userFactory from '../../support/factory/userFactory';

describe("Signin feature", () => {

    const headerPage = new HeaderPage();
    const user = new userFactory().newUser();

    beforeEach(() => {
        headerPage.setUp();
    });

    it('Inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickSignUp()
        .assertAlertThenAccept('Sign up successful.');
    });
});