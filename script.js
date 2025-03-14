// View Books by Java Script
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//java script for quick view button

var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtns, i) => {
    popupBtns.addEventListener("click", () => {
        popup(i);
    });
});

// for close button

closeBtns.forEach((closeBtns) => {
    closeBtns.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
            popupView.classList.remove('active');
        });
    });
});

// Dark Mood

var icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-them");
    if(document.body.classList.contains("dark-them")) {
        icon.src = "/images//2734.svg";
    }else {
        icon.src = "/images//1f506.svg";
    }
}

//scroll reveal

ScrollReveal({
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.hero-contant, .section-title, .revial-top', {origin: 'top'});

ScrollReveal().reveal('.hero-banner, .revial-bottom', { origin: 'bottom' });

ScrollReveal().reveal('.hero-title, .btn-group, .revial-lift', {origin: 'left' });

ScrollReveal().reveal('.home-content, .revial-right', {origin: "right",});

// active linke in scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.id-activ');

window.onscroll = () => 
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.id-activ[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /////////////////////////typed /////////////////////////

const typed = new Typed(".multiple-text", {
    strings:['YOTUBER', 'ARTES', 'SCULPTOR'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});