import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


document.addEventListener("DOMContentLoaded", function () {
    window.onpopstate = function (e) {
        if (e.state !== null) {
        } else {
            if (window.location.href.substr(window.location.href.length - 1) != "#") {
                location.reload();
            }
        }
    }
    var loading_progress = 0;
    var i = 1;
    var error_tel = document.querySelector(".error-tel");
    var error_email = document.querySelector(".error-email");
    var error_name = document.querySelector(".error-name");

    gsap.set('.nav-list', { y: -70, opacity: 0 })
    gsap.set('.hero-title-col ', { x: 100, opacity: 0 })
    gsap.set('.hero-col-image', { x: -100, opacity: 0 })
    gsap.set('.burger', { x: '-100vw' })


    var blist_item = document.querySelectorAll(".blist-item");
    var footer_link = document.querySelectorAll(".footer-link");
    var footer_link = document.querySelectorAll(".footer-link");
    var burger = document.querySelector(".burger-icon");
    var hero_col_image = document.querySelector(".hero-col-image");
    var hero_title_col = document.querySelector(".hero-title-col");
    var burger_menu = document.querySelector(".burger");
    burger.addEventListener("click", (e) => {
        burger_menu.classList.add("--active");
        burger.style.display = "none";
        var width = window.innerWidth;
        if (width > 700) {
            gsap.to(".hero-col-image", {
                x: "100vw", duration: 1, ease: "none",
            })
        }
        checkwidth();
        hero_title_col.classList.add("burger-active");
    })
    var header_back = document.querySelector(".header-back");
    header_back.addEventListener("click", (e) => {
        close_burger();
    })
    function close_burger() {
        burger_menu.classList.remove("--active");
        burger.style.display = "block";
        hero_title_col.classList.remove("burger-active");
        checkwidth();
        var width = window.innerWidth;
        if (width > 700) {

            gsap.to(".hero-col-image", {
                x: 0, duration: 1, ease: "none",
            })
        }
        document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
    }
    var footer_btn = document.querySelector(".footer-btn");
    footer_btn.addEventListener("click", (e) => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
    var hero_btn = document.querySelector(".hero-btn");
    var advantages = document.querySelector(".advantages").scrollHeight;
    const gotoblock_advantages = document.querySelector(".advantages");
    const gotoblockvalue_advantages = gotoblock_advantages.getBoundingClientRect().top + scrollY - document.querySelector('.advantages').offsetHeight;
    const gotoblock_about = document.querySelector(".about");
    const gotoblockvalue_about = gotoblock_about.getBoundingClientRect().top + scrollY - document.querySelector('.about').offsetHeight;
    const gotoblock_faq = document.querySelector(".faq");
    const gotoblockvalue_faq = gotoblock_faq.getBoundingClientRect().top + scrollY - document.querySelector('.faq').offsetHeight;
    const gotoblock_feedback = document.querySelector(".feedback");
    const gotoblockvalue_feedback = gotoblock_feedback.getBoundingClientRect().top + scrollY - document.querySelector('.feedback').offsetHeight;
    const gotoblock_hero = document.querySelector(".hero");
    const gotoblockvalue_hero = gotoblock_hero.getBoundingClientRect().top + scrollY - document.querySelector('.hero').offsetHeight;
    const gotoblock_price = document.querySelector(".price");
    const gotoblockvalue_price = gotoblock_price.getBoundingClientRect().top + scrollY - document.querySelector('.price').offsetHeight;
    const gotoblock_reviews = document.querySelector(".reviews");
    const gotoblockvalue_reviews = gotoblock_reviews.getBoundingClientRect().top + scrollY - document.querySelector('.reviews').offsetHeight;
    const ginput_btn = document.querySelector(".input-btn");

    var error = 0;
    ginput_btn.addEventListener("click", function () {
        error_tel.style.display = "none";
        error_email.style.display = "none";
        error_name.style.display = "none";
        error = 0;
        ValidMail();
        ValidPhone();
        ValidName();

    })
    var myMail = document.querySelector('.input-email');
    var myName = document.querySelector('.input-name');
    var myPhone = document.querySelector('.input-tel');
    var maskOptions = {
        mask: '+375 00-000-0000',
        lazy: false
    }
    var maskOptionsremove = {
        mask: null,
        lazy: false
    }
    IMask(myPhone, maskOptions);

    function ValidMail() {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

        var valid = re.test(myMail.value);
        var output;
        if (valid) output = 'Адрес эл. почты введен правильно!';
        else {
            error_email.style.display = "block";
            error = 1;
        }
    }
    function ValidName() {
        var output;
        if (myName.value !== "") output = 'Имя введено правильно!';
        else {
            error_name.style.display = "block";

            error = 1;
        }
    }
    function ValidPhone() {
        var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

        var valid = re.test(myPhone.value);
        var output;
        if (valid) output = 'Номер телефона введен правильно!';
        else {
            error_tel.style.display = "block";

            error = 1;
        }
    }

    footer_link.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            burger_menu.style.position = "absolute";
            var current = e.currentTarget;

            if (index == 0) {
                gotoblock_hero.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 1) {
                gotoblock_about.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 2) {
                gotoblock_advantages.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 3) {
                gotoblock_price.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 4) {
                gotoblock_reviews.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 5) {
                gotoblock_faq.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 6) {
                gotoblock_feedback.scrollIntoView({
                    duration: 2000
                })
            }
            e.preventDefault();
        })

    })


    var feedback_btn = document.querySelector(".feedback-btn");
    feedback_btn.addEventListener("click", function () {
        gotoblock_feedback.scrollIntoView({
            duration: 2000
        })
    })
    blist_item.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            burger_menu.style.position = "absolute";

            if (index == 0) {
                gotoblock_hero.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 1) {
                gotoblock_about.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 2) {
                gotoblock_advantages.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 3) {
                gotoblock_price.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 4) {
                gotoblock_reviews.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 5) {
                gotoblock_faq.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 6) {
                gotoblock_feedback.scrollIntoView({
                    duration: 2000
                })
            } else if (index == 7) {
                gotoblock_feedback.scrollIntoView({
                    duration: 2000
                })
            }
            e.preventDefault();
        })

    })
    hero_btn.addEventListener("click", function () {
        gotoblock_about.scrollIntoView({
            behavior: "smooth"
        })
    });
    if (!hero_title_col.classList.contains("burger-active")) {
        document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
        window.onresize = function (event) {
            if (!hero_title_col.classList.contains("burger-active")) {
                document.querySelector(".hero-title-col").style.left = document.querySelector(".first-item").offsetLeft + "px";
            } else {
                checkwidth();
            }
        };
    }
    function scroll(value) {
        close_burger();
        var t = value;
        value.scrollIntoView({
            behavior: "smooth"
        })
    }
    function checkwidth() {
        var width = window.innerWidth;
        if (width > 700) {
            if (width < 1114) {
                hero_title_col.style.left = "35%";
            }
            if (width < 800) {
                hero_title_col.style.left = "45%";
            }
            if (width < 768) {
                hero_title_col.style.left = "47%";
            }
        }
        if (width > 1114) {
            hero_title_col.classList.remove("burger-active");
            burger_menu.classList.remove("--active");
            burger.style.display = "block";
            hero_col_image.style.display = "block";
        }
    }
    // $("#order-form").submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "/sendmail.php",
    //         data: $(this).serialize(),
    //         success: function(data)
    //         {
    //             alert(data);
    //         }
    //     });

    // });
    const form = document.getElementById("order-form");
    form.addEventListener("submit", formSend);
    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);
        let reponse = await fetch("sendmail.php", {
            method: 'POST',
            body: formData
        })
    }



    gsap.to('.burger', { x: '0', delay: 2.0, })
    gsap.to(".nav-list", { delay: 2.0, y: 0, opacity: 1 })
    gsap.to('.hero-col-image', { x: 0, delay: 3, opacity: 1 })
    gsap.to('.hero-title-col ', { x: 0, opacity: 1, delay: 2.0 })
    gsap.to(".layer-1", { delay: .5, y: '-100vh' })
    gsap.to(".layer-2", { delay: .7, y: '-100vh' })
    gsap.to(".layer-3", { delay: .9, y: '-100vh' })
    gsap.to(".overlay", { delay: 1.5, y: '-100vh' })
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".title-company", {
        scrollTrigger: {
            trigger: ".title-company",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".animation-0", {
        scrollTrigger: {
            trigger: ".animation-0",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".animation-1", {
        scrollTrigger: {
            trigger: ".animation-1",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".advantages-title", {
        scrollTrigger: {
            trigger: ".advantages-title",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".animation-2", {
        scrollTrigger: {
            trigger: ".animation-2",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1
    })
    gsap.to(".animation-3", {
        scrollTrigger: {
            trigger: ".animation-3",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        y: 0,
        opacity: 1
    })
    gsap.to(".price-title", {
        scrollTrigger: {
            trigger: ".price-title ",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".animation-4", {
        scrollTrigger: {
            trigger: ".animation-4",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scale: 1,
        opacity: 1
    })
    gsap.to(".animation-5", {
        scrollTrigger: {
            trigger: ".animation-5",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scale: 1,
        opacity: 1
    })
    gsap.to(".reviews-title", {
        scrollTrigger: {
            trigger: ".reviews-title",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        x: 0,
        opacity: 1
    })
    gsap.to(".animation-6", {
        scrollTrigger: {
            trigger: ".animation-6",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleY: 1,
        opacity: 1
    })
    gsap.to(".animation-7", {
        scrollTrigger: {
            trigger: ".animation-7",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleY: 1,
        opacity: 1
    })
    gsap.to(".animation-8", {
        scrollTrigger: {
            trigger: ".animation-8",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-9", {
        scrollTrigger: {
            trigger: ".animation-9",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-10", {
        scrollTrigger: {
            trigger: ".animation-10",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })

    gsap.to(".animation-11", {
        scrollTrigger: {
            trigger: ".animation-11",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-12", {
        scrollTrigger: {
            trigger: ".animation-12",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-13", {
        scrollTrigger: {
            trigger: ".animation-13",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-14", {
        scrollTrigger: {
            trigger: ".animation-14",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-15", {
        scrollTrigger: {
            trigger: ".animation-15",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-16", {
        scrollTrigger: {
            trigger: ".animation-16",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-17", {
        scrollTrigger: {
            trigger: ".animation-17",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        scaleX: 1,
        opacity: 1
    })
    gsap.to(".animation-18", {
        scrollTrigger: {
            trigger: ".animation-18",
            start: "top +=700",
            toggleActions: "play none none none"
        },
        opacity: 1
    })


    const cursor = new MouseFollower({
        el: null,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });
})
var loading = document.querySelector(".loading");
    ; (function () {
        function id(v) { return document.getElementById(v); }
        function loadbar() {
            var ovrl = id("overlay"),
                prog = id("progress"),
                stat = id("progstat"),
                img = document.images,
                c = 0,
                tot = img.length;
            if (tot == 0) return doneLoading();

            function imgLoaded() {
                c += 1;
                var perc = ((100 / tot * c) << 0);
                prog.style.width = perc;
                loading.innerHTML = "0" + perc;
                if (perc == 100) {
                    loading.innerHTML = "100";
                }
                if (c === tot) return doneLoading();
            }
            function doneLoading() {

                gsap.to(".loading", { delay: 2.0, x: '-100'})
                document.querySelector("body").style.overflowY = "auto";
            }
            for (var i = 0; i < tot; i++) {
                var tImg = new Image();
                tImg.onload = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src = img[i].src;
            }
        }
        
        document.addEventListener('DOMContentLoaded', loadbar, false);
    }());
    window.scrollTo(0, 0)