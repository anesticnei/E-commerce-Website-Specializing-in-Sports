const shopWomen = [
    {
        id: 0,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Olive",
        colors_number: 6,
        price: 659.99,
        picture: "https://cdn.shopify.com/s/files/1/2156/4663/products/OliveTankBra-1_712x894.jpg?v=1663161987",
        // add_button: ,

    },
    {
        id: 1,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 659.99,
        picture: "https://cdn.shopify.com/s/files/1/2156/4663/products/Black-1-18_712x894.jpg?v=1619440922",
        // add_button: ,

    },
    {
        id: 2,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 659.99,
        picture: "https://blog.prettylittlething.com/wp-content/uploads/2021/01/Weight-Training-700x1116.png",
        // add_button: ,

    },
    {
        id: 3,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 659.99,
        picture: "https://media.missguided.com/i/missguided/B1503750_01?fmt=jpeg&fmt.jpeg.interlaced=true&$product-page__main--2x$",
        // add_button: ,

    },
    {
        id: 4,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 659.99,
        picture: "https://cdn.shopify.com/s/files/1/1325/6099/products/DSC06456copy_2048x2048.jpg?v=1664470866",
        // add_button: ,

    },
    {
        id: 5,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://athleta.gap.com/webcontent/0027/392/793/cn27392793.jpg",
        // add_button: ,

    },
    {
        id: 6,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://media3.newlookassets.com/i/newlook/828625070/womens/clothing/womens-activewear/only-play-pink-textured-sports-leggings.jpg?strip=true&qlt=80&w=720",
        // add_button: ,

    },
    {
        id: 7,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://cdn.shopify.com/s/files/1/2156/4663/products/ADANOLA_006_013_712x894.jpg?v=1669031612",
        // add_button: ,

    },
    {
        id: 8,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://cdn.shopify.com/s/files/1/2156/4663/products/221216_ADANOLA_JANUARY_RR_S07_051copy_712x894.jpg?v=1673274846",
        // add_button: ,

    },
    {
        id: 9,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://cdn-img.prettylittlething.com/0/9/7/5/097505b370165adf88ce19614a794bd13bd46bbc_cms3431_1.jpg",
        // add_button: ,

    },
    {
        id: 10,
        product_info_title: "Tank Bra",
        product_info_descr: "Women's High-Impact Seamless Sports Bra",
        color: "Black",
        colors_number: 4,
        price: 64.00,
        picture: "https://cdn-img.prettylittlething.com/f/0/0/4/f00402f771ed67b3bde54309252a97e93d89f5fd_cmm2612_1.jpg",
        // add_button: ,

    },

]



