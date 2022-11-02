const menuEmail= document.querySelector('.navbar-mail');
const Desktopmenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.Mobil-menu');
const menucarritoIcon=document.querySelector('.navbar-shopping-card');
const aside=document.querySelector('.Product-detail');
const cardsContainer=document.querySelector('.cards-conteiner');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',togglemobileMenu);
menucarritoIcon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
}

    Desktopmenu.classList.toggle('inactive')
}

function togglemobileMenu(){
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
}

   mobileMenu.classList.toggle('inactive')

}
   

function toggleCarritoAside(){

    const isMobilemenuClosed=mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed=Desktopmenu.classList.contains('inactive');

    if(!isMobilemenuClosed){
            mobileMenu.classList.add('inactive')
    }
    else if(!isMenuDesktopClosed) {
        Desktopmenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive')
 

}

const productlist=[];
productlist.push({
    name: 'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=300',
});
productlist.push({
    name: 'Celular',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=300',
});
productlist.push({
    name: 'carro',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=300',
});

function renderProducts(arr){
for(product of arr){
    const productCard=document.createElement('div');
    productCard.classList.add('Product-card');
    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv=document.createElement('div');
    const productPrice=document.createElement('p');
    productPrice.innerText='$'+product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure=document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
}
}
renderProducts(productlist);