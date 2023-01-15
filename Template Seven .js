// navigition Bar
let closeIcon = document.querySelector("#menu-bar i");
let navIcon = document.getElementById("menu-bar");

let navColumn = document.querySelector(".header-3 .nav");




navIcon.addEventListener("click", function() {
    closeIcon.classList.toggle("fa-times")
    navColumn.classList.toggle("active")
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// CountDown

let CountDownDate = new Date("Dec 31 , 2023 23:59:59").getTime();

let counter = setInterval(() => {

    //  Get date Now
    let dateNow = new Date().getTime();
    // Finde The date differnt betwewn Now date and CountDown Date
    let diffDate = CountDownDate - dateNow;

    // Get Time unite
    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));


    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let secounds = Math.floor(diffDate % (1000 * 60) / (1000));

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes
    document.querySelector(".secounds").innerHTML = secounds

}, 1000)

// click to top button

let scrollBtn = document.querySelector(".scrool-totop")
let bannerContainer = document.querySelector(".banner-container ")


// window.onload = function() {
//     if (window.scrollY >= 300) {
//         scrollBtn.style.display = "block"
//     } else {
//         scrollBtn.style.display = "none"
//     }
// }

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
        scrollBtn.style.display = "block"
    } else {
        scrollBtn.style.display = "none"
    }
    scrollBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0

        });
    });
});

//  validition Form


let form = document.getElementById("form")
let Name = document.getElementById("Name")
let password = document.getElementById("password")
let errorElements = document.querySelector(".error")

form.addEventListener("submit", e => {

    let Messages = []
    if (Name.value === "" || Name.value == null) {
        Messages.push("Name is Requaried")
    }
    if (password.value.length <= 8) {
        Messages.push("password Must  be longer than 8 Charchters")
    }
    if (password.value.length > 20) {
        Messages.push("password Must  be longer than 8 Charchters")
    }
    if (Messages.length > 0) {
        e.preventDefault()
        errorElements.innerHTML = Messages.join(",")
    }
})

console.log(Name)