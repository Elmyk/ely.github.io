// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Header color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#121212';
        header.style.boxShadow = '0 2px 10px rgba(209, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = '#121212';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    }
});

// Project hover effect enhancement
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    
    project.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}
