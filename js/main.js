const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
// const dropNaviItem = document.querySelector('.drop-navi-items');
const navBackDrop = document.querySelector('.nav-backdrop');
const allColl = document.querySelector('.all-collection')

// const swipSlide = document.querySelectorAll('.nav-top-swiper');
// const infoLinks = document.querySelector('.nav-info-links-container');
// const navBorder = document.querySelector('.nav-categories-wrapper');
// primaryNav.removeAttribute('data-visible', false);
// primaryNav.classList.remove('left-50');
// primaryNav.classList.remove('border-w-1');
// primaryNav.classList.remove('border-color-primary');
// primaryNav.classList.remove('rounded-top');
// allCollection.style.display = "none";
// navBorder.style.borderBottom = "none";
// for(let slide of swipSlide){
//     slide.style.justifyContent = "flex-start";
// }
// infoLinks.style.display = "flex";
// document.querySelectorAll('nav-links-top').forEach(function(listitem){
//     listitem.addEventListener("click", () => {
//         // const topPosition = document.getElementById(listitem.dataset.page).offsetTop - 80;
//         const topPosition = primaryNav(listitem.dataset.page).offsetTop - 80;
//         window.scrollTo({
//         top: topPosition,
//         left: 0,
//         behavior: 'smooth',

        

//         });
//     });
// });


const menCollectionSection = document.querySelector('.men-collection');
const womenCollectionSection = document.querySelector('.women-collection');
const activeBorder = document.querySelector('.nav-wrapper-border');
const menBtn = document.querySelector('.men-section');
const womenBtn = document.querySelector('.women-section');
const menActive = document.querySelector('.men-btn')
const womenActive = document.querySelector('.women-btn')
const mediaQuery = window.matchMedia('(min-width: 1100px')

// const menBtn = document.querySelector('.men-btn');
// const womenBtn = document.querySelector('.women-btn');

menBtn.addEventListener("click", () =>{
    menCollectionSection.style.display = "flex";
    womenCollectionSection.style.display = "none";
    // console.log("MEN-BTN HOVER"); 
    allColl.scrollTo({ top: 0, behavior: 'smooth' });
    activeBorder.style.width = "1rem";
    activeBorder.style.transform = "translateX(88px)";
    // activeBorder.style.transform = "translateX(286px)";


        // menActive.style.borderBottom = "2px solid #fff";
        // womenActive.style.borderBottom = "none";


});
womenBtn.addEventListener("click", () =>{
    womenCollectionSection.style.display = "flex";
    menCollectionSection.style.display = "none";
    // console.log("WOMEN-BTN HOVER"); 
    allColl.scrollTo({ top: 0, behavior: 'smooth' });

    activeBorder.style.width = "1rem"
    activeBorder.style.transform = "translateX(20px)";

        // womenActive.style.borderBottom = "2px solid #fff";
        // menActive.style.borderBottom = "none";

})

// menBtn.addEventListener("mouseover", () =>{
//     console.log("MEN-BTN HOVER");
//     allCollection.style.display = "block";
//     navBackDrop.style.width = "100vw";
//     navBackDrop.style.height = "100vh";
//     menCollectionSection.style.display = "flex";
//     womenCollectionSection.style.display = "none";
// })
// womenBtn.addEventListener("mouseover", () =>{
//     console.log("WOMEN HOVER");
//     // allCollection.style.display = "flex";
//     navBackDrop.style.width = "100vw"
//     navBackDrop.style.height = "100vh"
//     womenCollectionSection.style.display = "flex";
//     menCollectionSection.style.display = "none";
// })
// navBackDrop.addEventListener("mouseover", () =>{
//     console.log("MEN LEAVE HOVER");
//     allCollection.style.display = "none";
//     navBackDrop.style.width = "0vw";
//     navBackDrop.style.height = "0vh";
//     menCollectionSection.style.display = "none";
//     womenCollectionSection.style.display = "none";
// })




