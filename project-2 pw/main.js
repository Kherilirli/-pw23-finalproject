let authentication = () =>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'januarkherilirli@gmail.com' && password === '020105kh'){
        window.location.href = 'home.html';
        alert('Login Berhasil');
    } else {
        alert('Username atau Password salah')
    }
}
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 20)
});

var swiper = new Swiper(".this-week", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        510:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        758:{
            slidesPerView:3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView:4,
            spaceBetween: 20,
        },
    },
});
