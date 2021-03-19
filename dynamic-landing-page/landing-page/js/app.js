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
//variable selection parent id and query selector for all sections
const navbar = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//Functional code with variable with an empty array
const LandingPageNav = () => {
    let navList = [];

    //selecting each section id and data attribute through a loop - creating a list
    section.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');

        navList += `<li><a class="link" href="#${sectionId}">${sectionData}</li>`;
    });
    //adding the list to the HTML
    navbar.innerHTML = navList;
};

LandingPageNav();


//determining the position on viewport and returning the position

const activeSection = (section) => {
    let position = section.getBoundingClientRect().top;
    return position;
};

//creating a function with a condition and a loop for each section if > or < than to add or remove a class

const makeActive = () => {
    section.forEach((section) => {
        const changeClass = activeSection(section);
        if (changeClass < 100 && changeClass > -100) {
            section.classList.add('your-active-class');
        } else section.classList.remove('your-active-class');
    });
};

//calling the eventlistener
this.addEventListener('scroll', makeActive);
