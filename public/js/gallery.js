(() => {
	'use strict';

	/* Read --ctlg-visible CSS variable (set per breakpoint) */
	function getVisible() {
		return parseInt(getComputedStyle(document.documentElement).getPropertyValue('--ctlg-visible').trim(), 10) || 3;
	}

	/* ── CAROUSEL ─────────────────────────────────────────────── */
	class Carousel {
		constructor(section) {
			this.section = section;
			this.track = section.querySelector('[data-ctlg-track]');
			this.btnPrev = section.querySelector('[data-ctlg-prev]');
			this.btnNext = section.querySelector('[data-ctlg-next]');
			this.dotsWrap = section.querySelector('[data-ctlg-dots]');
			this.items = Array.from(this.track.querySelectorAll('.ctlg-item'));
			this.total = this.items.length;
			this.index = 0;
			this._vis = getVisible();
			this._dots = [];
			this._init();
		}

		get maxIndex() { return Math.max(0, this.total - this._vis); }

		_init() {
			this._buildDots();
			// Defer first slide until after the browser has laid out the track,
			// so getBoundingClientRect() returns real dimensions.
			requestAnimationFrame(() => {
				this._slide(0, false);
				this._bindEvents();
			});
		}

		_buildDots() {
			this.dotsWrap.innerHTML = '';
			this._dots = [];
			const pages = Math.ceil(this.total / this._vis);
			for (let i = 0; i < pages; i++) {
				const b = document.createElement('button');
				b.className = 'ctlg-dot';
				b.setAttribute('aria-label', `Go to page ${i + 1}`);
				b.addEventListener('click', () => this._slide(i * this._vis));
				this.dotsWrap.appendChild(b);
				this._dots.push(b);
			}
			this._syncDots();
		}

		_syncDots() {
			const active = Math.round(this.index / this._vis);
			this._dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
		}

		_slide(to, animate = true) {
			this.index = Math.max(0, Math.min(to, this.maxIndex));
			const item = this.items[0];
			if (!item) return;
			const gap = parseInt(getComputedStyle(this.track).gap, 10) || 20;
			const cardW = item.offsetWidth;
			if (!animate) this.track.style.transition = 'none';
			this.track.style.transform = `translateX(-${this.index * (cardW + gap)}px)`;
			if (!animate) requestAnimationFrame(() => { this.track.style.transition = ''; });
			this.btnPrev.disabled = this.index <= 0;
			this.btnNext.disabled = this.index >= this.maxIndex;
			this._syncDots();
		}

		_bindEvents() {
			this.btnPrev.addEventListener('click', () => this._slide(this.index - this._vis));
			this.btnNext.addEventListener('click', () => this._slide(this.index + this._vis));

			/* Resize — re-layout */
			let rt;
			window.addEventListener('resize', () => {
				clearTimeout(rt);
				rt = setTimeout(() => {
					const nv = getVisible();
					if (nv !== this._vis) { this._vis = nv; this.index = Math.min(this.index, this.maxIndex); this._buildDots(); }
					this._slide(this.index, false);
				}, 120);
			});

			/* Keyboard (when carousel is focused) */
			this.section.addEventListener('keydown', e => {
				if (e.key === 'ArrowLeft') { e.preventDefault(); this._slide(this.index - 1); }
				if (e.key === 'ArrowRight') { e.preventDefault(); this._slide(this.index + 1); }
			});

			/* Touch swipe */
			let sx = null;
			this.track.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
			this.track.addEventListener('touchend', e => {
				if (sx === null) return;
				const d = sx - e.changedTouches[0].clientX;
				if (Math.abs(d) > 40) this._slide(d > 0 ? this.index + 1 : this.index - 1);
				sx = null;
			}, { passive: true });
		}
	}

	/* ── LIGHTBOX ─────────────────────────────────────────────── */
	class Lightbox {
		constructor() {
			this.lb = document.getElementById('ctlg-lightbox');
			this.img = this.lb.querySelector('[data-lb-img]');
			this.caption = this.lb.querySelector('[data-lb-caption]');
			this.indexEl = this.lb.querySelector('[data-lb-index]');
			this.items = [];
			this.current = 0;
			this._bindEvents();
		}

		setItems(items) { this.items = items; }

		open(i) {
			this.current = i;
			this._render();
			this.lb.classList.add('is-open');
			this.lb.setAttribute('aria-hidden', 'false');
			document.body.style.overflow = 'hidden';
			setTimeout(() => this.lb.querySelector('[data-lb-close]').focus(), 50);
		}

		close() {
			this.lb.classList.remove('is-open');
			this.lb.setAttribute('aria-hidden', 'true');
			document.body.style.overflow = '';
		}

		prev() { this.current = (this.current - 1 + this.items.length) % this.items.length; this._render(); }
		next() { this.current = (this.current + 1) % this.items.length; this._render(); }

		_render() {
			const item = this.items[this.current];
			const src = item.querySelector('.ctlg-img').src;
			this.img.style.opacity = '0';
			this.img.onload = () => { this.img.style.opacity = '1'; };
			this.img.src = src;
			this.img.alt = item.querySelector('.ctlg-img').alt;
			this.caption.textContent = item.dataset.caption || '';
			this.indexEl.textContent = `${this.current + 1} / ${this.items.length}`;
		}

		_bindEvents() {
			this.lb.querySelector('[data-lb-backdrop]').addEventListener('click', () => this.close());
			this.lb.querySelector('[data-lb-close]').addEventListener('click', () => this.close());
			this.lb.querySelector('[data-lb-prev]').addEventListener('click', () => this.prev());
			this.lb.querySelector('[data-lb-next]').addEventListener('click', () => this.next());
			document.addEventListener('keydown', e => {
				if (!this.lb.classList.contains('is-open')) return;
				if (e.key === 'Escape') { e.preventDefault(); this.close(); }
				if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
				if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
			});
		}
	}

	/* ── INIT ─────────────────────────────────────────────────── */
	function init() {
		const lb = new Lightbox();
		const sections = document.querySelectorAll('.ctlg-section');
		const allItems = [];

		sections.forEach(sec => {
			new Carousel(sec);
			Array.from(sec.querySelectorAll('.ctlg-item')).forEach(item => allItems.push(item));
		});

		lb.setItems(allItems);

		allItems.forEach((item, idx) => {
			const open = () => lb.open(idx);
			item.addEventListener('click', open);
			item.addEventListener('keydown', e => {
				if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
			});
		});
	}

	// Ensure styles and CSS custom properties are fully painted
	if (document.readyState === 'complete') {
		init();
	} else {
		window.addEventListener('load', init);
	}
})();
