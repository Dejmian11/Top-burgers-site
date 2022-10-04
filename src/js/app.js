import '../scss/main.scss';

// ========================== STICKY HEADER ON SCROLL ==========================
window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');

	header.classList.toggle('header--scrolled', window.scrollY > 0); 
});
