(function () {
	var shareUrl = window.location.href;
	var shareTitle = 'Free Coding Classes for Kids \u2013 Alpharetta and Surrounding Areas';
	var shareText = 'Check out hands-on coding classes for kids in Alpharetta and the surrounding areas \u2013 taught by high school students and completely free! ';

	function toggleShareMenu() {
		var menu = document.getElementById('shareMenu');
		if (!menu) return;
		menu.classList.toggle('open');
	}

	function closeShareMenu() {
		var menu = document.getElementById('shareMenu');
		if (!menu) return;
		menu.classList.remove('open');
	}

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

	if (navigator.share) {
		var nativeShareButton = document.getElementById('nativeShareBtn');
		if (nativeShareButton) {
			nativeShareButton.style.display = 'flex';
		}
	}

	document.addEventListener('click', function (event) {
		var shareToggleButton = event.target.closest('#shareToggleBtn');
		if (shareToggleButton) {
			toggleShareMenu();
			return;
		}

		var shareMenuItem = event.target.closest('[data-share-action]');
		if (shareMenuItem) {
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
			return;
		}

		var btn = document.getElementById('shareToggleBtn');
		if (btn && !btn.closest('.share-wrapper').contains(event.target)) {
			closeShareMenu();
		}
	});
}());
