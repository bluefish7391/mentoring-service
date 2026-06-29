(function () {
	function openBioModal(id) {
		var overlay = document.getElementById(id);
		if (!overlay) return;
		overlay.classList.add('open');
		document.body.style.overflow = 'hidden';
	}

	function closeBioModal(id) {
		var overlay = document.getElementById(id);
		if (!overlay) return;
		overlay.classList.remove('open');
		overlay.addEventListener('transitionend', function handler() {
			overlay.removeEventListener('transitionend', handler);
			if (!document.querySelector('.bio-modal-overlay.open')) {
				document.body.style.overflow = '';
			}
		});
	}

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
		}
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			document.querySelectorAll('.bio-modal-overlay.open').forEach(function (modal) {
				closeBioModal(modal.id);
			});
		}
	});
}());
