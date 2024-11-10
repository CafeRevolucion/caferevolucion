// Smooth scroll for links in the navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }

        // Close the menu after clicking a link (for mobile view)
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Toggle menu on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar nav');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');  // Add 'active' to show menu
    menuToggle.classList.add('active'); // Hide menu-toggle when active
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');  // Remove 'active' to hide menu
    menuToggle.classList.remove('active'); // Show menu-toggle when closed
});
