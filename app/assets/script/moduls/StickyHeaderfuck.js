import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeaderfuck {
  constructor() {
    this.sideHeader = document.querySelector(".side-header");
    this.pageSection = document.querySelectorAll(".page-section");
    this.browserHeight = innerHeight;
    this.previousScrolly = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      "scroll",
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      "resize",
      debounce(() => {
        console.log("Browseriig resize hiij bna");
        this.browserHeight = window.innerHeight;
      }, 300)
    );
  }

  runOnScroll() {
    this.checkScrollDirection();
    if (window.scrollY > 60) {
      this.sideHeader.classList.add("side-header--dark");
    } else {
      this.sideHeader.classList.remove("side-header--dark");
    }

    this.pageSection.forEach((el) => this.calcSection(el));
  }

  checkScrollDirection() {
    if (window.scrollY > this.previousScrolly) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previousScrolly = window.scrollY;
  }

  calcSection(el) {
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      let scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100;
      if (
        (scrollPercent < 18 &&
          scrollPercent > -0.1 &&
          this.scrollDirection == "down") ||
        (scrollPercent < 33 && this.scrollDirection) == "up"
      ) {
        let matchingLink = el.getAttribute("data-matching-link");
        document
          .querySelectorAll(`.primary-nav a:not(${matchingLink})`)
          .forEach((el) => el.classList.remove("is-current-link"));
        document.querySelector(matchingLink).classList.add("is-current-link");
      }
    }
  }
}

export default StickyHeaderfuck;
