function toggleFaq(btn) {
	var item = btn.closest('.faq-item');
	var isOpen = item.classList.contains('open');
	item.classList.toggle('open', !isOpen);
	btn.setAttribute('aria-expanded', String(!isOpen));
}

window.toggleFaq = toggleFaq;
