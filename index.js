function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
        main.classList.add('main-full');
    } else {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
        main.classList.remove('main-full');
    }
}
 
window.onload = function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.add('sidebar-open');
    main.classList.remove('main-full');
};

document.getElementById('footer-scroll-left').onclick = function() {
    document.getElementById('footer-videos-row').scrollBy({left: -300, behavior: 'smooth'});
  };
  document.getElementById('footer-scroll-right').onclick = function() {
    document.getElementById('footer-videos-row').scrollBy({left: 300, behavior: 'smooth'});
  };

// Remove asides on mobile
function handleMobileAsides() {
    const sidebar = document.getElementById('sidebar');
    const recommendations = document.querySelector('.recommendations');
    const main = document.querySelector('main');
    if (window.innerWidth <= 600) {
        if (sidebar) sidebar.classList.add('sidebar-closed');
        if (recommendations) recommendations.classList.add('recommendations-closed');
        if (main) main.classList.add('main-full');
    } else {
        if (sidebar) sidebar.classList.remove('sidebar-closed');
        if (recommendations) recommendations.classList.remove('recommendations-closed');
        if (main) main.classList.remove('main-full');
    }
}

window.addEventListener('load', () => {
    handleMobileAsides();
});
window.addEventListener('resize', () => {
    handleMobileAsides();
});