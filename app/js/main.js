const btn = document.querySelector('.burger');
const mainMenu = document.querySelector('.nav');
const headerBtn = document.querySelector('.header__btn');
const body = document.querySelector('body');

btn.addEventListener('click', ()=>{
	btn.classList.toggle('burger--active');
	mainMenu.classList.toggle('burger--active');
	headerBtn.classList.toggle('burger--active');
	body.classList.toggle('noscroll');
});

const swiper = new Swiper(".testimonies__slider", {
	slidesPerView: "auto",
	spaceBetween: 24,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});