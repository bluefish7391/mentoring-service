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

		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') {
				document.querySelectorAll('.bio-modal-overlay.open').forEach(function (modal) {
					closeBioModal(modal.id);
				});
			}
		});

		function toggleFaq(btn) {
			var item = btn.closest('.faq-item');
			var isOpen = item.classList.contains('open');
			item.classList.toggle('open', !isOpen);
			btn.setAttribute('aria-expanded', String(!isOpen));
		}

		var shareUrl = window.location.href;
		var shareTitle = 'Free Coding Classes for Kids \u2013 Alpharetta and Surrounding Areas';
		var shareText = 'Check out hands-on coding classes for kids in Alpharetta and the surrounding areas \u2013 taught by high school students and completely free! ';

		if (navigator.share) {
			document.getElementById('nativeShareBtn').style.display = 'flex';
		}

		function toggleShareMenu() {
			document.getElementById('shareMenu').classList.toggle('open');
		}

		function closeShareMenu() {
			document.getElementById('shareMenu').classList.remove('open');
		}

		document.addEventListener('click', function (e) {
			var btn = document.getElementById('shareToggleBtn');
			if (btn && !btn.closest('.share-wrapper').contains(e.target)) {
				closeShareMenu();
			}
		});

		function nativeShare() {
			closeShareMenu();
			navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
		}

		function shareViaSMS() {
			closeShareMenu();
			window.location.href = 'sms:?body=' + encodeURIComponent(shareText + shareUrl);
		}

		function shareViaWhatsApp() {
			closeShareMenu();
			window.open('https://wa.me/?text=' + encodeURIComponent(shareText + shareUrl), '_blank', 'noopener,noreferrer');
		}

		function shareViaFacebook() {
			closeShareMenu();
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), '_blank', 'noopener,noreferrer,width=600,height=400');
		}

		function shareViaTwitter() {
			closeShareMenu();
			window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(shareUrl), '_blank', 'noopener,noreferrer,width=600,height=400');
		}