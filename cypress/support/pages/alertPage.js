// cypress/support/pages/alertPage.js

class AlertPage {
    assertAlertThenAccept(expectedMessage, nextPage) {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
            cy.get('@alertStub').should('have.been.calledWith', expectedMessage).then(() => {
                cy.log(`Alert message: "${expectedMessage}" displayed.`);
            });
        });
        return nextPage;
    }
}

module.exports = AlertPage; // Exporter la classe pour qu'elle puisse être importée