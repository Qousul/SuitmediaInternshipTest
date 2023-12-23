const navbar = document.querySelector('.header');

var lastScrollPos = 0;

window.addEventListener("scroll", ()=>{
    var scrollTop = window.pageYOffset;

    if (scrollTop>lastScrollPos) {
        navbar.style.transition = "all .2s ease";
        navbar.style.transform = "translateY(-100%)";
    }else{
        navbar.style.transition = "all .2s ease";
        navbar.style.transform = "translateY(0)";
    }

    lastScrollPos = scrollTop;


})