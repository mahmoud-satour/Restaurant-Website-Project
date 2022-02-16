var swiper = new Swiper (".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

function loader () {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut () {
    setInterval(loader, 3000)
}
window.onload = fadeOut;