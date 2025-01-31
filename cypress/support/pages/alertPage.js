import BasePage from './basePage';

class AlertPage extends BasePage {
    assertAlertThenAccept(expectedMessage) {
        cy.window().then((win) => {
            cy.stub(win, 'alert').as('alertStub');
            cy.get('@alertStub').should('have.been.calledWith', expectedMessage).then(() => {
                cy.log(`Alert message: "${expectedMessage}" displayed.`);
            });
        });
    }
}

export default AlertPage;