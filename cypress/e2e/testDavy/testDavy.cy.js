const HeaderPage = require('../../support/pages/headerPage');
const userFactory = require('../../support/factory/userFactory');

describe('Test basique de la page d\'accueil', () => {
    const baseUrl = 'https://demoblaze.com';
    // const expectedTitle = 'Example Domain';
    // const expectedHeading = 'Example Domain';
    // const expectedRedirectUrl = 'https://www.iana.org/domains/example';
    const headerPage = new HeaderPage();

    const user = new userFactory().newUser();

    beforeEach(() => {
      // Visite la page avant chaque test
      cy.visit(baseUrl);
      
      // Vérifie que la page est bien chargée
      cy.get('body').should('be.visible');
    });
  
    it('inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickSignUpButton()
        .assertAlertThenAccept('Sign up successful.', headerPage)
        .clickSignInMenu();

    });

    it('login', () => {
        // Test Login Cas passant
        headerPage.clickLogInMenu()
        .fillUsername(user.username)
        .fillPassword(user.password)
        .clickLoginButton()
        cy.get('#nameofuser').should('be.visible');
    });
});