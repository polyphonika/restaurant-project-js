import pageImage from "../assets/langostinos.png"

const createHomePage = () => {
    const content = {
        title: 'Porta Tapas - Manchester',
        paragraphs: [
            'The menu represents many tapas bar classics, with additional daily specials. Our team of chefs prepare everything from scratch using top-quality ingredients imported from some of the very best producers in Spain.',
            'Simply put, Porta is the kind of place to relax in - unpretentious and comfortable with good music, beer, wine and food.'
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

export default createHomePage;
