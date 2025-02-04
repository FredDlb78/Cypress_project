import HeaderPage from '../../support/pages/headerPage';

describe("Signup feature", () => {

    const headerPage = new HeaderPage();

    beforeEach(() => {
        headerPage.setUp();
    });

    it('About us', () => {
        headerPage.clickAboutUsMenu()
        .launchVideo()
        .assertVideoTest()
        .checkUserCanIncreaseDecreaseVolume()
        .checkUserCanFullScreen()
        .pauseVideo()
        .closeAboutUsPopup();
    });


    

});