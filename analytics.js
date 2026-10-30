(function () {
    const GA_ID = window.LAKY_CONFIG && window.LAKY_CONFIG.gaId;
    if (!GA_ID) return;

    const KEY = 'lakyMakyConsent';

    function getChoice() {
        try { return localStorage.getItem(KEY); } catch (e) { return null; }
    }
    function setChoice(value) {
        try { localStorage.setItem(KEY, value); } catch (e) {}
    }

    function loadGA() {
        if (window.__gaLoaded) return;
        window.__gaLoaded = true;

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        gtag('js', new Date());
        gtag('config', GA_ID, { anonymize_ip: true });
    }

    function removeBanner() {
        const banner = document.getElementById('cookieBanner');
        if (banner) banner.remove();
    }

    function showBanner() {
        if (document.getElementById('cookieBanner')) return;
        const banner = document.createElement('div');
        banner.id = 'cookieBanner';
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Postavke kolačića');
        banner.innerHTML =
            '<p>Koristimo Google Analytics za anonimnu statistiku posjeta kako bismo poboljšali stranicu. ' +
            'Više u <a href="privatnost.html#privatnost">Politici privatnosti</a>.</p>' +
            '<div class="cookie-actions">' +
            '<button type="button" class="cookie-btn" data-consent="denied">Odbijam</button>' +
            '<button type="button" class="cookie-btn cookie-accept" data-consent="granted">Prihvaćam</button>' +
            '</div>';
        document.body.appendChild(banner);

        banner.addEventListener('click', function (event) {
            const button = event.target.closest('[data-consent]');
            if (!button) return;
            const value = button.dataset.consent;
            setChoice(value);
            removeBanner();
            if (value === 'granted') loadGA();
        });
    }

    const choice = getChoice();
    if (choice === 'granted') loadGA();
    else if (!choice) showBanner();

    // Link u footeru za promjenu odluke
    document.addEventListener('click', function (event) {
        if (!event.target.closest('#cookieSettings')) return;
        event.preventDefault();
        showBanner();
    });
})();
