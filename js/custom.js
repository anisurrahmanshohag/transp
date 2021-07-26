$(function() {
    'use strict';


    $('.slk_pic').slick({
        arrows: false,
        fade: true,
        dots: true,
        autoplay: false,
        speed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

    });


    $('.logistic').on('click', function() {
        $('.logi_mat').addClass('tactive'),
            $('.logistic').addClass('tactive'),
            $('.materials_mat').removeClass('tactive'),
            $('.packag').removeClass('tactive'),
            $('.material').removeClass('tactive'),
            $('.Packaging_mat').removeClass('tactive')
    });

    $('.packag').on('click', function() {
        $('.Packaging_mat').addClass('tactive'),
            $('.packag').addClass('tactive'),
            $('.materials_mat').removeClass('tactive'),
            $('.logistic').removeClass('tactive'),
            $('.material').removeClass('tactive'),
            $('.logi_mat').removeClass('tactive')
    });

    $('.material').on('click', function() {
        $('.material').addClass('tactive'),
            $('.materials_mat').addClass('tactive'),
            $('.Packaging_mat').removeClass('tactive'),
            $('.packag').removeClass('tactive'),
            $('.logistic').removeClass('tactive'),
            $('.logi_mat').removeClass('tactive')
    });
    // =================Back to top button Start==================



    $('.pond').click(function() {
        $('html').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function() {
        var scroller = $(this).scrollTop();

        if (scroller > 200) {
            $('.pond').slideDown();
        } else {
            $('.pond').slideUp();
        }
    });
    // =================Back to top button End==================

    $('.comment_slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.comp_slid').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // ====================service details page
    $('.express').on('click', function() {
        $('.express_courier').addClass('proactive'),
            $('.express').addClass('proactive'),
            $('.standard_courier').removeClass('proactive'),
            $('.standard').removeClass('proactive'),
            $('.pallet_courier').removeClass('proactive'),
            $('.pallet').removeClass('proactive'),
            $('.warehouse_courier').removeClass('proactive'),
            $('.warehouse').removeClass('proactive'),
            $('.night_courier').removeClass('proactive'),
            $('.night').removeClass('proactive')

    });

    $('.standard').on('click', function() {
        $('.express_courier').removeClass('proactive'),
            $('.express').removeClass('proactive'),
            $('.standard_courier').addClass('proactive'),
            $('.standard').addClass('proactive'),
            $('.pallet_courier').removeClass('proactive'),
            $('.pallet').removeClass('proactive'),
            $('.warehouse_courier').removeClass('proactive'),
            $('.warehouse').removeClass('proactive'),
            $('.night_courier').removeClass('proactive'),
            $('.night').removeClass('proactive')

    });
    $('.pallet').on('click', function() {
        $('.express_courier').removeClass('proactive'),
            $('.express').removeClass('proactive'),
            $('.standard_courier').removeClass('proactive'),
            $('.standard').removeClass('proactive'),
            $('.pallet_courier').addClass('proactive'),
            $('.pallet').addClass('proactive'),
            $('.warehouse_courier').removeClass('proactive'),
            $('.warehouse').removeClass('proactive'),
            $('.night_courier').removeClass('proactive'),
            $('.night').removeClass('proactive')

    });
    $('.warehouse').on('click', function() {
        $('.express_courier').removeClass('proactive'),
            $('.express').removeClass('proactive'),
            $('.standard_courier').removeClass('proactive'),
            $('.standard').removeClass('proactive'),
            $('.pallet_courier').removeClass('proactive'),
            $('.pallet').removeClass('proactive'),
            $('.warehouse_courier').addClass('proactive'),
            $('.warehouse').addClass('proactive'),
            $('.night_courier').removeClass('proactive'),
            $('.night').removeClass('proactive')

    });
    $('.night').on('click', function() {
        $('.express_courier').removeClass('proactive'),
            $('.express').removeClass('proactive'),
            $('.standard_courier').removeClass('proactive'),
            $('.standard').removeClass('proactive'),
            $('.pallet_courier').removeClass('proactive'),
            $('.pallet').removeClass('proactive'),
            $('.warehouse_courier').removeClass('proactive'),
            $('.warehouse').removeClass('proactive'),
            $('.night_courier').addClass('proactive'),
            $('.night').addClass('proactive')

    });

    // ====================service details page



});



// =================Menu fix Start==================
const header = document.querySelector(".main_menu");
const sectionOne = document.querySelector(".home_intro");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav_scrolled");
            } else {
                header.classList.remove("nav_scrolled");
            }
        });
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// =================Menu fix End==================



// =================scroll slider start================
const faders = document.querySelectorAll(".fade_in");
const sliders = document.querySelectorAll(".slide_in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};



const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
// =================scroll slider End==================