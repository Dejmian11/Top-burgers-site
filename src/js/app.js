import '../scss/main.scss';

const header = document.querySelector('.header');

// ========================== HEADER AND NAVIGATION ==========================
const homeSection = document.querySelector('.home');

// STICKY HEADER ON SCROLL
const homeSectionOptions = {
	threshold: 0.95,
};

const homeSectionObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) header.classList.add('header--scrolled');
		if (entry.isIntersecting) header.classList.remove('header--scrolled');
	});
}, homeSectionOptions);

homeSectionObserver.observe(homeSection);

// SECTION INDICATOR
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav__link');

const sectionsOptions = {
	root: null,
	threshold: 0,
	rootMargin: '-350px',
};

const sectinonsObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (!entry.isIntersecting) return;

		console.log(entry);

		navLinks.forEach(navLink => {
			navLink.classList.remove('active');

			if (navLink.getAttribute('href').split('#')[1] === entry.target.id)
				navLink.classList.toggle('active');
		});
	});
}, sectionsOptions);

sections.forEach(section => sectinonsObserver.observe(section));

// const navLinks = document.querySelectorAll('.nav__link');

// const sectionOptions = {};

// const sectionObserver = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		navLinks.forEach(navLink => {
// 			// console.log(entry.target.id);
// 			// console.log(navLink.getAttribute('href').split('#')[1]);
// 			console.log(entry.target.offsetHeight);

// 			if (
// 				entry.target.id === navLink.getAttribute('href').split('#')[1] &&
// 				window.scrollY >= entry.target.offsetTop && window.scrollY < entry.target.offsetTop + entry.target.offsetHeight
// 			){
// 				navLink.classList.remove('active');
//         navLink.
//       }else return;
// 		});
// 	});
// }, sectionOptions);

// sections.forEach(section => {
// 	sectionObserver.observe(section);
// });

// console.log(homeSectionObserver);

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
const headerHeight = header.offsetHeight;
const headerContainer = header.querySelector('.header-container');
const headerContainerPadding =
	headerContainer.getPropertyValue('padding-block');

console.log(headerContainerPadding);

// Get scrolled header height
const scrolledHeaderHeight = headerHeight - headerContainerPadding;

// Include header height
document.documentElement.style.setProperty(
	'--scroll-padding',
	`${scrolledHeaderHeight}`
);
// const homeSectionBtn = document.querySelector('.home__btn');
// const scrollBtn = document.querySelector('.home__scroll-link');
// const navLinks = document.querySelectorAll('.nav__link');

// const scrollToSectionBtns = [homeSectionBtn, scrollBtn, ...navLinks];

// console.log(scrollToSectionBtns);

// const scrollToSection = e => {
// 	const btnHref = e.target.getAttribute('href');
// 	const targetSection = document.querySelector(btnHref);
// 	const targetSectionCoords = targetSection.getBoundingClientRect();
// 	const headerHeight = document.querySelector('.header').offsetHeight;

// 	console.log(targetSectionCoords.top);
// 	console.log(window.scrollY);
// 	console.log(headerHeight);

// 	// window.scrollTo(
// 	// 	targetSectionCoords.left + window.scrollX,
// 	// 	targetSectionCoords.top + window.scrollY - headerHeight
// 	// );

//   targetSection.scrollIntoView();
// };

// scrollToSectionBtns.forEach(scrollToSectionBtn => {
// 	scrollToSectionBtn.addEventListener('click', scrollToSection);
// });
