document.addEventListener('DOMContentLoaded', () => {
  // 1. تحديد العناصر من الصفحة
  const menuToggle = document.querySelector('.menu-toggle');
  const siteHeader = document.querySelector('.site-header');
  const desktopNav = document.querySelector('.desktop-nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // منع إغلاق القائمة فوراً عند الضغط

      // إضافة/إزالة الكلاسات لمنع أي تعارض مع الـ CSS
      if (siteHeader) siteHeader.classList.toggle('active');
      if (desktopNav) desktopNav.classList.toggle('active');
    });

    // 2. إغلاق القائمة تلقائياً عند الضغط على أي رابط داخلها
    const navLinks = document.querySelectorAll('.desktop-nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (siteHeader) siteHeader.classList.remove('active');
        if (desktopNav) desktopNav.classList.remove('active');
      });
    });

    // 3. إغلاق القائمة عند النقر في أي مكان خارج الـ Header
    document.addEventListener('click', (e) => {
      if (siteHeader && !siteHeader.contains(e.target)) {
        siteHeader.classList.remove('active');
        if (desktopNav) desktopNav.classList.remove('active');
      }
    });
  }
});
