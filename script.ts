const button = document.querySelector("button")!
const nav = document.querySelector("nav")!

const toggleMenu = () => {
    let visible = nav.getAttribute("data-visible")
    if (visible === "false") {
        nav.setAttribute("data-visible", "true")
        button.setAttribute("aria-expanded", "true")
        button.setAttribute("aria-label", "close")
    } else {
        nav.setAttribute("data-visible", "false")
        button.setAttribute("aria-expanded", "false")
        button.setAttribute("aria-label", "open")
    }
}
button.addEventListener("click", toggleMenu)