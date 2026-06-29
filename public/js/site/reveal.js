// Scroll-reveal
(function () {
	if (!window.IntersectionObserver) return;

	var targets = document.querySelectorAll(
		'.skill-card, .pillar-card, .journey-step, .faq-item, .team-member'
	);
	targets.forEach(function (el) { el.classList.add('reveal'); });

	['.skill-card', '.pillar-card', '.journey-step'].forEach(function (sel) {
		document.querySelectorAll(sel).forEach(function (el, i) {
			el.style.transitionDelay = (i * 0.07) + 's';
		});
	});

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });

	targets.forEach(function (el) { observer.observe(el); });
}());
