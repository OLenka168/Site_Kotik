document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector('#back-to-top');

    window.addEventListener("scroll", function () {
        if (window.pageYOffset >= 300 && window.innerWidth >= 800) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const photos = ['./Images/sert1.jpg', './Images/sert2.jpg', './Images/sert3.jpg', './Images/sert4.jpg', './Images/sert5.jpg', './Images/sert6.jpg', './Images/sert7.jpg', './Images/sert8.jpg', './Images/sert9.jpg', './Images/sert10.jpg'];

let i=0;

right.addEventListener('click', () => {
    i++;
    if (i > photos.length - 1) {
        i = 0;
    }
    document.querySelector('#image').src = photos[i];
})

left.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#image').src = photos[i];
})
