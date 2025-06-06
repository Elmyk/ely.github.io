// Enhanced Typing Effect
const textArray = [
  "Hi, I'm Jane Doe", 
  "I'm a Web Developer", 
  "I'm a UI/UX Designer",
  "Let's build something amazing!"
];
let typedText = document.getElementById("typedText");
let cursor = document.querySelector(".cursor");
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
  const currentText = textArray[textArrayIndex];
  
  if (isDeleting) {
    typedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(type, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  } else {
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }
}

// Start typing effect after a short delay
setTimeout(type, 1000);

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Form Handling with better validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");
  
  // Reset message
  formMessage.textContent = "";
  formMessage.style.color = "";
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    formMessage.style.color = "salmon";
    return;
  }
  
  if (!emailRegex.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "salmon";
    return;
  }
  
  // Simulate form submission
  formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
  formMessage.style.color = "lightgreen";
  this.reset();
  
  // Reset form message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = "";
  }, 5000);
});

// Scroll animation
const fadeInElements = document.querySelectorAll(".fade-in");

function checkScroll() {
  fadeInElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add("fade-in");
    }
  });
}

// Initial check
checkScroll();

// Check on scroll
window.addEventListener("scroll", checkScroll);

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-level");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Intersection Observer for skill bars
const skillsSection = document.querySelector("#skills");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(skillsSection);
