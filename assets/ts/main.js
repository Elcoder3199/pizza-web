"use strict";
let carousel = document.querySelector(".carousel");
let arrowBtn = document.querySelectorAll(".slider .container .icon i");
let firstCardWidth = document.querySelector(".container .carousel .card");
arrowBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (document.documentElement.clientWidth > 520) {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth.offsetWidth - 16 : firstCardWidth.offsetWidth + 16;
        }
        else {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth.offsetWidth : firstCardWidth.offsetWidth;
        }
    });
});
let MenuFranchiseItem = document.querySelectorAll(".francihse-menu li a");
let MenuAboutItem = document.querySelectorAll(".about-menu li a");
let FrancihsEmenu = document.querySelector(".francihse-menu");
let showFranchiseMenu = document.getElementById("show-franchise-menu");
let showAboutMenu = document.getElementById("show-about-menu");
let MenuAbout = document.querySelector(".about-menu");
if (document.documentElement.clientWidth > 1120) {
    showAboutMenu.addEventListener("mousemove", () => {
        MenuAbout.classList.add("show");
    });
    showAboutMenu.addEventListener("mouseleave", () => {
        MenuAbout.classList.remove("show");
    });
    MenuAboutItem.forEach(item => {
        item.addEventListener("mousemove", () => {
            MenuAbout.classList.add("show");
        });
        item.addEventListener("mouseleave", () => {
            MenuAbout.classList.remove("show");
        });
    });
    showFranchiseMenu.addEventListener("mousemove", () => {
        FrancihsEmenu.classList.add("show");
    });
    showFranchiseMenu.addEventListener("mouseleave", () => {
        FrancihsEmenu.classList.remove("show");
    });
    MenuFranchiseItem.forEach(item => {
        item.addEventListener("mousemove", () => {
            FrancihsEmenu.classList.add("show");
        });
        item.addEventListener("mouseleave", () => {
            FrancihsEmenu.classList.remove("show");
        });
    });
}
let Links = document.querySelector(".header .links");
let openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", () => {
    Links.classList.toggle("active");
    openMenu.classList.toggle("fa-times");
});
let headingMenu = document.getElementById("heading-menu");
let headingMenuText = "Eat It. Love It. We Guarantee It.";
let i = 0;
let startType = setInterval(() => {
    headingMenu.textContent += headingMenuText[i];
    i++;
    if (i > headingMenuText.length - 1) {
        clearInterval(startType);
    }
}, 140);
if (document.documentElement.clientWidth < 1120) {
    let returnBackArrow = document.querySelector(".return-back");
    returnBackArrow.onclick = () => {
        removeShowFromLinks();
        returnBackArrow.classList.remove("show");
    };
    showFranchiseMenu.addEventListener("click", function () {
        MenuAbout.classList.remove("show");
        FrancihsEmenu.classList.add("show");
        returnBackArrow.classList.add("show");
    });
    showAboutMenu.addEventListener("click", function () {
        removeShowFromLinks();
        MenuAbout.classList.add("show");
        returnBackArrow.classList.add("show");
    });
    openMenu.addEventListener("click", () => removeShowFromLinks());
    function removeShowFromLinks() {
        FrancihsEmenu.classList.remove("show");
        MenuAbout.classList.remove("show");
    }
}
