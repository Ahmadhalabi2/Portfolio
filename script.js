document.addEventListener('DOMContentLoaded', () => {
  // --- 1. تشغيل قائمة الهامبرغر للموبايل ---
  const menuToggle = document.querySelector('.menu-toggle');
  const siteHeader = document.querySelector('.site-header');
  const desktopNav = document.querySelector('.desktop-nav');

  if (menuToggle && siteHeader) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // تبديل حالة الفتح والإغلاق
      const isOpen = siteHeader.classList.toggle('active');
      siteHeader.classList.toggle('nav-open', isOpen);
      
      // تحديث حالة الوصول accessibility
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // إغلاق القائمة عند الضغط على أي رابط
    const navLinks = document.querySelectorAll('.desktop-nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        siteHeader.classList.remove('active', 'nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // إغلاق القائمة عند الضغط في أي مكان خارج الـ Header
    document.addEventListener('click', (e) => {
      if (!siteHeader.contains(e.target)) {
        siteHeader.classList.remove('active', 'nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 2. تشغيل تبديل الثيمات (Theme Switcher) ---
  const themeButton = document.querySelector('.theme-button');
  const themePicker = document.querySelector('.theme-picker');
  const themeButtons = document.querySelectorAll('.theme-menu button');

  if (themeButton && themePicker) {
    themeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      themePicker.classList.toggle('open');
      const isExpanded = themePicker.classList.contains('open');
      themeButton.setAttribute('aria-expanded', isExpanded);
    });

    themeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedTheme = btn.getAttribute('data-theme');
        if (selectedTheme === 'midnight') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', selectedTheme);
        }
        themePicker.classList.remove('open');
        themeButton.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!themePicker.contains(e.target)) {
        themePicker.classList.remove('open');
        themeButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 3. تحديث سنة الحقوق تلقائياً في الـ Footer ---
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 4. تأثير الظهور التدريجي عند السكرول (Reveal Animations) ---
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;
    reveals.forEach((el) => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('is-visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // تشغيل أولي للعناصر الظاهرة فوراً
});
