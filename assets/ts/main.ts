let carousel = document.querySelector(".carousel") as HTMLElement;
let arrowBtn = document.querySelectorAll(".slider .container .icon i");
let firstCardWidth = document.querySelector(".container .carousel .card") as HTMLElement;

// slider working
arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (document.documentElement.clientWidth > 520) {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth.offsetWidth - 16 : firstCardWidth.offsetWidth + 16;
    } else {
      carousel.scrollLeft += btn.id === "left" ? -firstCardWidth.offsetWidth : firstCardWidth.offsetWidth;
    }
  });
});

// Show Mega Menu 
let MenuFranchiseItem = document.querySelectorAll(".francihse-menu li a");
let MenuAboutItem = document.querySelectorAll(".about-menu li a");
let FrancihsEmenu = document.querySelector(".francihse-menu") as HTMLElement;
let showFranchiseMenu = document.getElementById("show-franchise-menu") as HTMLElement;
let showAboutMenu = document.getElementById("show-about-menu") as HTMLElement;
let MenuAbout = document.querySelector(".about-menu") as HTMLElement;

if (document.documentElement.clientWidth > 1120) {
  showAboutMenu.addEventListener("mousemove", () => {
    MenuAbout.classList.add("show");
  })
  showAboutMenu.addEventListener("mouseleave", () => {
    MenuAbout.classList.remove("show");
  })

  // When hover on about menu links add show class
  MenuAboutItem.forEach(item => {
    item.addEventListener("mousemove", () => {
      MenuAbout.classList.add("show");
    })
    item.addEventListener("mouseleave", () => {
      MenuAbout.classList.remove("show");
    })
  })


  showFranchiseMenu.addEventListener("mousemove", () => {
    FrancihsEmenu.classList.add("show");
  })
  showFranchiseMenu.addEventListener("mouseleave", () => {
    FrancihsEmenu.classList.remove("show");
  })

  // When hover on Franchise menu links add show class
  MenuFranchiseItem.forEach(item => {
    item.addEventListener("mousemove", () => {
      FrancihsEmenu.classList.add("show");
    })
    item.addEventListener("mouseleave", () => {
      FrancihsEmenu.classList.remove("show");
    })
  })

}

// Open Menu And Close
let Links = document.querySelector(".header .links") as HTMLElement;
let openMenu = document.getElementById("open-menu") as HTMLElement;
openMenu.addEventListener("click", () => {
  Links.classList.toggle("active");
  openMenu.classList.toggle("fa-times");
})

// type Machine Effect 
let headingMenu = document.getElementById("heading-menu") as HTMLElement;
let headingMenuText: string = "Eat It. Love It. We Guarantee It.";

let i = 0;
let startType = setInterval(() => {
  headingMenu.textContent += headingMenuText[i];
  i++;
  if (i > headingMenuText.length - 1) {
    clearInterval(startType)
  }
}, 140);

if (document.documentElement.clientWidth < 1120) {
  let returnBackArrow: any = document.querySelector(".return-back");

  // when click on this the show class will removing from about francise menu
  returnBackArrow.onclick = () => {
    removeShowFromLinks();
    returnBackArrow.classList.remove("show");
  }

  // add class show to franchise menu
  showFranchiseMenu.addEventListener("click", function () {
    MenuAbout.classList.remove("show");
    FrancihsEmenu.classList.add("show")
    returnBackArrow.classList.add("show");
  })

  // add class show to about menu
  showAboutMenu.addEventListener("click", function () {
    removeShowFromLinks();
    MenuAbout.classList.add("show");
    returnBackArrow.classList.add("show");
  })

  openMenu.addEventListener("click", () => removeShowFromLinks())

  // remove show class from about and francise menu
  function removeShowFromLinks() {
    FrancihsEmenu.classList.remove("show")
    MenuAbout.classList.remove("show");
  }

}
