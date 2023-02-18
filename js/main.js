const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navBackDrop = document.querySelector('.nav-backdrop');
const allColl = document.querySelector('.all-collection')
const menCollectionSection = document.querySelector('.men-collection');
const womenCollectionSection = document.querySelector('.women-collection');
const activeBorder = document.querySelector('.nav-wrapper-border');
const menBtn = document.querySelector('.men-section');
const womenBtn = document.querySelector('.women-section');
const menActive = document.querySelector('.men-btn')
const womenActive = document.querySelector('.women-btn')
const mediaQuery = window.matchMedia('(min-width: 1100px')

menBtn.addEventListener("click", () =>{
    menCollectionSection.style.display = "flex";
    womenCollectionSection.style.display = "none";
    allColl.scrollTo({ top: 0, behavior: 'smooth' });
    activeBorder.style.width = "1rem";
    activeBorder.style.transform = "translateX(88px)";
});

womenBtn.addEventListener("click", () =>{
    womenCollectionSection.style.display = "flex";
    menCollectionSection.style.display = "none";
    allColl.scrollTo({ top: 0, behavior: 'smooth' });

    activeBorder.style.width = "1rem"
    activeBorder.style.transform = "translateX(20px)";
})

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.classList.add('active');
        navBackDrop.classList.add('h-full');
        primaryNav.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        backgroundToggle.style.width = "93px";
        backgroundToggle.style.transform = "translate(0px, 0px)";
        productWrapper.style.transform = "translate3d(0px, 0px, 0px)";

    navBackDrop.addEventListener("click", (e) => {
            if(e.target.classList.contains('nav-backdrop')){
                primaryNav.setAttribute('data-visible', false);
                navToggle.setAttribute('aria-expanded', false);
                navToggle.classList.remove('active');
                navBackDrop.classList.remove('h-full');
                primaryNav.style.overflow = "hidden";
                document.body.style.overflow = "scroll";
            }
        } )
    
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
    
};
