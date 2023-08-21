let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let navbar = document.querySelector('.navbar');

function nav(){
    line2.classList.toggle('line2-nav')
    line3.classList.toggle('line3-nav')
    line1.classList.toggle('line1-nav')
    navbar.classList.toggle('nav-resp')
}