/*

const womenShopBtn = document.querySelector('#women-shop-btn');
const menShopBtn = document.querySelector('#men-shop-btn');
const productWrapper = document.getElementById('product-swiper-wrapper');
const backgroundToggle = document.querySelector('#background-toggle');



const productShow = (items) =>{
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


let array = shopAll;
// let categories = new Set();
// console.log(array.category);
const productsAll = array.map((items) =>{
    {return items}});


// const productsAll = [... new Set(array.map((items) =>
    let i = 0;
    productWrapper.innerHTML = productsAll.map((items) =>
    {return productShow(items)})
.join('')

const renderCategories = () =>{
    const categories = productsAll.map((item) => item.category);
    // categories.filter(category)
    // console.log(categories);
};
renderCategories() 

const fileredItems = array.filter((item) =>{
    return item.category === "men";
})
// const fileredItemsWomen = array.filter((item) =>{
//     return item.category === "women";
// })
// const fileredItemsWomen = [... new Set(array.filter((item) =>{
//     return item.category === "women";
// }))];
// productWrapper.innerHTML =fileredItemsWomen.map((items) =>
// {return productShow(items)}).join('');

let fileredItemsWomen = array.filter(women =>women.category == "women")

;
// for(let i=0; i<fileredItemsWomen.length;i++){
    
    console.log(fileredItemsWomen);
// }

// console.log(fileredItems);
// console.log(productWrapper);

womenShopBtn.addEventListener("click", ()=>{
    console.log("WOMEN");
    backgroundToggle.style.width = "93px";
    backgroundToggle.style.transform = "translate(0px, 0px)";
    productWrapper.style.transform = "translate3d(0px, 0px, 0px)";
    productWrapper.innerHTML = fileredItemsWomen.map((items) =>
    {return productShow(items)})
    .join('')


  addtocart(fileredItemsWomen);

    //     return productShow(fileredItemsWomen);
    // };
    // })
    // productWrapper.innerHTML = 
    // productWrapper.innerHTML = () =>{
    //     return fileredItemsWomen;

    // }
});

// const categoriesButton = document.querySelectorAll('.button-toggle')

// categoriesButton.forEach((btn) =>{
//     btn.addEventListener("click", (e)=>{
//         const category = e.target.dataset.category;
//         console.log(category);
//     })
// })









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