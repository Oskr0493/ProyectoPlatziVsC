const menuEmail= document.querySelector('.navbar-mail');
const Desktopmenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.Mobil-menu');
const menucarritoIcon=document.querySelector('.navbar-shopping-card');
const aside=document.querySelector('.Product-detail');


const burguerMenu =document.getElementById('menuHamIcon');
const shoppingcart =document.getElementById('menucarritoIcon');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',togglemobileMenu);
menucarritoIcon.addEventListener('click',toggleCarritoAside);

shoppingcart.addEventListener('click',showMyOrder)

function showMyOrder(){
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}

burguerMenu.addEventListener('click',showMobileMenu)

function showMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}


function toggleDesktopMenu(){
    Desktopmenu.classList.toggle('inactive')
}

function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){


    aside.classList.toggle('inactive')
}

