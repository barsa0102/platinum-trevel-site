class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".side-header__menu-icon");
        this.menuContent = document.querySelector(".side-header__menu-content");
        this.sideHeader = document.querySelector(".side-header");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("side-header__menu-content--is-visible");
        this.sideHeader.classList.toggle("side-header--is-expanded");
        this.menuIcon.classList.toggle("side-header__menu-icon--close-x")
    }
}

export default MobileMenu;