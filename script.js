var button = document.querySelector("button");
var toggleMenu = function () {
    var visible = button.getAttribute("aria-expanded");
    if (visible === "false") {
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "close");
    }
    else {
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "open");
    }
};
button.addEventListener("click", toggleMenu);
