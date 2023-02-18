let languageChange = localStorage.getItem('langChange');
const langChangeToggle = document.querySelector('#language-change');

const navAnnouncment1 = document.querySelector('#nav-announcment-swiper__1');
const navAnnouncment2 = document.querySelector('#nav-announcment-swiper__2');
const navAnnouncment3 = document.querySelector('#nav-announcment-swiper__3');

const womenSection = document.querySelector('.women-section');
const menSection = document.querySelector('.men-section');
const acessoriesSection = document.querySelector('#accesories-section');

// const infoNav = document.querySelector('#info-nav');
const loginNav = document.querySelector('#login-nav');

const enableChangeLang = () => {
    langChangeToggle.innerHTML = 'EN';
    
    navAnnouncment1.innerHTML = "Darmowa Dostawa powżej 150$ oraz 30 Dni Zwrotu";
    navAnnouncment2.innerHTML = "Sprawdz nowe Kolekcje dla Mężczyzn ";
    navAnnouncment3.innerHTML = "Sprawdz Nowe Topowe Wybory dla Kobiet";

    loginNav.innerHTML = "Zaloguj";

    womenSection.innerHTML = "KOBIETA";
    menSection.innerHTML = "MĘŻCZYZNA";
    // acessoriesSection.innerHTML = "AKCESORIA";
    
}
const disableChangeLang = () => {
    langChangeToggle.innerHTML = 'PL';
    
    navAnnouncment1.innerHTML = "Free Domestic Shipping over $150 and 30 Days Returns";
    navAnnouncment2.innerHTML = "Check new Arrivals for Mens";
    navAnnouncment3.innerHTML = "Shop Women's Top Picks";
    
    loginNav.innerHTML = "Login";

    womenSection.innerHTML = "WOMEN";
    menSection.innerHTML = "MEN";
    // acessoriesSection.innerHTML = "ACCESORIES";
}

if(languageChange == 'enabled'){
    enableChangeLang();
}

langChangeToggle.addEventListener("click", () => {
    languageChange = localStorage.getItem('langChange');
    if(languageChange !== 'enabled'){
        enableChangeLang();
        localStorage.setItem('langChange', 'enabled')
    }else{
        disableChangeLang();
        localStorage.setItem('langChange', null);
    }
})