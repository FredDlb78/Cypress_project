import HeaderPage from '../../support/pages/headerPage';
import BasePage from '../../support/pages/basePage';

describe("Signup feature", () => {

    const username = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const headerPage = new HeaderPage();

    const password = 'test';

    beforeEach(() => {
        headerPage.setUp();
    });

    it('inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(username)
        .fillPassword(password)
        .clickSignUp()
        .assertAlertThenAccept('Sign up successful.');
    });

});