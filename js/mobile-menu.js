// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileBtn && mainNav) {
        mobileBtn.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });
        
        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('show');
            });
        });
    }
});