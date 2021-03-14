/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
//first variable gets element id
//second variable selects all sections
const navbar = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const LandingPageNav = () => {
    let navList = [];
    section.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');

        navList += `<li><a class="link" href="#${sectionId}">${sectionData}</li>`;
    });

    navbar.innerHTML = navList;
};

LandingPageNav();

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active