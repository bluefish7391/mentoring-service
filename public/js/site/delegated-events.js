document.addEventListener('click', function (event) {
	var openModalButton = event.target.closest('[data-modal-open]');
	if (openModalButton) {
		openBioModal(openModalButton.getAttribute('data-modal-open'));
		return;
	}

	var closeModalButton = event.target.closest('[data-modal-close]');
	if (closeModalButton) {
		var overlay = closeModalButton.closest('.bio-modal-overlay');
		if (overlay && overlay.id) {
			closeBioModal(overlay.id);
		}
		return;
	}

	var modalOverlay = event.target.closest('.bio-modal-overlay[data-modal-overlay]');
	if (modalOverlay && event.target === modalOverlay) {
		closeBioModal(modalOverlay.id);
		return;
	}

	var faqButton = event.target.closest('.faq-question');
	if (faqButton) {
		toggleFaq(faqButton);
		return;
	}

	var shareToggleButton = event.target.closest('#shareToggleBtn');
	if (shareToggleButton) {
		toggleShareMenu();
		return;
	}

	var shareMenuItem = event.target.closest('[data-share-action]');
	if (!shareMenuItem) {
		return;
	}

	var action = shareMenuItem.getAttribute('data-share-action');
	if (action === 'native') {
		nativeShare();
		return;
	}
	if (action === 'sms') {
		shareViaSMS();
		return;
	}
	if (action === 'whatsapp') {
		shareViaWhatsApp();
		return;
	}
	if (action === 'facebook') {
		shareViaFacebook();
		return;
	}
	if (action === 'twitter') {
		shareViaTwitter();
	}
});
