// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Side Drawer Functionality
const hamburgerMenu = document.getElementById('hamburgerMenu');
const sideDrawer = document.getElementById('sideDrawer');
const closeDrawer = document.getElementById('closeDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    sideDrawer.classList.toggle('open');
    drawerOverlay.classList.toggle('active');
});

closeDrawer.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    sideDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
});

drawerOverlay.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    sideDrawer.classList.remove('open');
    this.classList.remove('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .drawer-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Close drawer if open
        if (sideDrawer.classList.contains('open')) {
            hamburgerMenu.classList.remove('active');
            sideDrawer.classList.remove('open');
            drawerOverlay.classList.remove('active');
        }
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Header color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#121212';
        header.style.boxShadow = '0 2px 10px rgba(209, 0, 0, 0.3)';
    } else {
        header.style.backgroundColor = '#121212';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Back to top button
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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

// Animate skill progress bars when they come into view
const skillProgressBars = document.querySelectorAll('.skill-progress');

function animateProgressBars() {
    skillProgressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            const level = bar.getAttribute('data-level');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = level + '%';
            }, 100);
        }
    });
}

// Initial check
animateProgressBars();

// Check on scroll
window.addEventListener('scroll', animateProgressBars);

// Form submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = '#444';
        }
    });
    
    if (isValid) {
        // Simulate form submission
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.classList.remove('error');
        formMessage.classList.add('success');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.reset();
            formMessage.classList.remove('success');
            formMessage.textContent = '';
        }, 3000);
    } else {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
    }
});

// Typewriter effect for tagline (optional)
const tagline = document.querySelector('.tagline');
const text = "Web Developer & Designer";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start the typewriter effect after 1 second
setTimeout(typeWriter, 1000);
