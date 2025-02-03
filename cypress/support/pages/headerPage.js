import SignInPopup from './signInPopup';
import BasePage from './basePage';
import AboutUsPopup from './aboutUsPopup';
import LoginPopup from './loginPopup';

const signInPopup = new SignInPopup();
const aboutUsPopup = new AboutUsPopup();
const loginPopup = new LoginPopup();

class HeaderPage extends BasePage {

    elements = {
        signInMenu: '#signin2',
        contactMenu: "//div[@id='navbarExample']//a[contains(text(), 'Contact')]",
        loginMenu: '#login2',
        logoutMenu: '#logout2',
        aboutUsMenu: "//a[contains(text(), 'About us')]"
    };

    clickSignInMenu() {
        this.getElementById('signInMenu').click();
        return signInPopup;
    }
    clickContactMenu() {
        this.getElementByXpath('contactMenu').click();
        return this;
    }
    clickLoginMenu() {
        this.getElementById('loginMenu').click();
        return loginPopup;
    }

    clickLogoutMenu() {
        this.getElementById('logoutMenu').click();
        return this;
    }

   
    clickAboutUsMenu() {
        this.getElementByXpath('aboutUsMenu').click();
        return aboutUsPopup;
    }
}

export default HeaderPage;