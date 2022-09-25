// Hamburger Menu
// This hamburger menu makes extensive use of markup/code shared by ljc-dev at https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const menu = document.querySelector(".navbar ul");
const menuItems = document.querySelectorAll(".menu-item");
const hamburgerButtons = document.querySelector(".hamburger-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

function toggleHamburger(){
    if(menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        closeIcon.style.display = "none";
        hamburgerIcon.style.display = "block";
    } else {
        menu.classList.add("show-menu");
        closeIcon.style.display = "block";
        hamburgerIcon.style.display = "none";
    }
};

menuItems.forEach(
    function(menuItem){
        menuItem.addEventListener("click", toggleHamburger);
    }
)

hamburgerButtons.addEventListener("click", toggleHamburger);




// Image Carousel Feature
// Iamge carousel is based on article by Jemima Abu at https://webdesign.tutsplus.com/tutorials/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734

const slidesContainer = document.querySelector(".slides-container");
const slide = document.querySelector(".slide");
const slideWidth = slide.clientWidth;
const prevButton = document.querySelector("#slide-arrow-previous");
const nextButton = document.querySelector("#slide-arrow-next");

const checkButtons = function() {
    if ((slidesContainer.scrollLeft * 2) > slidesContainer.scrollWidth) {
        nextButton.classList.add("subtle-arrow");
    } else if (slidesContainer.scrollLeft < 25){
        prevButton.classList.add("subtle-arrow");
    } else {
        prevButton.classList.remove("subtle-arrow");
        nextButton.classList.remove("subtle-arrow");
    };
};

nextButton.addEventListener("click", (event) => {
    slidesContainer.scrollLeft += slideWidth;
    setTimeout(checkButtons, 300);
});

prevButton.addEventListener("click", (event) => {
    slidesContainer.scrollLeft -= slideWidth;
    setTimeout(checkButtons, 300);
});




