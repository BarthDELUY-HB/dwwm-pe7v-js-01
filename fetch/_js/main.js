"use strict";

function getCatFacts(number)
{    
    let encodedNbFacts = encodeURIComponent(number);
    
    let url = `https://cat-fact.herokuapp.com/facts/random?amount=${encodedNbFacts}`;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        let catFactContainer = document.querySelector('#cat-fact-list');
        
        /* Supprimer les faits précédents */
        /* 1ère possiblité : catFactContainer.innerHTML = ''; */
        let lis = catFactContainer.querySelectorAll('li');
        let i = 0;
        while (i<lis.length) {
            catFactContainer.removeChild(lis[i]);
            i++;
        }

        if (Array.isArray(json)) {
            let i = 0;
            while (i < json.length) {
                let factElement = document.createElement('li');
                factElement.textContent = json[i].text;
                catFactContainer.appendChild(factElement);
                i++;
            }
        } else {
            let factElement = document.createElement('li');
            factElement.textContent = json.text;
            catFactContainer.appendChild(factElement);
        }
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
}

function onFormSubmit(event)
{
    event.preventDefault();

    let number = document.querySelector('#nb-facts').value;
    getCatFacts(number);
    return false;
}

window.addEventListener('load', function() {
    document.querySelector('#fact-form').addEventListener('submit', onFormSubmit);
});

