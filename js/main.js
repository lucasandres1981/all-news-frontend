/*


const apiKey = 'bb1ccfb2ee7d70af539c0e2173b4d25c';
const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apiKey;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const articles = data.articles;
        let article = articles[0];
        document.getElementById('title1').innerText = article.title;
        document.getElementById('body1').innerText = article.description;
        document.getElementById('image1').src = article.image;

        // Crea un fragmento de documento para almacenar los elementos de las noticias
        let newsFragment = document.createDocumentFragment();
        for (let i = 1; i <= 4; i++) {
            article = articles[i];
            let newsArticle = document.createElement('article');
            let newsTitle = document.createElement('h1');
            let newsBody = document.createElement('p');
            let newsImage = document.createElement('img'); // Crea el elemento de imagen
            newsTitle.innerText = article.title;
            newsBody.innerText = article.description;
            newsImage.src = article.image; // Asigna el URL de la imagen al atributo src del elemento
            newsArticle.appendChild(newsImage); // Agrega el elemento de imagen al artículo
            newsArticle.appendChild(newsTitle);
            newsArticle.appendChild(newsBody);
            newsFragment.appendChild(newsArticle);
        }

        // Añade las noticias al bloque de la derecha
        document.querySelector('.right-block').appendChild(newsFragment);
    })
    .catch(error => console.error('Error:', error));*/
