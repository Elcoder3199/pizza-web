let carousel = document.querySelector(".carousel");
let arrowBtn = document.querySelectorAll(".slider .container .icon i");
let firstCardWidth = carousel.querySelector(".container .carousel .card").offsetWidth;
arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth - 16: firstCardWidth + 16;
  });
});

// Show Mega Menu 
let showAboutMenu = document.getElementById("show-about-menu"),
 MenuAbout = document.querySelector(".about-menu");
 showAboutMenu.addEventListener("mousemove", ()=> {
   MenuAbout.classList.add("show");
  })
showAboutMenu.addEventListener("mouseleave", ()=>{
  MenuAbout.classList.remove("show");
})

let MenuAboutItem = document.querySelectorAll(".about-menu li a");

MenuAboutItem.forEach(item=>{
  item.addEventListener("mousemove",  ()=> {
    MenuAbout.classList.add("show");
  })
  item.addEventListener("mouseleave",  ()=> {
    MenuAbout.classList.remove("show");
  })
})


let FrancihsEmenu = document.querySelector(".Francihse-menu"),
showFranchiseMenu = document.getElementById("show-franchise-menu");

showFranchiseMenu.addEventListener("mousemove", ()=> {
  FrancihsEmenu.classList.add("show");
  })
  showFranchiseMenu.addEventListener("mouseleave", ()=>{
  FrancihsEmenu.classList.remove("show");
})

let MenuFranchiseItem = document.querySelectorAll(".Francihse-menu li a");

MenuFranchiseItem.forEach(item=>{
  item.addEventListener("mousemove", ()=> {
    FrancihsEmenu.classList.add("show");
  })
  item.addEventListener("mouseleave",  ()=> {
    FrancihsEmenu.classList.remove("show");
  })
})

// Open Menu And Close
let Links = document.querySelector(".header .links")
let openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click", ()=>{
  Links.classList.toggle("active");
  openMenu.classList.toggle("fa-times");
})

// type Machine Effect 
let headingMenu = document.getElementById("heading-menu");
let headingMenuText = "Eat It. Love It. We Guarantee It.";

let i = 0;
let startType = setInterval(() => {
    headingMenu.textContent += headingMenuText[i];
    i++;
    if(i > headingMenuText.length - 1) {
      clearInterval(startType)
  }
}, 140);

startType()


