AOS.init()

var swiper = new Swiper(".event__swiper-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesGroup: 3,
    grabCursor: true,
    centerSlide: true,
    fade: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        650: {
            slidesPerView: 2,
        },

        950: {
            slidesPerView: 3,
        },
    }
})



$(document).ready(() => {
    var nav = $('#navbar')
    var menuBtn = $('#menu_btn')
    var navEl = $('#navbar a')

    menuBtn.on('click', () => {
        nav.toggleClass('navbar__open')

        menuBtn.children('.header__menu-bar').toggleClass('header__menu-bar--open')
    })

    for(let i = 0; i <= navEl.length; i++){
        navEl.on('click', () => {
            nav.removeClass('navbar__open')
            menuBtn.children('.header__menu-bar').removeClass('header__menu-bar--open')
        })
    }
})




