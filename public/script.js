// Legacy entry point kept for backward compatibility.
// Main scripts now live in js/site/* and js/gallery.js.
(function () {
	var files = [
		'js/site/nav.js',
		'js/site/banner.js',
		'js/site/modals.js',
		'js/site/faq.js',
		'js/site/share.js',
		'js/site/delegated-events.js',
		'js/site/reveal.js',
		'js/gallery.js'
	];

	function loadScript(src) {
		var script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.body.appendChild(script);
	}

	for (var i = 0; i < files.length; i++) {
		loadScript(files[i]);
	}
}());
