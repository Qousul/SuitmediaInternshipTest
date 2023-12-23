document.addEventListener("DOMContentLoaded", function () {
    var heroSection = document.querySelector(".hero-section");

    document.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });
});