import '../scss/main.scss';

const header = document.querySelector('.header');

// ========================== STICKY HEADER ON SCROLL ==========================
window.addEventListener('scroll', () => {
	header.classList.toggle('header--scrolled', window.scrollY > 0);
});

// ========================== SIDEBAR ==========================
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const headerSidebar = document.querySelector('.header-sidebar');

// Show sidebar nav
const showSidebarNav = () => {
	headerSidebar.hasAttribute('data-visible')
		? mobileNavToggle.setAttribute('aria-expanded', false)
		: mobileNavToggle.setAttribute('aria-expanded', true);

	headerSidebar.toggleAttribute('data-visible');

	changeMobileNavToggleIcon(headerSidebar);
};

mobileNavToggle.addEventListener('click', showSidebarNav);

// Close the sidebar when the viewport is bigger
window.addEventListener('resize', () => {
	if (window.innerWidth >= 992) {
		headerSidebar.removeAttribute('data-visible');
	}

	changeMobileNavToggleIcon(headerSidebar);
});

// Change mobile nav toggle icon
const changeMobileNavToggleIcon = headerSidebar => {
	const mobileNavToggleIcon = mobileNavToggle.querySelector('use');

	if (headerSidebar.hasAttribute('data-visible'))
		mobileNavToggleIcon.setAttribute(
			'xlink:href',
			'images/icons/sprite.svg#icon-cross'
		);

	if (!headerSidebar.hasAttribute('data-visible'))
		mobileNavToggleIcon.setAttribute(
			'xlink:href',
			'images/icons/sprite.svg#icon-menu'
		);
};

// ========================== SMOOTH SCROLLING ==========================
const homeSectionBtn = document.querySelector('.home__btn');
const scrollBtn = document.querySelector('.home__scroll-link');
const navLinks = document.querySelectorAll('.nav__link');

const scrollToSectionBtns = [homeSectionBtn, scrollBtn, ...navLinks];

console.log(scrollToSectionBtns);

const scrollToSection = e => {
	const btnHref = e.target.getAttribute('href');
	const targetSection = document.querySelector(btnHref);
	const targetSectionCoords = targetSection.getBoundingClientRect();
	const headerHeight = document.querySelector('.header').offsetHeight;

	console.log(targetSectionCoords.top);
	console.log(window.scrollY);
	console.log(headerHeight);

	// window.scrollTo(
	// 	targetSectionCoords.left + window.scrollX,
	// 	targetSectionCoords.top + window.scrollY - headerHeight
	// );

  targetSection.scrollIntoView();
};

scrollToSectionBtns.forEach(scrollToSectionBtn => {
	scrollToSectionBtn.addEventListener('click', scrollToSection);
});
