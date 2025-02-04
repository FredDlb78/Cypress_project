// cypress/support/pages/aboutUsPopup.js
import 'cypress-xpath';


class AboutUsPopup {

   
    launchVideo() {
        cy.get('*[class^="vjs-poster"]').click()    
        return this;
    }

    assertVideoTest() {
        cy.get('#example-video_html5_api').should('be.visible'); 
        cy.wait(5000);
        return this;
    }
    checkUserCanIncreaseDecreaseVolume() {
        cy.wait(5000);
        cy.get('*[class^="vjs-mute-control vjs-control vjs-button vjs-vol-3"]').click();
        cy.wait(5000);
        cy.get('*[class^="vjs-mute-control vjs-control vjs-button vjs-vol-0"]').click();
        cy.wait(5000);


        return this;
    }

    checkUserCanFullScreen() {
        cy.get('*[class^="vjs-fullscreen-control vjs-control vjs-button"]').click();
        cy.wait(5000);
        cy.get('*[class^="vjs-fullscreen-control vjs-control vjs-button"]').click();
        cy.wait(5000);
        return this;
    }

    pauseVideo() {
        
        cy.get('#example-video_html5_api').click();
        return this;
    }

   
    // clickLoginButton() {
    //     cy.xpath('//button[text()="Log in"]').click();
    // }
}

module.exports = AboutUsPopup; // Exporter la classe pour qu'elle puisse être importée