const HeaderPage = require('../../support/pages/headerPage');

describe('Test basique de la page d\'accueil', () => {
    const baseUrl = 'https://demoblaze.com';
    const expectedTitle = 'Example Domain';
    const expectedHeading = 'Example Domain';
    const expectedRedirectUrl = 'https://www.iana.org/domains/example';

    const username = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const headerPage = new HeaderPage();

    const password = 'test';







    beforeEach(() => {
      // Visite la page avant chaque test
      cy.visit(baseUrl);
      
      // Vérifie que la page est bien chargée
      cy.get('body').should('be.visible');
    });
  
    it('inscription', () => {
        headerPage.clickSignInMenu()
        .fillUsername(username)
        .fillPassword(password)
        .clickSignUpButton()
        .assertAlertThenAccept('Sign up successful.');

        headerPage.clickSignInMenu();

    });
 
});