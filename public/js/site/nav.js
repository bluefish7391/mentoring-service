// Nav scroll shadow
(function () {
	var nav = document.getElementById('siteNav');
	if (nav) {
		window.addEventListener('scroll', function () {
			nav.classList.toggle('nav-scrolled', window.scrollY > 10);
		}, { passive: true });
	}
}());

// Mobile hamburger toggle
(function () {
	var hamburger = document.getElementById('hamburger');
	var navLinks = document.getElementById('navLinks');
	if (hamburger && navLinks) {
		hamburger.addEventListener('click', function () {
			var isOpen = navLinks.classList.toggle('open');
			hamburger.setAttribute('aria-expanded', String(isOpen));
		});
	}
}());

// Close mobile menu on nav link click
(function () {
	var navLinks = document.getElementById('navLinks');
	var hamburger = document.getElementById('hamburger');
	if (navLinks) {
		navLinks.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				navLinks.classList.remove('open');
				if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
			}
		});
	}
}());
