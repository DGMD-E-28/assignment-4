document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode');

        // Update the icon based on the toggle state
        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '🌙'; // Moon for dark mode
        } else {
            themeIcon.textContent = '🌞'; // Sun for light mode
        }
    });
});