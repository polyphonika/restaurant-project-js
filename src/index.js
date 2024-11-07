import "./css/style.css";

import createHomePage from './js/home.js';

document.addEventListener('DOMContentLoaded', () => {
    const homePage = createHomePage();
    homePage.render();
    });

