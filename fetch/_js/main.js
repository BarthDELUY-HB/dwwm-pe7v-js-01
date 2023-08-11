"use strict";

window.addEventListener('load', (e) => {
    let nbFacts = prompt("Quel nombre d'article voulez-vous ?");
    
    // Assurer que nbFacts est un nombre positif
    nbFacts = Math.max(parseInt(nbFacts) || 1, 1);
    
    let encodedNbFacts = encodeURIComponent(nbFacts);
    
    let url = `https://cat-fact.herokuapp.com/facts/random?amount=${encodedNbFacts}`;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        let catFactContainer = document.querySelector('#cat-fact');
        
        if (Array.isArray(json)) {
            let i = 0;
            while (i < json.length) {
                let factElement = document.createElement('p');
                factElement.textContent = json[i].text;
                catFactContainer.appendChild(factElement);
                i++;
            }
        } else {
            let factElement = document.createElement('p');
            factElement.textContent = json.text;
            catFactContainer.appendChild(factElement);
        }
    })
    .catch((err) => console.error(`Fetch problem: ${err.message}`));
});