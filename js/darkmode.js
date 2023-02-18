

let darkMode = localStorage.getItem('darkMode');
const shopSectionReload = document.querySelector('#shop-section');
const dakrModeToggle = document.querySelector('#darkmode-change-icon');
const darkModeIcon = document.querySelector('.dark-mode-icon');
const langChange = document.querySelector('#language-change');
const navWrapper = document.querySelector('.nav-categories-wrapper');
const heroWrapper = document.querySelectorAll('.hero-content-wrapper');
const aref = document.querySelectorAll('.aref');
const allCollection = document.querySelector('.all-collection');
const navSection = document.querySelector('.section-navbar');
const navTextAnnouncment = document.querySelectorAll('.nav-top-announcment');
const searchIcon = document.querySelector('.search-icon');
const shopIcon = document.querySelector('.shop-item-link');
const menuIcon = document.querySelectorAll('.hamburger-icon span');
const logoText = document.querySelector('.logo');
let textColor = document.querySelectorAll('.color-text-dark');
// const colorText = document.querySelector('.color-text-white')

const instaIcon = document.querySelector('.insta')
const fbIcon = document.querySelector('.fb')
const tiktokIcon = document.querySelector('.tiktok')
const twittIcon = document.querySelector('.twitt')
const ytbIcon = document.querySelector('.ytb')

const helpIcon = document.querySelector('.help');
const infoIcon = document.querySelector('.info');
const shippingIcon = document.querySelector('.shipping');
const trackIcon = document.querySelector('.track')
const returnIcon = document.querySelector('.return');
const aboutIcon = document.querySelector('.about');
const ourshopIcon = document.querySelector('.ourshop');
const signinIcon = document.querySelector('.signin');









