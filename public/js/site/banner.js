// Banner dismiss
(function () {
	var banner = document.getElementById('announcementBanner');
	var dismiss = document.getElementById('bannerDismiss');
	if (banner && sessionStorage.getItem('bannerDismissed')) {
		banner.style.display = 'none';
	}
	if (dismiss) {
		dismiss.addEventListener('click', function () {
			banner.style.display = 'none';
			sessionStorage.setItem('bannerDismissed', '1');
		});
	}
}());
