import "../styles/styles.css";
import MobileMenu from "./moduls/MobileMenu";
import Revealonscroll from "./moduls/Revealonscroll";
import StickyHeaderfuck from "./moduls/StickyHeaderfuck";

let stickyHeaderfuck = new StickyHeaderfuck();
new Revealonscroll(document.querySelectorAll(".feature-item"), 75);
new Revealonscroll(document.querySelectorAll(".testimonials"), 50);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
