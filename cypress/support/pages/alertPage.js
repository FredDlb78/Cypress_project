// cypress/support/pages/alertPage.js

class AlertPage {
    assertAlertThenAccept(expectedMessage) {
        cy.window().then((win) => {
            // Remplacez la méthode alert par un stub
            cy.stub(win, 'alert').as('alertStub');

            // Vérifiez l'appel d'alerte et affichez le message
            cy.get('@alertStub').should('have.been.calledWith', expectedMessage).then(() => {
                cy.log(`Alert message: "${expectedMessage}" displayed.`);
            });
        });
    }
}

module.exports = AlertPage; // Exporter la classe pour qu'elle puisse être importée