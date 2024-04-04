import "../styles/styles.css"
import MobileMenu from "./moduls/MobileMenu";

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}
