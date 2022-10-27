const menuEmail= document.querySelector('.navbar-mail');
const Desktopmenu= document.querySelector('.desktop-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    Desktopmenu.classList.toggle('inactive')
}