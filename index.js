// function toggleMenu(){
//     let sidebar = document.getElementById("sidebar");
//     if(sidebar.style.left=== '-250px'){
//         sidebar.style.left='0px';
//     }
//     else{
//         sidebar.style.left='-250px';
//     }

// }

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