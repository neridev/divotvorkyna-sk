const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__list-link');

navToggle.addEventListener('click', function () {
    if (navList.hasAttribute('hidden')) {
        this.setAttribute('aria-expanded', 'true');
        navList.removeAttribute('hidden');

        // Set focus on first link
        // will be highlighted for keyboard users
        navLinks[0].focus();
    } else {
        navList.setAttribute('hidden', 'true');
        this.setAttribute('aria-expanded', 'false');
    }
});

document.addEventListener('keydown', (event) => {
    // Ignore IME composition
    if (event.isComposing || event.keyCode === 229) {
        return;
    }

    // Close menu with ESC key
    if (event.keyCode === 27) {
        if (!navList.hasAttribute('hidden')) {
            navToggle.setAttribute('aria-expanded', 'false');
            navList.setAttribute('hidden', 'true');
        }
    }
});

let parallaxImage = document.getElementsByClassName('parallaxThumbnail');
new simpleParallax(parallaxImage, {
    delay: .75,
    transition: 'cubic-bezier(0,0,0,1)'
});