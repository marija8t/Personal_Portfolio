//Hamburger for hidden menu
document.querySelector('.nav-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open'); // Toggle "open" class on and off
});

