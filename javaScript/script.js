window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 75) {
        navbar.classList.add('scrolled');
    } 
    else 
    {
        navbar.classList.remove('scrolled');
    }
});   