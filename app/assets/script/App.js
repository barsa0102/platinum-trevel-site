import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./moduls/MobileMenu";
import Revealonscroll from "./moduls/Revealonscroll";
import StickyHeaderfuck from "./moduls/StickyHeaderfuck";

new StickyHeaderfuck();
new Revealonscroll(document.querySelectorAll(".feature-item"), 75);
new Revealonscroll(document.querySelectorAll(".testimonials"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkname: "modal"*/ "./moduls/Modal")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Filiig duudhad aldaa garlaa"));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
