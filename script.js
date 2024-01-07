// gsap.from('.image', {x:-80, duration:2,   ease:'power2.inOut'});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector('#back-to-top');

    window.addEventListener("scroll", function () {
        if ((window.pageYOffset) >= 300) {
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

const photos = ['sert1.jpg', 'sert2.jpg', 'sert3.jpg', 'sert4.jpg', 'sert5.jpg', 'sert6.jpg', 'sert7.jpg', 'sert8.jpg', 'sert9.jpg', 'sert10.jpg'];

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
