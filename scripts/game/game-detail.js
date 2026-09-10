(function () {
  ensureBrandHeadAssets();

  var config = window.GAME_DETAIL_CONFIG || {};
  var stage = document.getElementById('cf-stage');
  var dotsContainer = document.getElementById('cf-dots');
  var counterEl = document.getElementById('counterEl');
  var lightbox = document.getElementById('lightbox');
  var lightboxImage = document.getElementById('lb-img');
  var lightboxCounter = document.getElementById('lb-counter');
  var autoButton = document.querySelector('.cf-auto');

  wrapTablesForMobile();
  syncPriceRatingFromSharedData();

  if (!stage || !dotsContainer || !counterEl) {
    return;
  }

  var total = getTotal();
  if (!total) {
    return;
  }

  var photos = getPhotos(total);
  var galleryLabel = getGalleryLabel();
  var currentIndex = 0;
  var slides = [];
  var dots = [];
  var autoTimer = null;
  var isAutoPlaying = false;
  var autoInterval = Number(config.autoInterval) || 4000;
  var touchStartX = 0;
  var touchEndX = 0;
  var lightboxIndex = 0;
  var observers = [];

  function ensureBrandHeadAssets() {
    var head = document.head;
    if (!head) return;

    function ensureTag(selector, tagName, attrs) {
      var existing = head.querySelector(selector);
      if (existing) return;
      var el = document.createElement(tagName);
      Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
      head.appendChild(el);
    }

    ensureTag('meta[name="theme-color"]', 'meta', { name: 'theme-color', content: '#080a0e' });
    ensureTag('link[rel="icon"]', 'link', { rel: 'icon', type: 'image/png', href: '/assets/icons/favicon-32.png' });
    ensureTag('link[rel="apple-touch-icon"]', 'link', { rel: 'apple-touch-icon', href: '/assets/icons/apple-touch-icon.png' });
    ensureTag('link[rel="manifest"]', 'link', { rel: 'manifest', href: '/site.webmanifest' });
  }

  function wrapTablesForMobile() {
    var tables = document.querySelectorAll('.game-content .section-block table');
    tables.forEach(function (table) {
      var parent = table.parentElement;
      if (!parent || parent.classList.contains('table-scroll')) {
        return;
      }

      var wrapper = document.createElement('div');
      wrapper.className = 'table-scroll';
      parent.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }

  function syncPriceRatingFromSharedData() {
    loadSharedPriceRating(function (priceMap) {
      if (!priceMap) {
        return;
      }

      var pageKey = getCurrentPageKey();
      var entry = pageKey && priceMap[pageKey];
      if (!entry) {
        return;
      }

      applyPriceAndRating(entry);
    });
  }

  function loadSharedPriceRating(onLoad) {
    if (window.GAME_PRICE_RATING && typeof window.GAME_PRICE_RATING === 'object') {
      onLoad(window.GAME_PRICE_RATING);
      return;
    }

    var candidates = [
      '../../../scripts/game/game-price-rating.js',
      '../../scripts/game/game-price-rating.js',
      '../scripts/game/game-price-rating.js',
      'scripts/game/game-price-rating.js'
    ];
    var cursor = 0;

    function tryNextSource() {
      if (cursor >= candidates.length) {
        onLoad(null);
        return;
      }

      var script = document.createElement('script');
      script.src = candidates[cursor];
      script.async = true;
      cursor += 1;

      script.onload = function () {
        if (window.GAME_PRICE_RATING && typeof window.GAME_PRICE_RATING === 'object') {
          onLoad(window.GAME_PRICE_RATING);
          return;
        }
        tryNextSource();
      };

      script.onerror = function () {
        tryNextSource();
      };

      document.head.appendChild(script);
    }

    tryNextSource();
  }

  function getCurrentPageKey() {
    var pathname = decodeURIComponent(window.location.pathname || '');
    var normalized = pathname.replace(/\\/g, '/');
    var match = normalized.match(/\/games\/[^?#]+\.html$/i);
    if (!match) {
      return '';
    }
    return match[0].replace(/^\//, '');
  }

  function getStarsFromRating(rating) {
    return rating >= 9 ? '&#9733;&#9733;&#9733;&#9733;&#9733;' : '&#9733;&#9733;&#9733;&#9733;&#9734;';
  }

  function formatRating(rating) {
    var value = Number(rating);
    if (Number.isNaN(value)) {
      return '';
    }
    return value.toFixed(1);
  }

  function applyPriceAndRating(entry) {
    var ratingValue = formatRating(entry.rating);
    var ratingEl = document.querySelector('.price-float-rating');
    var priceEl = document.querySelector('.price-float-val');
    var oldPriceEl = document.querySelector('.price-float-old');
    var heroRatingBadge = document.querySelector('.hero-badges .hero-badge');

    if (ratingEl && ratingValue) {
      ratingEl.innerHTML = getStarsFromRating(Number(entry.rating)) + ' &nbsp;' + ratingValue;
    }

    if (priceEl && entry.price) {
      priceEl.textContent = entry.price;
    }

    if (!oldPriceEl && entry.priceOld && priceEl && priceEl.parentElement) {
      oldPriceEl = document.createElement('div');
      oldPriceEl.className = 'price-float-old';
      priceEl.parentElement.appendChild(oldPriceEl);
    }

    if (oldPriceEl) {
      if (entry.priceOld) {
        oldPriceEl.textContent = entry.priceOld;
        oldPriceEl.style.display = '';
      } else {
        oldPriceEl.style.display = 'none';
      }
    }

    if (heroRatingBadge && ratingValue && /\/\s*10/.test(heroRatingBadge.textContent || '')) {
      heroRatingBadge.innerHTML = getStarsFromRating(Number(entry.rating)) + ' ' + ratingValue + ' / 10';
    }
  }

  function getTotal() {
    var configuredTotal = Number(config.total || config.galleryTotal);
    if (configuredTotal > 0) {
      return configuredTotal;
    }

    var candidates = [
      document.body && document.body.getAttribute('data-gallery-total'),
      document.documentElement && document.documentElement.getAttribute('data-gallery-total'),
      counterEl && counterEl.textContent,
      lightboxCounter && lightboxCounter.textContent
    ];

    for (var i = 0; i < candidates.length; i += 1) {
      var parsed = parseTotal(candidates[i]);
      if (parsed > 0) {
        return parsed;
      }
    }

    return 0;
  }

  function parseTotal(value) {
    if (!value) {
      return 0;
    }

    var text = String(value).trim();
    var slashMatch = text.match(/\d+\s*\/\s*(\d+)/);
    if (slashMatch) {
      return Number(slashMatch[1]) || 0;
    }

    var numberMatch = text.match(/\d+/);
    return numberMatch ? Number(numberMatch[0]) || 0 : 0;
  }

  function getPhotos(fallbackTotal) {
    if (Array.isArray(config.images) && config.images.length) {
      return config.images.slice();
    }

    var imageDir = config.imageDir || 'img';
    var imageExt = config.imageExt || '.webp';
    return Array.from({ length: fallbackTotal }, function (_, index) {
      return imageDir + '/' + (index + 1) + imageExt;
    });
  }

  function getGalleryLabel() {
    if (config.galleryLabel) {
      return String(config.galleryLabel).trim();
    }

    var bodyLabel = document.body && document.body.getAttribute('data-gallery-label');
    if (bodyLabel) {
      return bodyLabel.trim();
    }

    var heroTitle = document.querySelector('.game-hero-title');
    if (heroTitle) {
      return heroTitle.textContent.replace(/\s+/g, ' ').trim();
    }

    var pageTitle = document.title.replace(/\s+[|·-]\s+.*$/, '').trim();
    return pageTitle || 'Game';
  }

  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
      }, delay);
    };
  }

  function rafUpdate(fn) {
    requestAnimationFrame(function () {
      requestAnimationFrame(fn);
    });
  }

  function moveTo(index) {
    currentIndex = normalizeIndex(index);
    rafUpdate(updateGallery);
    announceLive('Image ' + (currentIndex + 1) + ' of ' + photos.length);
    pauseAuto();
  }

  function normalizeIndex(index) {
    return (index + photos.length) % photos.length;
  }

  function initGallery() {
    stage.innerHTML = '';
    dotsContainer.innerHTML = '';

    var stageFragment = document.createDocumentFragment();
    var dotsFragment = document.createDocumentFragment();

    photos.forEach(function (src, index) {
      var slide = document.createElement('div');
      slide.className = 'cf-slide';
      slide.setAttribute('role', 'img');
      slide.setAttribute('aria-label', 'Gallery image ' + (index + 1) + ' of ' + photos.length);
      slide.innerHTML = '<img src="' + src + '" alt="' + galleryLabel + ' View ' + (index + 1) + '" loading="lazy">';
      slide.onclick = function () {
        if (index === currentIndex) {
          openLightbox(index);
        } else {
          moveTo(index);
        }
      };
      stageFragment.appendChild(slide);

      var dot = document.createElement('div');
      dot.className = 'cf-dot';
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', 'Go to image ' + (index + 1));
      dot.onclick = function () {
        moveTo(index);
      };
      dotsFragment.appendChild(dot);
    });

    stage.appendChild(stageFragment);
    dotsContainer.appendChild(dotsFragment);

    slides = Array.from(stage.children);
    dots = Array.from(dotsContainer.children);

    updateGallery();
    setupEventListeners();
    observeSections();
  }

  function updateGallery() {
    slides.forEach(function (slide, index) {
      var position = 'hidden';
      if (index === currentIndex) position = 'center';
      else if (index === normalizeIndex(currentIndex - 1)) position = 'left1';
      else if (index === normalizeIndex(currentIndex + 1)) position = 'right1';
      else if (index === normalizeIndex(currentIndex - 2)) position = 'left2';
      else if (index === normalizeIndex(currentIndex + 2)) position = 'right2';

      slide.setAttribute('data-pos', position);
      slide.setAttribute('aria-label', 'Gallery image ' + (index + 1) + ' of ' + photos.length + ', position: ' + position);
    });

    dots.forEach(function (dot, index) {
      dot.classList.toggle('active', index === currentIndex);
    });

    counterEl.textContent = (currentIndex + 1) + '/' + photos.length;
  }

  var debouncedNav = debounce(function (direction) {
    currentIndex = normalizeIndex(currentIndex + direction);
    rafUpdate(updateGallery);
    announceLive('Image ' + (currentIndex + 1) + ' of ' + photos.length);
    pauseAuto();
  }, 150);

  function autoAdvance() {
    currentIndex = normalizeIndex(currentIndex + 1);
    rafUpdate(updateGallery);
  }

  function startAuto() {
    isAutoPlaying = true;
    if (!autoTimer) {
      autoTimer = setInterval(autoAdvance, autoInterval);
    }
    syncAutoButton();
  }

  function pauseAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
    syncAutoButton();
  }

  function stopAuto() {
    isAutoPlaying = false;
    pauseAuto();
  }

  function resumeAuto() {
    if (isAutoPlaying && !autoTimer) {
      autoTimer = setInterval(autoAdvance, autoInterval);
    }
  }

  function syncAutoButton() {
    if (!autoButton) {
      return;
    }

    autoButton.setAttribute('aria-pressed', isAutoPlaying && !!autoTimer ? 'true' : 'false');
    autoButton.classList.toggle('is-active', isAutoPlaying && !!autoTimer);
  }

  function announceLive(message) {
    var live = document.getElementById('live-announce') || createLiveRegion();
    live.textContent = message;
  }

  function createLiveRegion() {
    var live = document.createElement('div');
    live.id = 'live-announce';
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('aria-atomic', 'true');
    live.style.position = 'fixed';
    live.style.left = '-9999px';
    document.body.appendChild(live);
    return live;
  }

  function handleKeydown(event) {
    if (lightbox && lightbox.classList.contains('open')) {
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        window.lbMove(-1);
      } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        window.lbMove(1);
      } else if (event.code === 'Escape') {
        event.preventDefault();
        window.closeLightbox();
      }
      return;
    }

    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      event.preventDefault();
      debouncedNav(-1);
    } else if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      event.preventDefault();
      debouncedNav(1);
    }
  }

  function handleSwipe() {
    var difference = touchStartX - touchEndX;
    if (Math.abs(difference) > 50) {
      debouncedNav(difference > 0 ? 1 : -1);
    }
  }

  function setupEventListeners() {
    document.addEventListener('keydown', handleKeydown);

    stage.addEventListener('touchstart', function (event) {
      touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', function (event) {
      touchEndX = event.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    stage.addEventListener('mouseenter', function () {
      if (isAutoPlaying) {
        pauseAuto();
      }
    });

    stage.addEventListener('mouseleave', function () {
      resumeAuto();
    });

    var controls = document.querySelector('.cf-controls');
    if (controls) {
      controls.addEventListener('mouseenter', function () {
        if (isAutoPlaying) {
          pauseAuto();
        }
      });

      controls.addEventListener('mouseleave', function () {
        resumeAuto();
      });
    }

    if (autoButton) {
      autoButton.addEventListener('click', function () {
        if (isAutoPlaying) {
          stopAuto();
        } else {
          startAuto();
        }
      });
      syncAutoButton();
    }

    if (lightbox) {
      lightbox.addEventListener('click', function (event) {
        if (event.target === lightbox) {
          window.closeLightbox();
        }
      });
    }
  }

  function updateLightbox() {
    if (!lightboxImage || !lightboxCounter) {
      return;
    }

    lightboxImage.src = photos[lightboxIndex];
    lightboxImage.alt = galleryLabel + ' View ' + (lightboxIndex + 1);
    lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + photos.length;
  }

  function openLightbox(index) {
    if (!lightbox) {
      return;
    }

    lightboxIndex = normalizeIndex(index);
    updateLightbox();
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-open');
    document.body.style.overflow = '';
  }

  function moveLightbox(direction) {
    lightboxIndex = normalizeIndex(lightboxIndex + direction);
    updateLightbox();
  }

  function observeSections() {
    var sections = document.querySelectorAll('.section-block');
    if (!sections.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      sections.forEach(function (section) {
        section.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observers.push(observer);
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  window.cfMove = function (direction) {
    debouncedNav(direction);
  };
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.lbMove = moveLightbox;

  initGallery();
})();
