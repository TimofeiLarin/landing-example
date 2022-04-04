(() => {
  var e = {
      126: () => {
        const e = document.querySelector('.slides'),
          r = document.querySelector('.header_slider_prev'),
          t = document.querySelector('.header_slider_next'),
          o = document.querySelectorAll('.slide');
        let c = 0;
        r.addEventListener('click', () => {
          c--, l();
        }),
          t.addEventListener('click', () => {
            c++, l();
          }),
          setInterval(() => {
            c++, l(), c > o.length - 1 && (counter = 1);
          }, 5e3);
        const l = () => {
            c > o.length - 1 ? (c = 0) : c < 0 && (c = o.length - 1);
            let r = 100 * -c;
            return (e.style.transform = 'translateX(' + r + '%)'), c;
          },
          n = document.querySelector('.header_burger'),
          s = document.querySelector('.header_burger_btn'),
          u = document.querySelector('.header_burger_cross'),
          d = document.querySelectorAll('.header_burger_item');
        (s.onclick = () => n.classList.add('active')),
          (u.onclick = () => n.classList.remove('active')),
          d.forEach((e) => {
            e.onclick = () => n.classList.remove('active');
          });
      },
      531: (e, r, t) => {
        'use strict';
        t.r(r);
      },
    },
    r = {};
  function t(o) {
    var c = r[o];
    if (void 0 !== c) return c.exports;
    var l = (r[o] = { exports: {} });
    return e[o](l, l.exports, t), l.exports;
  }
  (t.r = (e) => {
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
      Object.defineProperty(e, '__esModule', { value: !0 });
  }),
    (() => {
      'use strict';
      t(531), t(126);
    })();
})();
//# sourceMappingURL=scripts.95effc8206b72b78a4a6.js.map
