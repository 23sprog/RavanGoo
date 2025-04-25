let $ = document;

let blackBackground = $.querySelector(".navbar__blackBackground");
let hamburgerButton = $.querySelector(".navbar__hamburgerButton");
let mobileItems = $.querySelector(".navbar__itemsMobile");

function mobileItemsController() {
    mobileItems.classList.toggle("navbar__itemsMobile--open")
    blackBackground.classList.toggle("navbar__blackBackground--open")
}

blackBackground.addEventListener("click", mobileItemsController);
hamburgerButton.addEventListener("click", mobileItemsController);
