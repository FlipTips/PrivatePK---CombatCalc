// Initialize the Combat Calculator
document.addEventListener('DOMContentLoaded', function() {
    console.log('Combat Calculator loaded successfully');
    
    // Logo error handling - show fallback if image fails to load
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('error', function() {
            console.log('Logo image not found, using fallback');
            this.style.display = 'none';
            // Create fallback text
            const fallback = document.createElement('div');
            fallback.className = 'logo-fallback';
            fallback.textContent = 'PK';
            this.parentElement.appendChild(fallback);
        });
    }
});
