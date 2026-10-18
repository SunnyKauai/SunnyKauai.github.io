/* ============================================================
   晴天Kauai个人站点 · 交互脚本
   - 页脚年份
   - 欢迎页代码打字动画
   - 滚动入场（滚动事件驱动，滚轮滑动也会立即触发）
   - 顶部栏文字索引高亮
   - 主页与项目页之间的淡出 / 淡入
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function all(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  /* ---------- 页脚年份 ---------- */
  all('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- 欢迎页代码滚动文本 ---------- */
  var typing = document.querySelector('.code-typing .code-text');

  if (typing) {
    var phrases = [
      '一只正在学代码的业余程序员',
      '喜欢把想法变成能跑起来的东西',
      'Hello, World!',
      'git commit -m "keep learning"'
    ];

    if (reduceMotion) {
      typing.textContent = phrases[0];
    } else {
      (function runTyping() {
        var phraseIndex = 0;
        var charIndex = 0;
        var deleting = false;

        function tick() {
          var phrase = phrases[phraseIndex];
          typing.textContent = phrase.slice(0, charIndex);

          var delay;

          if (!deleting) {
            charIndex += 1;
            if (charIndex > phrase.length) {
              deleting = true;
              delay = 2600;
            } else {
              delay = 95;
            }
          } else {
            charIndex -= 1;
            if (charIndex < 0) {
              deleting = false;
              charIndex = 0;
              phraseIndex = (phraseIndex + 1) % phrases.length;
              delay = 500;
            } else {
              delay = 45;
            }
          }

          window.setTimeout(tick, delay);
        }

        tick();
      })();
    }
  }

  /* ---------- 顶部栏状态 + 滚动入场 ---------- */
  var nav = document.getElementById('nav');
  var navLinks = nav ? all('.nav-links a[href^="#"]', nav) : [];
  var navSections = navLinks
    .map(function (link) {
      return document.getElementById(link.getAttribute('href').slice(1));
    })
    .filter(Boolean);
  var reveals = all('.reveal');

  if (reduceMotion) {
    reveals.forEach(function (el) {
      el.classList.add('in');
    });
  }

  var scrollTicking = false;

  function updateOnScroll() {
    scrollTicking = false;

    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }

    if (navLinks.length && navSections.length) {
      var line = window.scrollY + window.innerHeight * 0.35;
      var active = navSections[0].id;

      navSections.forEach(function (section) {
        if (section.offsetTop <= line) active = section.id;
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        active = navSections[navSections.length - 1].id;
      }

      navLinks.forEach(function (link) {
        var isActive = link.getAttribute('href') === '#' + active;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    }

    if (!reduceMotion) {
      var limit = window.innerHeight - 8;

      reveals.forEach(function (el) {
        if (el.classList.contains('in')) return;
        if (el.getBoundingClientRect().top < limit) {
          el.classList.add('in');
        }
      });
    }
  }

  function requestScrollUpdate() {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateOnScroll);
  }

  updateOnScroll();
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate);
  window.addEventListener('hashchange', requestScrollUpdate);
  window.addEventListener('pageshow', requestScrollUpdate);
  window.addEventListener('load', requestScrollUpdate);

  /* ---------- 页面切换：淡出后跳转，新页面由 CSS 淡入 ---------- */
  if (reduceMotion) return;

  var fadeDuration = 500;
  var leaving = false;
  var curtain = document.createElement('div');

  curtain.className = 'page-curtain';
  curtain.setAttribute('aria-hidden', 'true');
  document.body.appendChild(curtain);

  document.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    var link = event.target.closest ? event.target.closest('a') : null;

    if (!link) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;

    var href = link.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;

    var url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (url.origin !== window.location.origin) return;
    if (!/\.html?$/i.test(url.pathname) && url.pathname !== '/') return;

    event.preventDefault();
    if (leaving) return;

    leaving = true;
    curtain.classList.add('is-active');

    window.setTimeout(function () {
      window.location.href = link.href;
    }, fadeDuration);

    // 万一跳转被浏览器拦截，避免页面一直停留在遮罩层。
    window.setTimeout(function () {
      leaving = false;
      curtain.classList.remove('is-active');
    }, fadeDuration + 2800);
  });

  window.addEventListener('pageshow', function () {
    leaving = false;
    curtain.classList.remove('is-active');
  });
})();
