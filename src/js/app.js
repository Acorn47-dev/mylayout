import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

var blist_item = document.querySelectorAll(".blist-item");
blist_item.forEach(el => {
    el.addEventListener("click" , (e)=> {
        var current = e.currentTarget;
        blist_item.forEach(el=>{
            el.classList.remove("--active");
        })
        current.classList.add("--active");
    })
    
})

var footer_link = document.querySelectorAll(".footer-link");
footer_link.forEach(el => {
    el.addEventListener("click" , (e)=> {
        var current = e.currentTarget;
        footer_link.forEach(el=>{
            el.classList.remove("active");
        })
        current.classList.add("active");
    })
    
})

var footer_link = document.querySelectorAll(".footer-link");


var burger = document.querySelector(".burger-icon");
var burger_menu = document.querySelector(".burger");
burger.addEventListener("click", (e) => {
    burger_menu.classList.add("--active");
    burger.style.display = "none";
    burger_menu.style.position = "fixed";
})
var header_back = document.querySelector(".header-back");
header_back.addEventListener("click", (e) => {
    burger_menu.classList.remove("--active");
    burger.style.display = "block";
    burger_menu.style.position = "absolute";
})

var footer_btn = document.querySelector(".footer-btn");
footer_btn.addEventListener("click", (e) => {
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
    burger_menu.classList.add("--active");
    burger.style.display = "none";
});