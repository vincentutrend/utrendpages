// UTrend 共用前端互動腳本（原生 JS，無相依套件）
document.addEventListener('DOMContentLoaded', function () {
  // 1. 導覽列捲動時加上陰影並縮小內距
  var navbar = document.getElementById('navbar');
  var navbarInner = document.getElementById('navbar-inner');
  if (navbar) {
    var ticking = false;
    function updateNavbar() {
      if (window.scrollY > 40) {
        navbar.classList.add('shadow-md');
        if (navbarInner) { navbarInner.classList.remove('py-3'); navbarInner.classList.add('py-2'); }
      } else {
        navbar.classList.remove('shadow-md');
        if (navbarInner) { navbarInner.classList.remove('py-2'); navbarInner.classList.add('py-3'); }
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(updateNavbar); ticking = true; }
    });
    updateNavbar();
  }

  // 2. 手機版漢堡選單開關
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuToggle && mobileMenu) {
    var icon = menuToggle.querySelector('.material-symbols-outlined');
    menuToggle.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      if (icon) icon.textContent = isOpen ? 'menu' : 'close';
    });
    // 點選單內連結後自動收合
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // 3. 區塊捲動進場動畫（.reveal → .is-visible）
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      // 不支援時直接顯示
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }
});
