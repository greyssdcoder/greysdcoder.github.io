// Login Credentials
const VALID_EMAIL = 'ff';
const VALID_PASSWORD = 'fgd';

// Get Elements
const loginPage = document.getElementById('loginPage');
const homePage = document.getElementById('homePage');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const menuLinks = document.querySelectorAll('.menu-link');
const contentSections = document.querySelectorAll('.content-section');
const logoutBtn = document.getElementById('logoutBtn');

// Login Form Submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        // Login successful
        errorMessage.style.display = 'none';
        loginPage.style.display = 'none';
        homePage.classList.add('active');
        
        // Reset form
        loginForm.reset();
    } else {
        // Login failed
        errorMessage.style.display = 'block';
        passwordInput.value = '';
    }
});

// Menu Link Navigation
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        menuLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get the section ID
        const sectionId = this.getAttribute('data-section');
        
        // Hide all content sections
        contentSections.forEach(section => section.classList.remove('active'));
        
        // Show selected section
        document.getElementById(sectionId).classList.add('active');
    });
});

// Logout Button
logoutBtn.addEventListener('click', function() {
    // Hide home page
    homePage.classList.remove('active');
    
    // Show login page
    loginPage.style.display = 'flex';
    
    // Reset menu active state
    menuLinks.forEach(link => link.classList.remove('active'));
    menuLinks[0].classList.add('active');
    
    // Reset content sections
    contentSections.forEach(section => section.classList.remove('active'));
    contentSections[0].classList.add('active');

});
