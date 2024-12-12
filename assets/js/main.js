window.addEventListener('load', function () {
    const homeSection = document.getElementById('home');
    const header = document.querySelector('header'); // Assuming <header> contains your header

    if (homeSection) {
        // Check if the device is mobile
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            homeSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll
                block: 'start'      // Align it to the top
            });
        }

        if (isMobile) {
            // Get the height of the header
            const headerHeight = header.offsetHeight;
            // Apply the header's height as padding-top to #home
            homeSection.style.paddingTop = headerHeight + 5 + 'px';
        }
    }

});


// Add active class to the clicked link
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-links');

// Make sure the hamburger menu exists before adding the event listener
if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Toggle the visibility of the menu on small screens
    });
}
