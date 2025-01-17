window.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.getElementById('banner');
    const navbar = document.getElementById('navbar');

    function adjustPadding() {
        const bannerHeight = banner.offsetHeight;
        if (navbar.classList.contains('fixed-top')) {
            document.body.style.paddingTop = `${bannerHeight}px`;
        } else {
            document.body.style.paddingTop = '0';
        }
    }

    adjustPadding();

    window.addEventListener('resize', adjustPadding);
});
window.addEventListener('scroll', function() {
    var banner = document.getElementById('banner');
    var navbar = document.getElementById('navbar');
    var bannerHeight = banner.offsetHeight;
    if (window.scrollY >= bannerHeight) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});

