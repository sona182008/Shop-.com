// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
// Preloader

window.addEventListener("load", function(){

    document.getElementById("preloader").style.display = "none";

});
// Product Search

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});
function toggleMenu(){
    document.querySelector(".menu").classList.toggle("active");
}
// Mobile Menu Toggle Fix
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
}
