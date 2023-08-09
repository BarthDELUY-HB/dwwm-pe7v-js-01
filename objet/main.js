"use strict";

function generateFilmHeaderRow()
{
    let headers = ['Id', 'Titre', 'Année', 'Durée', 'Réalisateur', 'Genre', 'Studio'];
    
    // Création des éléments HTML dont on va avoir besoin
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // On parcourt la liste des en-têtes, on crée les éléments TH correspondants
    // puis on les rattache au tr
    let i = 0;
    while (i<headers.length) {
        let th = document.createElement('th');
        th.textContent = headers[i];
        tr.appendChild(th);
        i++;
    }

    // On rattache le tr au thead
    thead.appendChild(tr);

    return thead;
}

function generateFilmDataRow(film)
{
    let tr = document.createElement('tr');

    return tr;
}

function generateFilmTBody(films)
{
    let tbody = document.createElement('tbody');
    let i = 0;
    while (i<films.length) {
        let tr = generateFilmDataRow(films[i]);
        tbody.appendChild(tr);
        i++;
    }
    return tbody;
}

function convertFilmListToHTML(films)
{
    let table = document.createElement('table');

    let thead = generateFilmHeaderRow();

    let tbody = generateFilmTBody(films);


    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}


window.addEventListener('load', function() {
    const films = [
        [ 1, "Titanic", 1999, "3h17", ["Cameron", "James"], "Historique", "20th Century"],
        [ 2, "SuperMario", 2023, "1h49", ["Kojima", "Ideo"], "Jeu vidéo", "Nintendo"],
        [ 3, "Marios Bros", 1994, "1h24", ["Doe", "John"], "Nanard", "Paramount"],
        [ 4, "Narnia", 2005, "2h12", ["Adamson", "Andrew"], "Heroic Fantasy", "Paramount"],
    ];

    console.table(films);

    let htmlTable = convertFilmListToHTML(films);
    document.querySelector('body').appendChild(htmlTable);

});