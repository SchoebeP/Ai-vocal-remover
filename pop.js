/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function () {
    var w = window,C = '___grecaptcha_cfg', cfg = w[C] = w[C] || {}, N = 'grecaptcha';
    var E = 'enterprise', a = w[N] = w[N] || {}, gr = a[E] = a[E] || {};
    gr.ready = gr.ready || function (f) {
        (cfg['fns'] = cfg['fns'] || []).push(f);
    };

    w['__recaptcha_api'] = 'https://www.google.com/recaptcha/enterprise/';
    (cfg['enterprise'] = cfg['enterprise'] || []).push(true);
    (cfg['render'] = cfg['render'] || []).push('6LfCVLAUAAAAALFwwRnnCJ12DalriUGbj8FW_J39');
    w['__google_recaptcha_client'] = true;
    var d = document, po = d.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://www.gstatic.com/recaptcha/releases/Km9gKuG06He-isPsP6saG8cn/recaptcha__fr.js';
    po.crossOrigin = 'anonymous';
    po.integrity = 'sha384-rV239rtaViXpbxhz+S2CGLxh293/2iRDeUANHAVqFoYJ61MbgWXr3+J+VGM89QEG';
    var e = d.querySelector('script[nonce]'), n = e && (e['nonce'] || e.getAttribute('nonce'));
    if (n) {
        po.setAttribute('nonce', n);
    }
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
})();