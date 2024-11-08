// Function to handle smooth scrolling when a navbar link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset to account for header
            behavior: 'smooth'
        });
    });
});

// Function to handle form submission and display success message
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Input validation (simple)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields before submitting.');
        return; // If validation fails, stop form submission
    }

    // Simulate a successful form submission
    document.getElementById('form-message').classList.remove('hidden');
    document.getElementById('contact-form').reset(); // Clear the form fields

    // Optional: You can send the form data to a backend or an email service here

    // Hide the success message after 5 seconds (optional)
    setTimeout(function() {
        document.getElementById('form-message').classList.add('hidden');
    }, 5000);
});

// Optional: Adding a small "scroll to top" button that appears when the user scrolls down
window.addEventListener('scroll', function () {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

// Scroll to top functionality
document.getElementById('scroll-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});