const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove('open');
//         menuOpen = false;
//     }
// });

let nav = document.querySelector('.navbarBlock')
let fas = document.querySelector('.logog')

fas.addEventListener('click', function() {
    nav.style.transform = 'translateY(-100%)'
})

menuBtn.addEventListener('click', function() {
    nav.style.transform = 'translateX(0%)'
})