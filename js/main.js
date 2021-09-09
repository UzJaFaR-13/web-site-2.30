// +++++++++++++   menu show y hidden   ++++++++++++++++++++
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

//======= menu show ========
// validate if constant exists
if(navToggle){
    navToggle.addEventListener("click",function(){
        navMenu.classList.add("show-menu")
    });
} 