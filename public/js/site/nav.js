// Nav scroll shadow
(function () {
	var nav = document.getElementById('siteNav');
	var progress = document.getElementById('scroll-progress');

	function updateScrollProgress() {
		if (!progress) return;
		var scrollTop = window.scrollY || window.pageYOffset;
		var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		var pct = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
		progress.style.width = Math.max(0, Math.min(100, pct)) + '%';
	}

	if (nav) {
		window.addEventListener('scroll', function () {
			nav.classList.toggle('nav-scrolled', window.scrollY > 10);
			updateScrollProgress();
		}, { passive: true });
	}

	window.addEventListener('resize', updateScrollProgress, { passive: true });
	updateScrollProgress();
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
