// /**
//  *
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
//  */

// /**
//  * Define Global Variables
//  *
//  */
// //first variable gets element id
// //second variable selects all sections
// //variable selection parent id and query selector for all sections
const navbar = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//Functional code with variable with an empty array
const LandingPageNav = () => {
    section.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');
        navbar.innerHTML += `<li><a class="link" href="#${sectionId}" data-link=${sectionId}">${sectionData}</li>`;
    });

    const sections = document.querySelectorAll('.navbar__menu ul a');

    //scrol smooth on click

    for (const section of sections) {
        section.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
                top: offsetTop,
                behavior: 'smooth',
            });
        });
    }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

//Grabbing the position from the viewport

const getTopSection = (section) => {
    const position = section.getBoundingClientRect().top;
    return position;
};

//If the position in x add my classlist otherwise remove that class

const activeSection = () => {
    Array.from(section).forEach(function(section) {
        if (getTopSection(section) < 100 && getTopSection(section) >= -100) {
            section.classList.add('your-active-class');
        } else section.classList.remove('your-active-class');
    });
};

//THIS IS THE SCROLL EVENT LISTENER//

//adding an event listener if activesection is at the top by scroll then the class will be true

window.addEventListener('scroll', activeSection);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

LandingPageNav();

// Set sections as active
activeSection();

//scroll to link