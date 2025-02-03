import SignInPopup from './signInPopup';
import BasePage from './basePage';
const signInPopup = new SignInPopup();

class HeaderPage extends BasePage {

    elements = {
        signInMenu: '#signin2',
        contactMenu: "//div[@id='navbarExample']//a[contains(text(), 'Contact')]"
    };

    clickSignInMenu() {
        this.getElementById('signInMenu').click();
        return signInPopup;
    }
    clickContactMenu() {
        this.getElementByXpath('contactMenu').click();
        return this;
    }
}

export default HeaderPage;