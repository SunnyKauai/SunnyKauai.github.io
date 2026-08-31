/* ============================================================
   晴天Kauai · 个人主页 交互脚本
   - 滚动入场动画（IntersectionObserver）
   - 打字机副标题
   - 导航栏滚动阴影
   - 页脚年份
   制作：DeepSeek Harness
   ============================================================ */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 页脚年份 ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- 打字机副标题 ---------- */
  var typedEl = document.getElementById('typed');
  if (typedEl) {
    var phrases = [
      '一只正在学代码的业余程序员',
      '喜欢把想法变成能跑起来的东西',
      'Hello, World!',
      'git commit -m "keep learning"'
    ];

    if (prefersReduced) {
      // 减弱动态效果：直接展示第一句
      typedEl.textContent = phrases[0];
    } else {
      var pi = 0;
      var ci = 0;
      var deleting = false;

      function tick() {
        var phrase = phrases[pi];
        typedEl.textContent = phrase.slice(0, ci);

        var delay;
        if (!deleting) {
          ci += 1;
          if (ci > phrase.length) { deleting = true; delay = 2200; }
          else { delay = 90; }
        } else {
          ci -= 1;
          if (ci < 0) {
            deleting = false;
            ci = 0;
            pi = (pi + 1) % phrases.length;
            delay = 400;
          } else {
            delay = 38;
          }
        }
        setTimeout(tick, delay);
      }
      tick();
    }
  }

  /* ---------- 滚动入场动画 ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- 导航栏滚动阴影 ---------- */
  var nav = document.getElementById('nav');
  if (nav) {
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
