var button = document.querySelector("button");
var nav = document.querySelector("nav");
var toggleMenu = function () {
    var visible = nav.getAttribute("data-visible");
    if (visible === "false") {
        nav.setAttribute("data-visible", "true");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "close");
    }
    else {
        nav.setAttribute("data-visible", "false");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "open");
    }
};
button.addEventListener("click", toggleMenu);
