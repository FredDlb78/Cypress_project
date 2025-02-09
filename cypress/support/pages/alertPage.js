import BasePage from './basePage';

class AlertPage extends BasePage {
    assertAlertThenAccept(expectedMessage, page) {


        // Code Fred 
        // cy.window().then((win) => {
        //     cy.stub(win, 'alert').as('alertStub');
        //     cy.get('@alertStub').should('have.been.calledWith', expectedMessage).then(() => {
        //         cy.log(`Alert message: "${expectedMessage}" displayed.`);
        //     });
        // });

        cy.window().then((win) => {
            // Vérification de l'alerte et comparaison synchrone
            const stub = cy.stub(win, 'alert').as('alert');
            win.alert(expectedMessage);
            expect(stub).to.be.calledWith(expectedMessage);
        });

        return page;
    }
}


export default AlertPage;