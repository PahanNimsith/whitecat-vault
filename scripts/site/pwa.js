/* ══════════════════════════════════════════════════
   WHITE CAT VAULT — PWA Install Manager  v1.0
   • Catches beforeinstallprompt (Android/Chrome)
   • Shows custom in-page install banner (2nd prompt)
   • Handles iOS "Add to Home Screen" guide
   • Wires up any element with data-pwa-install
══════════════════════════════════════════════════ */
(function () {
  'use strict';

  var deferredPrompt = null;
  var bannerShown    = false;
  var DISMISSED_KEY  = 'wcv-pwa-dismissed';

  /* ─── Detect iOS ─── */
  var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  var isInStandaloneMode = (
    window.navigator.standalone ||
    window.matchMedia('(display-mode: standalone)').matches
  );

  /* ─── Register service worker ─── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () {});
    });
  }

  /* ─── Intercept browser install prompt (Chrome/Android) ─── */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    updateInstallButtons(true);
    // Show custom banner after short delay if user hasn't dismissed
    if (!localStorage.getItem(DISMISSED_KEY)) {
      setTimeout(showInstallBanner, 3000);
    }
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    hideBanner();
    updateInstallButtons(false);
  });

  /* ─── Trigger native install prompt ─── */
  function triggerInstall() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function (choice) {
        if (choice.outcome === 'accepted') {
          deferredPrompt = null;
          hideBanner();
          updateInstallButtons(false);
        }
      });
    } else if (isIOS && !isInStandaloneMode) {
      showIOSGuide();
    }
  }

  /* ─── Wire up all [data-pwa-install] buttons ─── */
  function updateInstallButtons(show) {
    document.querySelectorAll('[data-pwa-install]').forEach(function (el) {
      el.style.display = show || (isIOS && !isInStandaloneMode) ? '' : 'none';
      el.addEventListener('click', triggerInstall);
    });
  }

  /* ─── Custom Install Banner (2nd in-page prompt) ─── */
  function showInstallBanner() {
    if (bannerShown || isInStandaloneMode) return;
    if (document.getElementById('wcv-install-banner')) return;
    bannerShown = true;

    var banner = document.createElement('div');
    banner.id = 'wcv-install-banner';
    banner.setAttribute('role', 'banner');
    banner.setAttribute('aria-label', 'Install White Cat Vault');
    banner.innerHTML =
      '<div class="wcv-banner-inner">' +
        '<img class="wcv-banner-icon" src="/assets/icons/icon-192.png" alt="White Cat Vault icon" width="44" height="44">' +
        '<div class="wcv-banner-text">' +
          '<strong>Install White Cat Vault</strong>' +
          '<span>Get offline access · No app store needed</span>' +
        '</div>' +
        '<button class="wcv-banner-btn" id="wcv-banner-install">Install</button>' +
        '<button class="wcv-banner-close" id="wcv-banner-close" aria-label="Dismiss">✕</button>' +
      '</div>';

    var style = document.createElement('style');
    style.textContent =
      '#wcv-install-banner{' +
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
        'background:rgba(13,15,22,0.97);backdrop-filter:blur(20px);' +
        'border-top:1px solid rgba(232,197,90,0.25);' +
        'padding:12px 16px calc(12px + env(safe-area-inset-bottom)) 16px;animation:wcvSlideUp .35s cubic-bezier(.23,.1,.32,1) both;' +
        'box-shadow:0 -8px 32px rgba(0,0,0,.5);' +
      '}' +
      '@keyframes wcvSlideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}' +
      '.wcv-banner-inner{display:flex;align-items:center;gap:12px;max-width:640px;margin:0 auto}' +
      '.wcv-banner-icon{border-radius:10px;flex-shrink:0}' +
      '.wcv-banner-text{flex:1;min-width:0}' +
      '.wcv-banner-text strong{display:block;font-family:"Syne",sans-serif;font-size:13px;font-weight:700;color:#eaeaea;letter-spacing:.02em}' +
      '.wcv-banner-text span{font-size:11px;color:#6a7290;font-family:"Syne",sans-serif}' +
      '.wcv-banner-btn{background:#e8c55a;color:#080a0e;border:none;border-radius:100px;padding:9px 20px;font-family:"Syne",sans-serif;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;cursor:pointer;white-space:nowrap;transition:all .2s;flex-shrink:0}' +
      '.wcv-banner-btn:hover{background:#f0d06a;transform:scale(1.04)}' +
      '.wcv-banner-close{background:none;border:none;color:#6a7290;font-size:16px;cursor:pointer;padding:6px;flex-shrink:0;line-height:1;transition:color .2s}' +
      '.wcv-banner-close:hover{color:#e8c55a}' +
      '@media(max-width:480px){.wcv-banner-text span{display:none}}';

    document.head.appendChild(style);
    document.body.appendChild(banner);

    document.getElementById('wcv-banner-install').addEventListener('click', function () {
      triggerInstall();
    });
    document.getElementById('wcv-banner-close').addEventListener('click', function () {
      hideBanner();
      localStorage.setItem(DISMISSED_KEY, '1');
    });
  }

  function hideBanner() {
    var el = document.getElementById('wcv-install-banner');
    if (el) {
      el.style.transition = 'transform .3s ease, opacity .3s ease';
      el.style.transform = 'translateY(100%)';
      el.style.opacity = '0';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 350);
    }
  }

  /* ─── iOS-specific guide modal ─── */
  function showIOSGuide() {
    var m = document.createElement('div');
    m.id = 'wcv-ios-guide';
    m.innerHTML =
      '<div class="wcv-ios-inner">' +
        '<div class="wcv-ios-close" id="wcv-ios-close">✕</div>' +
        '<img src="/assets/icons/apple-touch-icon.png" alt="" width="64" height="64" style="border-radius:14px;margin-bottom:1rem">' +
        '<h2>Add to Home Screen</h2>' +
        '<p>Install White Cat Vault for quick access — no App Store needed.</p>' +
        '<ol>' +
          '<li>Tap the <strong>Share</strong> button <span class="ios-icon">⬆</span> at the bottom of your browser</li>' +
          '<li>Scroll down and tap <strong>"Add to Home Screen"</strong></li>' +
          '<li>Tap <strong>Add</strong> in the top-right corner</li>' +
        '</ol>' +
      '</div>';

    var s = document.createElement('style');
    s.textContent =
      '#wcv-ios-guide{position:fixed;inset:0;z-index:10000;background:rgba(5,6,10,.92);backdrop-filter:blur(16px);display:flex;align-items:flex-end;justify-content:center;animation:fadeIn .2s ease}' +
      '@keyframes fadeIn{from{opacity:0}to{opacity:1}}' +
      '.wcv-ios-inner{background:#11141c;border:1px solid rgba(232,197,90,.2);border-radius:24px 24px 0 0;padding:2rem 1.5rem 3rem;max-width:480px;width:100%;text-align:center;position:relative}' +
      '.wcv-ios-close{position:absolute;top:16px;right:16px;cursor:pointer;color:#6a7290;font-size:18px;line-height:1;padding:6px}' +
      '.wcv-ios-inner h2{font-family:"Bebas Neue",sans-serif;font-size:28px;letter-spacing:.05em;color:#e8c55a;margin-bottom:.5rem}' +
      '.wcv-ios-inner p{font-size:13px;color:#6a7290;margin-bottom:1.2rem;line-height:1.7}' +
      '.wcv-ios-inner ol{text-align:left;padding-left:1.2rem;color:#8a91b0;font-size:13px;line-height:2}' +
      '.wcv-ios-inner strong{color:#eaeaea}' +
      '.ios-icon{font-size:15px}';
    document.head.appendChild(s);
    document.body.appendChild(m);
    document.getElementById('wcv-ios-close').addEventListener('click', function () {
      if (m.parentNode) m.parentNode.removeChild(m);
    });
  }

  /* ─── Init: run on DOM ready ─── */
  function init() {
    // Initially hide install buttons; they appear when prompt is ready
    updateInstallButtons(false);
    // If already standalone → hide all install UI
    if (isInStandaloneMode) return;
    // iOS: show install button immediately (no beforeinstallprompt on iOS)
    if (isIOS) updateInstallButtons(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
