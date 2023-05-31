const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
})


const panels = document.querySelectorAll('.panel');

panels.forEach( (panel) => {

    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    } );
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    } );
}