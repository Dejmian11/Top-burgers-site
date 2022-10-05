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

