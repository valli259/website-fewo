const menu = document.querySelector("#menu");
const navitems = document.querySelectorAll(".navitems");
console.log(navitems);

menu.addEventListener("click", event => {
    navitems.forEach(element =>element.classList.toggle("toggle-view"));
})