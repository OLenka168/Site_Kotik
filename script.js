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

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menu = document.querySelector('.menu');

    hamburgerIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

const left = document.querySelector('#left');
const right = document.querySelector('#right');

const photos = ['https://serov.yachts/Images/sert1.jpg', 'https://serov.yachts/Images/sert2.jpg', 'https://serov.yachts/Images/sert3.jpg', 'https://serov.yachts/Images/sert4.jpg', 'https://serov.yachts/Images/sert5.jpg', 'https://serov.yachts/Images/sert6.jpg', 'https://serov.yachts/Images/sert7.jpg', 'https://serov.yachts/Images/sert8.jpg', 'https://serov.yachts/Images/sert9.jpg', 'https://serov.yachts/Images/sert10.jpg'];

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
