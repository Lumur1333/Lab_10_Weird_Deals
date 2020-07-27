/*
Lucas Murdock
200304037
27July2020
*/

let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = 'https://lumur1333.github.io/json-example/products.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function () {
    let iScreamInc = request.response;
    console.log(iScreamInc);
    populateHeader(iScreamInc);
    topDeals(iScreamInc);
}

function populateHeader(jsonObj) {
    let headerH1 = document.createElement('h1');
    headerH1.textContent = jsonObj['companyName'];
    header.appendChild(headerH1);
    let headerPara = document.createElement('p');
    headerPara.textContent = jsonObj['headOffice'];
    header.appendChild(headerPara);
    let headerP2 = document.createElement('p');
    headerP2.textContent = 'Established: ' + jsonObj['established'];
    header.appendChild(headerP2);
}

function topDeals(jsonObj) {
    let topDeals = jsonObj['topDeals'];
    for (let i = 0; i < topDeals.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');

        img.setAttribute('src', 'images/' + topDeals[i].image);
        img.setAttribute('alt', topDeals[i].name);
        h2.textContent = topDeals[i].name;
        p1.textContent = 'Price: $' + topDeals[i].price;
        p2.textContent = topDeals[i].description;


        let features = topDeals[i].features;
        for (let j = 0; j < features.length; j++) {
            let listItem = document.createElement('li');
            listItem.textContent = features[j];
            list.appendChild(listItem);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);
    }
}

//GitHub Link: https://lumur1333.github.io/json-example/products.json