// navBackDrop.addEventListener("mouseover", () =>{
//     console.log("MEN LEAVE HOVER");
//     allCollection.style.display = "none";
//     navBackDrop.style.width = "0vw"
//     navBackDrop.style.height = "0vh"
// })
// menSection.addEventListener("mouseenter", () =>{
//     console.log("MEN HOVER");
//     allCollection.style.display = "flex";
// })
// menSection.addEventListener("mouseleave", () =>{
//     console.log("MEN leave HOVER");
//     allCollection.style.display = "none";
// })
// womenSection.addEventListener("mouseenter", () =>{
//     console.log("WOMEN HOVER");
//     allCollection.style.display = "flex";
// })
// navBackDrop.addEventListener("mouseleave", () =>{
//     console.log("WOMEN HOVER");
//     allCollection.style.display = "none";
// })

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.classList.add('active');
        navBackDrop.classList.add('h-full');
        // primaryNav.style.overflow = "scroll";
        primaryNav.style.overflow = "hidden";
        // dropNaviItem.classList.add('drop-navi-items-open');
        // dropNaviItem.classList.add('overlay-mode');
        // primaryNav.classList.add('show');
        document.body.style.overflow = "hidden";

        backgroundToggle.style.width = "93px";
        backgroundToggle.style.transform = "translate(0px, 0px)";
        productWrapper.style.transform = "translate3d(0px, 0px, 0px)";

        // womenActive.style.borderBottom = "2px solid #fff";
        // menActive.style.borderBottom = "none";
        // const categoriesWomen = [... new Set(women.map((item) =>
        //     {return item}))];
        //     let i = 0;
        //     productWrapper.innerHTML = categoriesWomen.map((item) =>
        //     {return productShow(item)})
        // .join('')

        navBackDrop.addEventListener("click", (e) => {
            if(e.target.classList.contains('nav-backdrop')){
                // console.log("Siemka");
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
                navToggle.classList.remove('active');
                navBackDrop.classList.remove('h-full');
                primaryNav.style.overflow = "hidden";


                document.body.style.overflow = "scroll";
                // dropNaviItem.classList.remove('drop-navi-items-open');
            }
        } )

        
        // console.log("TRUE");
    // }else if(visibility === 'true'){
    // }
    // else{
    //     navBackDrop.addEventListener("click", (e) => {
    //         if(e.target.classList.contains('nav-backdrop')){
    //             console.log("Siemka");
    //             primaryNav.setAttribute('data-visible', false);
    //             navToggle.setAttribute('aria-expanded', false);
    //             navToggle.classList.remove('active');
    //         }else{
    //             primaryNav.setAttribute('data-visible', true);
    //             navToggle.setAttribute('aria-expanded', true);
    //             // navToggle.classList.remove('active');
    //         }
    //     } )
    

        // navBackDrop.addEventListener("click", () =>{
        //     if(navBackDrop.classList.contains('nav-backdrop')){
        //         console.log("Siemka");
        //         primaryNav.setAttribute('data-visible', false);
        //         navToggle.setAttribute('aria-expanded', false);
        //         navToggle.classList.remove('active');
        //     }else{
        //         primaryNav.setAttribute('data-visible', true);
        //         navToggle.setAttribute('aria-expanded', true);
        //         // navToggle.classList.remove('active');

        //     }
        // })
    // }
    // }else if(visibility === 'true'){
     
    //     primaryNav.setAttribute('data-visible', false);
    //     navToggle.setAttribute('aria-expanded', false);
    //     // dropNaviItem.classList.remove('drop-navi-items-open');
    //     navToggle.classList.toggle('active');
    //     // primaryNav.classList.remove('show');
    //     // console.log("FALSE");
    }
})

// primaryNav.addEventListener("click", (e) =>{
//     if(e.target.classList.contains('primary-navigation')){
//         return
//     }
// });







window.onscroll = function(){
    let pos = window.pageYOffset;
    darkMode = localStorage.getItem('darkMode');
    let navSection = document.querySelector('#section-navbar')
    if(pos > 50 && darkMode == 'null'){
        document.getElementById('navbar').style.top = '-40px';
        navSection.style.backgroundColor = "rgba(255, 255, 255, .6)";
    }else if(pos > 50 && darkMode == 'enabled'){
            document.getElementById('navbar').style.top = '-40px';
            navSection.style.backgroundColor = "rgba(0, 0, 0, .6)";
        }else if(darkMode == 'null'){
            document.getElementById('navbar').style.top = '0';
            navSection.style.backgroundColor = "var(--navi-background-color)";
        }else if(darkMode == 'enabled'){
            document.getElementById('navbar').style.top = '0';
            navSection.style.backgroundColor = "var(--navi-background-color-darkmode)";
    }
    
}

// window.onload = categoriesWomen;
// window.onload = array;
// window.onload = productsItems;

// window.onload = renderProducts(shopAll);

// window.onscroll = function(){
//     let pos = window.pageYOffset;
//     let navSection = document.querySelector('#section-navbar')
//     if(pos > 50 && darkMode == 'null'){
//         document.getElementById('navbar').style.top = '-40px';
//         navSection.style.backgroundColor = "rgba(255, 255, 255, .6)";
//     }else{
//         document.getElementById('navbar').style.top = '0';
//         navSection.style.backgroundColor = "var(--navi-background-color)";
//     }
// }
// document.addEventListener('DOMContentLoaded', init);

// function init(){
//     let query = window.matchMedia("(min-width: 600px")
    
//     if(query.matches){
//         swiperHero.slidesPevView = "3";
//     }}





/*   SHOP CART */
/*

let cart = [];


function addToCart(a){
    const shopContainer = document.querySelector('#shopping-box');
    // shopContainer.style.display = "block";
    cart.push({...categoriesWomen[a]});
    displayCart();
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a) {
    let j = 0;
    total = 0;
    document.getElementById('shop-number-item').innerHTML = cart.length;
    if(cart.length == 0){
        document.querySelector('#total');
        const shopContainer = document.querySelector('#shopping-box');
        shopContainer.style.display = "none";
    }else{
        document.querySelector('#cart-item').innerHTML = cart.map((items) =>{
            let {price} = items;

            total = total + price;
            document.querySelector('#total').innerHTML = "$" + total.toFixed(2);

            return (
                `<div class = 'cart-item'>
                <div class="shoes-img-box cart-img">
                    <img class="shoes-cover-img" src=""></img>
                </div>   
                <div class="cart-box"> 
                    <h1 class="shoes-name"></h1> 
                    <h2 class="shoes-price"> $ ${price}</h2>
                </div> `
                // <input class="cart-quality-input" type="number" value="1"> 
                +
                "<img src='/icons/shop.svg' alt='' class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></img></div>"
                
            )

        }).join('');
    }
}
*/
