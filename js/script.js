// Main JavaScript for Waseem - Cable Jointer Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 50
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link based on scroll position
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            
            if (!nameInput.value || !emailInput.value || !messageInput.value) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For this demo, we'll just show a success message
            contactForm.innerHTML = `
                <div class="alert alert-success">
                    <h4>Thank you for your message!</h4>
                    <p>We'll get back to you as soon as possible.</p>
                </div>
            `;
        });
    }

    // Newsletter subscription
    const footerSubscribe = document.querySelector('.footer-subscribe');
    if (footerSubscribe) {
        footerSubscribe.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = footerSubscribe.querySelector('input[type="email"]');
            
            if (!emailInput.value) {
                alert('Please enter your email address.');
                return;
            }
            
            // Here you would normally send the subscription to a server
            // For this demo, we'll just show a success message
            const inputGroup = footerSubscribe.querySelector('.input-group');
            inputGroup.innerHTML = `
                <div class="alert alert-success p-2 w-100">
                    Thank you for subscribing!
                </div>
            `;
        });
    }

        // Progress bar animation when in viewport    const animateProgressBars = function() {        const progressBars = document.querySelectorAll('.progress-bar');        progressBars.forEach(bar => {            // Get the target width from the inline style or data attribute            const targetWidth = bar.getAttribute('data-width') || bar.style.width;                        // Set initial width to 0            bar.style.width = '0';                        // Force a reflow to ensure the 0 width is applied before animation            bar.offsetWidth;                        // Set the transition on the element            bar.style.transition = 'width 1.5s ease';                        // Animate to target width            setTimeout(() => {                bar.style.width = targetWidth;            }, 100);        });    };    // Check if element is in viewport    const isInViewport = function(element) {        const rect = element.getBoundingClientRect();        return (            rect.top >= 0 &&            rect.left >= 0 &&            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&            rect.right <= (window.innerWidth || document.documentElement.clientWidth)        );    };    // Flag to ensure animation only happens once    let progressBarsAnimated = false;    // Trigger progress bar animation when skills section comes into view    window.addEventListener('scroll', function scrollHandler() {        const skillsSection = document.querySelector('.skills-section');        if (skillsSection && isInViewport(skillsSection) && !progressBarsAnimated) {            progressBarsAnimated = true;            animateProgressBars();            // Remove event listener after animation has been triggered            window.removeEventListener('scroll', scrollHandler);        }    });    // Store the original widths in data attributes on page load    document.querySelectorAll('.progress-bar').forEach(bar => {        const width = bar.style.width;        bar.setAttribute('data-width', width);        bar.style.width = '0'; // Start at zero    });    // Initialize progress bars when the skills section is in view on page load    const skillsSection = document.querySelector('.skills-section');    if (skillsSection && isInViewport(skillsSection)) {        setTimeout(animateProgressBars, 500);        progressBarsAnimated = true;    }
}); 