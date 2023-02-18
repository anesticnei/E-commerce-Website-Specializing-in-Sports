const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.nav-quick-search-item-btn');
const logoNav = document.querySelector('.logo');
const naviWrapper = document.querySelector('.nav-items-wrapper');
const exitSearch = document.querySelector('.exit-search-btn');
const heroSectione = document.querySelector('.hero-section')

searchBtn.addEventListener("click" , () => {
    const visibility = searchInput.getAttribute('data-visible')
    if(visibility === 'false'){
        searchInput.setAttribute('data-visible', true);
        searchBtn.setAttribute('aria-expanded', true);
        searchInput.classList.remove('non-opacity');
        searchBtn.classList.add('non-opacity');
        searchBtn.style.display = "none";
        logoNav.classList.add('non-opacity');
        exitSearch.classList.remove('non-opacity');
        naviWrapper.classList.add('w-full');

    // }else if(visibility === 'true'){
    
    exitSearch.addEventListener("click", () =>{
        searchInput.setAttribute('data-visible', false);
        searchBtn.setAttribute('aria-expanded', false);
        searchInput.classList.add('non-opacity');
        searchBtn.classList.remove('non-opacity');
        searchBtn.style.display = "flex";
        logoNav.classList.remove('non-opacity');
        exitSearch.classList.add('non-opacity');
        naviWrapper.classList.remove('w-full');
        clearInput();
        renderProducts(currentProducts.filter((product) => product.category === "Women"))

        
    })
}})

    heroSectione.addEventListener("click", (f) =>{
        if(!heroSectione.classList.contains('search-input'))
        searchInput.setAttribute('data-visible', false);
        searchBtn.setAttribute('aria-expanded', false);
        searchInput.classList.add('non-opacity');
        searchBtn.classList.remove('non-opacity');
        searchBtn.style.display = "flex";
        logoNav.classList.remove('non-opacity');
        exitSearch.classList.add('non-opacity');
        naviWrapper.classList.remove('w-full');
        clearInput();
        // renderProducts(currentProducts.filter((product) => product.category === "Women"))
    })







function clearInput(){
    if(searchInput.value != ""){
        searchInput.value = "";
    }
}
