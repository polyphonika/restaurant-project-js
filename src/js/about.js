import pageImage from "../assets/salford.png"

const createAboutPage = () => {
    const content = {
        title: 'About Porta',
        paragraphs: [
            'Ben and Joe’s first restaurant ‘Joseph Benjamin’ opened in Chester in 2006 and went on to be awarded a Michelin Bib Gourmand for 12 consecutive years. Ben ran the restaurant ‘front of house’ and ‘did the books’ while award-winning chef Joe led the kitchen. For (too) many years, they worked every single shift. JB’s (as it was known) was a busy, popular neighbourhood bistro doing proper food with quality ingredients.'
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

export default createAboutPage;