/*  DZIALA ALE NIE JEST PIEKNIE I TYLKO DLA WOMEN 



const womenShopBtn = document.querySelector('#women-shop-btn');
const menShopBtn = document.querySelector('#men-shop-btn');
// const productWrapper = document.getElementById('product-swiper-wrapper');
const backgroundToggle = document.querySelector('#background-toggle');


const productShow = (item ={}) =>{
    return `<div class="swiper-slide item-product flex justify-start flex-shrink ">
                <div class="product-cart flex-column wh-full">
                    <a href="" class="product-link wh-full block"> </a>
                    <div class="top-container relative rounded-half box-shadow-big-rounded clipped aspect-ratio-3_4">
                            <div class="product-images-container wh-full absolute-tl clipped">
                                <div class="product-images-wrapper wh-full">
                                    <div class="product-image-slide absolute-tl wh-full transition-all duration-200 mouseable: block product-image-slide-0">
                                        <img class="wh-full" src="${item.picture}" alt="">
                                    </div>

                                </div>
                            </div>
                            <div class="add-to-cart-btn add-product-box absolute bottom-0 right-0 pad-1rem z-i-1">
                                <button class='add-to-cart-btn add-product-button till-phone-p-04rem rounded-full border-none w-2rem h-2rem bg-dark cursor-pointer' onclick='addtocart("+(i++)+")'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 31.5 31.5">
                                        <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z" transform="translate(0 -2.25)" fill="#fff"/>
                                    </svg>
                                    
                                </button>
                            </div>
                    
                        </div>
                    <div class="bottom-container relative transition-all min-h-7_5rem z-i-10 margin-t-b">
                        <div class="product-info wh-full">
                            <div class="flex items-center flex-wrap color-text-dark font-w-600 text-1rem">${item.product_info_title}</div>
                            <div class="flex items-center flex-wrap  text-0_7rem gap-1vw">
                                <span class="color-text-grey">${item.color}</span>
                                <span class="bg-grey rounded-full padding-inline-0_4 color-text-white">${item.colors_number} Colors</span>
                            </div>
                            <div class="flex items-center flex-wrap color-text-grey font-w-600 text-0_7rem">$ ${item.price}</div>

                        </div>
                    </div>

                    </div>
            </div>
            `
};

// womenShopBtn.addEventListener("click", ()=>{
//     console.log("WOMEN");
//     backgroundToggle.style.width = "93px";
//     backgroundToggle.style.transform = "translate(0px, 0px)";
//     productWrapper.style.transform = "translate3d(0px, 0px, 0px)";

//     const women = shopWomen;
//     const categoriesWomen = [... new Set(women.map((item) =>
//     {return item}))];
//     let i = 0;
//     productWrapper.innerHTML = categoriesWomen.map((item) =>
//     {return productShow(item)}).join('')
//     if(darkMode == 'enabled'){
//         // const cColor = document.querySelector('.color-text-dark')
//         // cColor.classList.remove('color-text-dark');
//         console.log("JEST CZARNO U WOMEN");
//         for(const txtColor of textColor){
//             console.log("ZMIENIAMY WOMEN KOLOR?");
//             // txtColor.style.color = "#FFF";
//             // txtColor.classList.add('changecolor');
            
//         }
//     }}
//     );

// menShopBtn.addEventListener("click", ()=>{
//     console.log("MEN");
//     backgroundToggle.style.width = "74px";
//     backgroundToggle.style.transform = "translate(92px, 0px)";
//     productWrapper.style.transform = "translate3d(0px, 0px, 0px)";
    
//     const men = shopMen;
//     const categoriesMen = [... new Set(men.map((item) =>
//         {return item}))];
//         let i = 0;
//         productWrapper.innerHTML = categoriesMen.map((item) =>
//         {return productShow(item)}).join('')
//         if(darkMode == 'enabled'){
//             // const cColor = document.querySelector('.color-text-dark')
//             // cColor.classList.remove('color-text-dark');
//             console.log("JEST CZARNO U MEN");
//             for(const txtColor of textColor){
//                 console.log("ZMIENIAMY KOLOR?");
//                 // txtColor.style.color = "#FFF";
//                 // txtColor.classList.add('changecolor');
                
//             }
//         }
    
//     }
//     );

//     if(menShopBtn == true && darkMode == 'enabled'){
//         console.log("JEST CZARNO U MEN");
//     }




// const categoriesWomen = [... new Set(women.map((item) =>
//     {return item}))];
//     let i = 0;
//     productWrapper.innerHTML = categoriesWomen.map((item) =>
//     {return productShow(item)})
// .join('')



// const categories = [... new Set(women.map((item) =>
//     {return item}))];
//     let i = 0;
//     productWrapper.innerHTML = categories.map((item) =>
//     {return productShow(item)})
// .join('')

const product = shopWomen;

const categories = [... new Set(product.map((item) =>
    {return item}))]
    let i = 0;
    document.getElementById('product-swiper-wrapper').innerHTML = categories.map((item) =>
{
    let {picture, product_info_title, price, color, colors_number} = item;
    return(
        `<div class="shoes-box swiper-slide item-product flex justify-start flex-shrink">
        <div class="product-cart flex-column wh-full">
            <a href="" class="product-link wh-full block"> </a>
                <div class="top-container relative rounded-half box-shadow-big-rounded clipped aspect-ratio-3_4">
                    <div class="product-images-container wh-full absolute-tl clipped">
                        <div class="product-images-wrapper wh-full">
                            <div class="product-image-slide absolute-tl wh-full transition-all duration-200 mouseable: block product-image-slide-0">
                                <img class="wh-full" src="${picture}" alt=""></img>
                            </div>  
                        </div>
                    </div>
            
                <div class="add-to-cart-btn add-product-box absolute bottom-0 right-0 pad-1rem z-i-1">` +
                    "<button class = 'add-to-cart-btn add-product-button till-phone-p-04rem rounded-full border-none w-2rem h-2rem bg-dark cursor-pointer' onclick='addtocart("+(i++)+")'><svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 31.5 31.5'><path id='Icon_awesome-plus' data-name='Icon awesome-plus' d='M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z' transform='translate(0 -2.25)' fill='#fff'/></svg></button>" +
                `</div>
                            </div>
                                        <div class="bottom-container relative transition-all min-h-7_5rem z-i-10 margin-t-b">
                <div class="product-info wh-full">

                                <div class="flex items-center flex-wrap color-text-dark font-w-600 text-1rem">${product_info_title}</div>

                                <div class="flex items-center flex-wrap  text-0_7rem gap-1vw">
                                                    <span class="color-text-grey">${color}</span>
                                                    <span class="bg-grey rounded-full padding-inline-0_4 color-text-white">${colors_number} Colors</span>
                                </div>



        <h2 class="flex items-center flex-wrap color-text-grey font-w-600 text-0_7rem"> $ ${price}</h2>` +
        `   </div>
      </div>
    
 </div>
</div>`
       
    )
}).join('')


let cart = [];

function addtocart(a){
    const sideBar = document.getElementById('shopping-box');
    sideBar.style.display = "block";
    cart.push({...categories[a]});
    // cart.push({...categoriesMen[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();

}

function displaycart(a){
    let j = 0;
    total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total');
        const sideBar = document.getElementById('shopping-box');
        sideBar.style.display = "none";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>{
            let {picture, product_info_title, price} = items;

            // total = total + (price * quality);
            total = total + price;

            document.getElementById('total').innerHTML = "$" + total.toFixed(2);
            // let quantityElement = document.querySelector('.cart-quality-input')[0];
            // let quality = quantityElement.value;
            // updateCartTotal();
            return(
                `<div class = 'cart-item'>
                <div class="shoes-img-box cart-img">
                    <img class="shoes-cover-img" src="${picture}"></img>
                </div>   
                <div class="cart-box"> 
                    <h1 class="shoes-name">${product_info_title}</h1> 
                    <h2 class="shoes-price"> $ ${price}</h2>
                </div> `z
                +
                "<img src='/icons/shop.svg' alt='' class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></img></div>"
                
            )
            
        }).join('');

        }
    }

    */





    /* KOLEJNE PROBY */

    /*
    const womenShopBtn = document.querySelector('#women-shop-btn');
const menShopBtn = document.querySelector('#men-shop-btn');
const productWrapper = document.getElementById('product-swiper-wrapper');
const backgroundToggle = document.querySelector('#background-toggle');


// const shopProducts = {
//     women: [{
//         id: 0,
//         product_info_title: "Tank Bra",
//         product_info_descr: "Women's High-Impact Seamless Sports Bra",
//         color: "Olive",
//         colors_number: 6,
//         price: 659.99,
//         picture: "https://cdn.shopify.com/s/files/1/2156/4663/products/OliveTankBra-1_712x894.jpg?v=1663161987",
//     },
//     ],
// }


// shopProducts.forEach(women) = [...new ]



// const productShow = (item ={}) =>{
//     return `<div class="swiper-slide item-product flex justify-start flex-shrink ">
//                 <div class="product-cart flex-column wh-full">
//                     <a href="" class="product-link wh-full block"> </a>
//                     <div class="top-container relative rounded-half box-shadow-big-rounded clipped aspect-ratio-3_4">
//                             <div class="product-images-container wh-full absolute-tl clipped">
//                                 <div class="product-images-wrapper wh-full">
//                                     <div class="product-image-slide absolute-tl wh-full transition-all duration-200 mouseable: block product-image-slide-0">
//                                         <img class="wh-full" src="${item.picture}" alt="">
//                                     </div>

//                                 </div>
//                             </div>
//                             <div class="add-to-cart-btn add-product-box absolute bottom-0 right-0 pad-1rem z-i-1">
//                                 <button class='add-to-cart-btn add-product-button till-phone-p-04rem rounded-full border-none w-2rem h-2rem bg-dark cursor-pointer' onclick='addtocart("+(i++)+")'>
//                                     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 31.5 31.5">
//                                         <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z" transform="translate(0 -2.25)" fill="#fff"/>
//                                     </svg>
                                    
//                                 </button>
//                             </div>
                    
//                         </div>
//                     <div class="bottom-container relative transition-all min-h-7_5rem z-i-10 margin-t-b">
//                         <div class="product-info wh-full">
//                             <div class="flex items-center flex-wrap color-text-dark font-w-600 text-1rem">${item.product_info_title}</div>
//                             <div class="flex items-center flex-wrap  text-0_7rem gap-1vw">
//                                 <span class="color-text-grey">${item.color}</span>
//                                 <span class="bg-grey rounded-full padding-inline-0_4 color-text-white">${item.colors_number} Colors</span>
//                             </div>
//                             <div class="flex items-center flex-wrap color-text-grey font-w-600 text-0_7rem">$ ${item.price}</div>

//                         </div>
//                     </div>

//                     </div>
//             </div>
//             `
// };



// menShopBtn.addEventListener("click", ()=>{
//     console.log("MEN");
//     backgroundToggle.style.width = "74px";
//     backgroundToggle.style.transform = "translate(92px, 0px)";
//     productWrapper.style.transform = "translate3d(0px, 0px, 0px)";
    
//     const men = shopMen;
//     const categoriesMen = [... new Set(men.map((item) =>
//         {return item}))];
//         let i = 0;
//         productWrapper.innerHTML = categoriesMen.map((item) =>
//         {return productShow(item)}).join('')
//         if(darkMode == 'enabled'){
//             // const cColor = document.querySelector('.color-text-dark')
//             // cColor.classList.remove('color-text-dark');
//             console.log("JEST CZARNO U MEN");
//             for(const txtColor of textColor){
//                 console.log("ZMIENIAMY KOLOR?");
//                 // txtColor.style.color = "#FFF";
//                 // txtColor.classList.add('changecolor');
                
//             }
//         }
    
//     }
//     );

//     if(menShopBtn == true && darkMode == 'enabled'){
//         console.log("JEST CZARNO U MEN");
//     }

const productShow = (items ={}) =>{
    return(
        `<div class="shoes-box swiper-slide item-product flex justify-start flex-shrink">
        <div class="product-cart flex-column wh-full">
            <a href="" class="product-link wh-full block"> </a>
                <div class="top-container relative rounded-half box-shadow-big-rounded clipped aspect-ratio-3_4">
                    <div class="product-images-container wh-full absolute-tl clipped">
                        <div class="product-images-wrapper wh-full">
                            <div class="product-image-slide absolute-tl wh-full transition-all duration-200 mouseable: block product-image-slide-0">
                                <img class="wh-full" src="${items.picture}" alt=""></img>
                            </div>  
                        </div>
                    </div>` +
            
                "<div class='add-to-cart-btn add-product-box absolute bottom-0 right-0 pad-1rem z-i-1 cursor-pointer' onclick='addtocart("+(i++)+")'>" +
                    `<button class = 'add-to-cart-btn add-product-button till-phone-p-04rem rounded-full border-none w-2rem h-2rem bg-dark cursor-pointer'><svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 31.5 31.5'><path id='Icon_awesome-plus' data-name='Icon awesome-plus' d='M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z' transform='translate(0 -2.25)' fill='#fff'/></svg></button>
                </div>
                            </div>
                                        <div class="bottom-container relative transition-all min-h-7_5rem z-i-10 margin-t-b">
                <div class="product-info wh-full">

                                <div class="flex items-center flex-wrap color-text-dark font-w-600 text-1rem">${items.product_info_title}</div>

                                <div class="flex items-center flex-wrap  text-0_7rem gap-1vw">
                                                    <span class="color-text-grey">${items.color}</span>
                                                    <span class="bg-grey rounded-full padding-inline-0_4 color-text-white">${items.colors_number} Colors</span>
                                </div>



        <h2 class="flex items-center flex-wrap color-text-grey font-w-600 text-0_7rem"> $ ${items.price}</h2>` +
        `   </div>
      </div>
    
 </div>
</div>`
    )
};


const array = shopAll;
// let categories = new Set();
// console.log(array.category);

const productsAll = [... new Set(array.map((items) =>
    {return items}))];
    let i = 0;
    productWrapper.innerHTML = productsAll.map((items) =>
    {return productShow(items)})
.join('')

const renderCategories = () =>{
    const categories = productsAll.map((item) => item.category);
    // categories.filter(category)
    console.log(categories);
};
renderCategories() 


// const categoriesButton = document.querySelectorAll('.button-toggle')

// categoriesButton.forEach((btn) =>{
//     btn.addEventListener("click", (e)=>{
//         const category = e.target.dataset.category;
//         console.log(category);
//     })
// })








// const categoriesMen = [... new Set(men.map((item) =>
//     {return item}))];
//     let j = 0;
//     productWrapper.innerHTML = categoriesMen.map((item) =>
//     {return productShow(item)})
// .join('')



// const categories = [... new Set(women.map((item) =>
//     {return item}))];
//     let i = 0;
//     productWrapper.innerHTML = categories.map((item) =>
//     {return productShow(item)})
// .join('')







// womenShopBtn.addEventListener("click", ()=>{
//     console.log("WOMEN");
//     backgroundToggle.style.width = "93px";
//     backgroundToggle.style.transform = "translate(0px, 0px)";
//     productWrapper.style.transform = "translate3d(0px, 0px, 0px)";

//     const women = shopWomen;
//     const categoriesWomen = [... new Set(women.map((item) =>
//     {return item}))];
//     let i = 0;
//     productWrapper.innerHTML = categoriesWomen.map((item) =>
//     {return productShow(item)}).join('')
//     // if(darkMode == 'enabled'){
//     //     // const cColor = document.querySelector('.color-text-dark')
//     //     // cColor.classList.remove('color-text-dark');
//     //     console.log("JEST CZARNO U WOMEN");
//     //     for(const txtColor of textColor){
//     //         console.log("ZMIENIAMY WOMEN KOLOR?");
//     //         // txtColor.style.color = "#FFF";
//     //         // txtColor.classList.add('changecolor');
            
//     //     }
//     // }
// }
//     );

    // menShopBtn.addEventListener("click", ()=>{
    // console.log("MEN");
    // backgroundToggle.style.width = "74px";
    // backgroundToggle.style.transform = "translate(92px, 0px)";
    // productWrapper.style.transform = "translate3d(0px, 0px, 0px)";
    // // productWrapper.innerHTML = productsAll.filter(men);
    // // productWrapper.innerHTML = [... new Set(array.map((item) =>
    // // {return item}))];
    // //     productWrapper.innerHTML = array.map((item) =>
    // // {return productShow(item)})
    // // .join('')
    // });

    // womenShopBtn.addEventListener("click", ()=>{
    // console.log("WOMEN");
    // backgroundToggle.style.width = "93px";
    // backgroundToggle.style.transform = "translate(0px, 0px)";
    // productWrapper.style.transform = "translate3d(0px, 0px, 0px)";
    // // productWrapper.innerHTML = productsAll.filter(women);
    // });



// const product = shopWomen;

// const categories = [... new Set(product.map((item) =>
//     {return item}))]
//     let i = 0;
//     document.getElementById('product-swiper-wrapper').innerHTML = categories.map((item) =>
// {
//     let {picture, product_info_title, price, color, colors_number} = item;
//     return(
//         `<div class="shoes-box swiper-slide item-product flex justify-start flex-shrink">
//         <div class="product-cart flex-column wh-full">
//             <a href="" class="product-link wh-full block"> </a>
//                 <div class="top-container relative rounded-half box-shadow-big-rounded clipped aspect-ratio-3_4">
//                     <div class="product-images-container wh-full absolute-tl clipped">
//                         <div class="product-images-wrapper wh-full">
//                             <div class="product-image-slide absolute-tl wh-full transition-all duration-200 mouseable: block product-image-slide-0">
//                                 <img class="wh-full" src="${picture}" alt=""></img>
//                             </div>  
//                         </div>
//                     </div>
            
//                 <div class="add-to-cart-btn add-product-box absolute bottom-0 right-0 pad-1rem z-i-1">` +
//                     "<button class = 'add-to-cart-btn add-product-button till-phone-p-04rem rounded-full border-none w-2rem h-2rem bg-dark cursor-pointer' onclick='addtocart("+(i++)+")'><svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 31.5 31.5'><path id='Icon_awesome-plus' data-name='Icon awesome-plus' d='M29.25,14.625H19.125V4.5a2.25,2.25,0,0,0-2.25-2.25h-2.25a2.25,2.25,0,0,0-2.25,2.25V14.625H2.25A2.25,2.25,0,0,0,0,16.875v2.25a2.25,2.25,0,0,0,2.25,2.25H12.375V31.5a2.25,2.25,0,0,0,2.25,2.25h2.25a2.25,2.25,0,0,0,2.25-2.25V21.375H29.25a2.25,2.25,0,0,0,2.25-2.25v-2.25A2.25,2.25,0,0,0,29.25,14.625Z' transform='translate(0 -2.25)' fill='#fff'/></svg></button>" +
//                 `</div>
//                             </div>
//                                         <div class="bottom-container relative transition-all min-h-7_5rem z-i-10 margin-t-b">
//                 <div class="product-info wh-full">

//                                 <div class="flex items-center flex-wrap color-text-dark font-w-600 text-1rem">${product_info_title}</div>

//                                 <div class="flex items-center flex-wrap  text-0_7rem gap-1vw">
//                                                     <span class="color-text-grey">${color}</span>
//                                                     <span class="bg-grey rounded-full padding-inline-0_4 color-text-white">${colors_number} Colors</span>
//                                 </div>



//         <h2 class="flex items-center flex-wrap color-text-grey font-w-600 text-0_7rem"> $ ${price}</h2>` +
//         `   </div>
//       </div>
    
//  </div>
// </div>`
       
//     )
// }).join('')


let cart = [];

function addtocart(a){
    const sideBar = document.getElementById('shopping-box');
    sideBar.style.display = "block";
    cart.push({...array[a]});
    // cart.push({...categoriesMen[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();

}

function displaycart(a){
    let j = 0;
    total = 0;
    document.getElementById('count').innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total');
        const sideBar = document.getElementById('shopping-box');
        sideBar.style.display = "none";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) =>{
            let {picture, product_info_title, price} = items;

            // total = total + (price * quality);
            total = total + price;

            document.getElementById('total').innerHTML = "$" + total.toFixed(2);
            // let quantityElement = document.querySelector('.cart-quality-input')[0];
            // let quality = quantityElement.value;
            // updateCartTotal();
            return(
                `<div class = 'cart-item relative'>
                <div class="shoes-img-box cart-img product-image-slide wh-full transition-all duration-200 mouseable: block product-image-slide-0">
                    <img class="shoes-cover-img wh-full" src="${picture}"></img>
                </div>   
                <div class="cart-box"> 
                    <h1 class="shoes-name">${product_info_title}</h1> 
                    <h2 class="shoes-price"> $ ${price}</h2>
                </div> `
                +
                "<img src='/icons/shop.svg' alt='' class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></img></div>"
                
            )
            
        }).join('');

        }
    }

    */