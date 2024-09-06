toggleStickyToNavbar();

function toggleStickyToNavbar() {
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 256) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky')
    }
  });
}