const productsToggle = document.querySelector('.products-toggle');
const bgToggle = document.querySelector('.bg-button-toggle');
const infoLinks = document.querySelectorAll('.info-links');
const btnToggle = document.querySelectorAll('.button-toggle');
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    // langChange.classList.add('language-item-darkmode');
    darkModeIcon.classList.add('darkmode-icon-toggle');
    // darkModeIcon.src = "/icons/lightmode.png"
    // navWrapper.style.backgroundColor = "var(--body-background-color-darkmode)"
    navWrapper.style.backgroundColor = "rgba(0, 0, 0, .0)"
    // navWrapper.style.color = "var(--primary-color-darkmode)";
    navSection.style.backgroundColor = "var(--navi-background-color-darkmode)"
    navSection.style.borderColor = "var(--border-box-secoundary-dark)";
    searchIcon.style.fill = "#fff";
    logoText.style.color = "var(--primary-color-darkmode)"
    productsToggle.classList.remove('bg-whitemode');
    bgToggle.style.backgroundColor = "#464646";

    fbIcon.src="/icons/social-media/facebook.svg";
    ytbIcon.src="/icons/social-media/youtube.svg";
    instaIcon.src="/icons/social-media/instagram.svg";
    tiktokIcon.src="/icons/social-media/tiktok.svg";
    twittIcon.src="/icons/social-media/twitter.svg";

    helpIcon.src="/icons/help.svg";
    infoIcon.src="/icons/info.svg";
    aboutIcon.src="/icons/info.svg";
    shippingIcon.src="/icons/shipping.svg";
    returnIcon.src="/icons/return.svg" 
    trackIcon.src="/icons/track.svg";
    signinIcon.src="/icons/signin.svg"
    ourshopIcon.src="/icons/ourshops.svg";

    for(let txtClr of textColor){
        // txtClr.classList.toggle('changecolor');
        txtClr.style.color = "#F4F4F4"
    }
    for(const mIcon of menuIcon){
        mIcon.style.background = "var(--primary-color-darkmode)";
    }
    shopIcon.src = "/icons/shopdarkmode-icon.svg";
    for(const textAnn of navTextAnnouncment){
        textAnn.style.color = "var(--sub-color-darkmode)";
    }
    
    // langChange.style.color = "var(--primary-color-darkmode)";
    allCollection.classList.remove('bg-whitemode');
    allCollection.classList.add('bg-darkmode');
    
    // for(const ar of aref){
    //     ar.style.color = "var(--primary-color-darkmode)";
    // }
    for(const hero of heroWrapper){
        hero.classList.remove('border-color-secoundary');
        hero.classList.add('border-color-secoundary-dark');
    }
    for(const iLink of infoLinks){
        iLink.style.color = "var(--primary-color-darkmode)"
    }
    for(const bTgl of btnToggle){
        bTgl.style.color = "var(--primary-color-darkmode)"
    }

}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    darkModeIcon.classList.remove('darkmode-icon-toggle');
    // darkModeIcon.src = "/icons/moon2.png"
    // navWrapper.style.backgroundColor = "var(--body-background-color)"
    navWrapper.style.backgroundColor = "rgba(255, 255, 255, .1)"
    // navWrapper.style.color = "var(--primary-color)";
    navSection.style.backgroundColor = "var(--navi-background-color)";
    searchIcon.style.fill = "#0F0F0F";
    logoText.style.color = "var(--primary-color)"
    productsToggle.classList.add('bg-whitemode');
    bgToggle.style.backgroundColor = "#AFAFAF";

    instaIcon.src="/icons/social-media/instagramdark.svg";
    tiktokIcon.src="/icons/social-media/tiktokdark.svg";
    twittIcon.src="/icons/social-media/twitterdark.svg";
    ytbIcon.src="/icons/social-media/youtubedark.svg";
    fbIcon.src="/icons/social-media/facebookdark.svg";



    helpIcon.src="/icons/helpdark.svg";
    infoIcon.src="/icons/infodark.svg";
    aboutIcon.src="/icons/infodark.svg";
    shippingIcon.src="/icons/shippingdark.svg";
    returnIcon.src="/icons/returndark.svg" 
    trackIcon.src="/icons/trackdark.svg";
    signinIcon.src="/icons/signindark.svg"
    ourshopIcon.src="/icons/ourshopsdark.svg";

    for(const mIcon of menuIcon){
        mIcon.style.background = "var(--primary-color)";
    }
    shopIcon.src = "/icons/shop.svg";
    for(const textAnn of navTextAnnouncment){
        textAnn.style.color = "var(--primary-color)";
    }
    for(let txtClr of textColor){
        // txtClr.classList.toggle('changecolor');
        txtClr.style.color = "#1A1A1A"
    }
    
    navSection.style.borderColor = "var(--border-box-primary-dark)";
    // langChange.style.color = "var(--primary-color)";
    allCollection.classList.add('bg-whitemode');
    allCollection.classList.remove('bg-darkmode');
    // for(const ar of aref){
    //     ar.style.color = "var(--primary-color)";
    // }
    
    // navWrapper.classList.remove('color-onwhite');
    for(const hero of heroWrapper){
        hero.classList.remove('border-color-secoundary-dark');
        hero.classList.add('border-color-secoundary');
    }
    
        for(const iLink of infoLinks){
            iLink.style.color = "var(--primary-color)"
        }
    for(const bTgl of btnToggle){
        bTgl.style.color = "var(--primary-color)"
    }
}
if (darkMode == 'enabled'){
    enableDarkMode();    
}
dakrModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        localStorage.setItem('darkMode', 'enabled');
        // $('#shop-section').load(location.href +  "#shop-section");
        // shopSectionReload.load(location.href +  shopSectionReload);
        // shopSectionReload.reload(currentProducts)
        // location.reload(currentProducts)
        location.reload(shopSectionReload)
        // $(shopSectionReload).reload(shopSectionReload)
        // shopSectionReload.reload;
        // location.reload = renderProducts(currentProducts.filter((product) => product.category === "Women"));
        // $(shopSectionReload).reload
    }else{
        disableDarkMode();
        localStorage.setItem('darkMode', null);
        // $('#shop-section').load(location.href +  "#shop-section");
        // shopSectionReload.load(location.href +  shopSectionReload);
        // shopSectionReload.reload(currentProducts)
        // $(shopSectionReload).reload
        location.reload(shopSectionReload);

        // location.reload(currentProducts)
        // location.reload = renderProducts(currentProducts.filter((product) => product.category === "Women"));
        // shopSectionReload.reload;
    }
})

// TAB DODAC DO RZECXZY RZEBY WYSWIETLALY CO TO JEST?