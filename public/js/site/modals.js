function openBioModal(id) {
	document.getElementById(id).classList.add('open');
	document.body.style.overflow = 'hidden';
}

function closeBioModal(id) {
	var overlay = document.getElementById(id);
	overlay.classList.remove('open');
	overlay.addEventListener('transitionend', function handler() {
		overlay.removeEventListener('transitionend', handler);
		if (!document.querySelector('.bio-modal-overlay.open')) {
			document.body.style.overflow = '';
		}
	});
}

function closeBioModalOnOverlay(event, id) {
	if (event.target === document.getElementById(id)) {
		closeBioModal(id);
	}
}

window.openBioModal = openBioModal;
window.closeBioModal = closeBioModal;
window.closeBioModalOnOverlay = closeBioModalOnOverlay;

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		document.querySelectorAll('.bio-modal-overlay.open').forEach(function (modal) {
			closeBioModal(modal.id);
		});
	}
});
