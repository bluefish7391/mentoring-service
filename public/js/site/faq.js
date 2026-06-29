(function () {
	function toggleFaq(btn) {
		var item = btn.closest('.faq-item');
		if (!item) return;
		var isOpen = item.classList.contains('open');
		item.classList.toggle('open', !isOpen);
		btn.setAttribute('aria-expanded', String(!isOpen));
	}

	document.addEventListener('click', function (event) {
		var faqButton = event.target.closest('.faq-question');
		if (!faqButton) return;
		toggleFaq(faqButton);
	});
}());
