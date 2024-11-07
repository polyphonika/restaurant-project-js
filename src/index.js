import "./css/style.css";

import createHomePage from './js/home.js';
import createMenuPage from "./js/menu.js";
import createAboutPage from "./js/about.js";

function pageRendering() {
    const clearPage = () => {
        const container = document.getElementById('content');
        container.innerHTML = '';
    }
    
    const buttonListeners = () => {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                clearPage();
                const pageId = e.target.id;
                if (pageId === 'home') {
                    createHomePage().render();
                } else if (pageId === 'menu') {
                    createMenuPage().render();
                } else if (pageId === 'about') {
                    createAboutPage().render();
                }
            })
        });
    }

    return { buttonListeners }
}

document.addEventListener('DOMContentLoaded', () => {
    const homePage = createHomePage();
    homePage.render();
    pageRendering().buttonListeners();    
    });



