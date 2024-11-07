import pageImage from "../assets/menu.png"

const createMenuPage = () => {
    const content = {
        title: 'Menu - Salford, Manchester',
        paragraphs: [
            'Rabbit Al Ajillo – rabbit, garlic, olive oil and white wine 10.75',
            'Gambas - grilled wild Atlantic prawns with ajillo dressing 10.95',
            'Pulpo a la Gallega – Galician style octopus and potatoes 14.50',
            'Grilled chicken thighs, mojo picón 8.75'
        ],
        image: pageImage
    };

    const render = () => {
        const contentContainer = document.getElementById('content');
        
        const h1 = document.createElement('h1');
        h1.textContent = content.title;
        contentContainer.appendChild(h1);

        content.paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.textContent = paragraph;
            contentContainer.appendChild(p);
        });

        const image = document.createElement('img');
        image.src = content.image;
        contentContainer.appendChild(image);
    };

    return { render };
};

export default createMenuPage;
