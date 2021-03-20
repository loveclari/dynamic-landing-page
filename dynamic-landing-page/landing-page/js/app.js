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
    //selecting each section id and data attribute through a loop - creating a list
    section.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');

        navList += `<li><a class="link" href="#${sectionId}">${sectionData}</li>`;
    });
    //adding the list to the HTML
    navbar.innerHTML = '';

    /**
     * End Helper Functions
     * Begin Main Functions
     *
     */

    // build the nav

    // Add class 'active' to section when near top of viewport

    //Grabbing the position from the viewport

    const getActiveSection = () => {
        let position = section.getBoundingClientRect().top;
        return position;
    };

    //If the position in x add my classlist otherwise remove that class

    const activeSection = () => {
        sections.forEach((section) => {
            if (section === getActiveSection()) {
                section.classList.add('your-active-class');
            } else section.classList.remove('your-active-class');
        });
        // };

        //adding an event listener if activesection is at the top by scroll then the class will be true

        section.addEventListener('scroll', (getActiveSection) => {
            sections.forEach((section) => {
                if (getAactiveSection === 10) {
                    getActiveSection.classList.add('your-active-class');
                }
            });
        });

        // Scroll to anchor ID using scrollTO event

        /**
         * End Main Functions
         * Begin Events
         *
         */

        // Build menu

        // Scroll to section on link click

        // Set sections as active
    };
};

LandingPageNav();
