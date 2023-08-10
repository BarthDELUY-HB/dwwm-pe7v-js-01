"use strict";

function generateFilmHeaderRow() {
    let headers = ['Id', 'Titre', 'Année', 'Durée', 'Réalisateur', 'Genre', 'Studio'];

    // Création des éléments HTML dont on va avoir besoin
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    // On parcourt la liste des en-têtes, on crée les éléments TH correspondants
    // puis on les rattache au tr
    let i = 0;
    while (i < headers.length) {
        let th = document.createElement('th');
        th.textContent = headers[i];
        tr.appendChild(th);
        i++;
    }

    // On rattache le tr au thead
    thead.appendChild(tr);

    return thead;
}

function directorToString(director) {
    return director.name + ", " + director.firstname;
}

function generateFilmDataRow(film) {
    let attributes = ['id', 'title', 'date', 'duration', 'director', 'genre', 'studio'];

    let tr = document.createElement('tr');

    let i = 0;
    while (i < attributes.length) {
        let td = document.createElement('td');
        td.textContent = film[attributes[i]];
        if (attributes[i] == 'director') {
            td.textContent = directorToString(film.director);
        }
        tr.appendChild(td);
        i++;
    }

    return tr;
}

function generateFilmTBody(films) {
    let tbody = document.createElement('tbody');
    let i = 0;
    while (i < films.length) {
        let tr = generateFilmDataRow(films[i]);
        tbody.appendChild(tr);
        i++;
    }
    return tbody;
}

function convertFilmListToHTML(films) {
    let table = document.createElement('table');

    let thead = generateFilmHeaderRow();

    let tbody = generateFilmTBody(films);


    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}


window.addEventListener('load', function () {
    let films = [];
    let titanic = new Film ();
    titanic.id = 1;
    titanic.title = "Titanic";
    titanic.date = 1999;
    titanic.duration = "3h17";
    let director = new Person();
    director.name = "Cameron";
    director.firstname = "James";
    titanic.director = director;
    titanic.genre = "Historique";
    titanic.studio = "20th Century";
    films.push(titanic);
    let supermario = new Film ();
    supermario.id = 2;
    supermario.title = "SuperMario";
    supermario.date = 2023;
    supermario.duration = "1h49";
    director = new Person ();
    director.name = "Kojima" ;
    director.firstname = "Ideo";
    supermario.director = director; 
    supermario.genre = "Jeu video";
    supermario.studio = "Nintendo";
    films.push(supermario);
    let narnia = new Film ();
        narnia.id = 4;
        narnia.title = "Narnia";
        narnia.date = 2005;
        narnia.duration = "2h12";
        director = new Person();
        director.name = "Adamson";
        director.firstname = "Andrew";
        narnia.director = director;
        narnia.genre = "Heroic Fantasy";
        narnia.studio = "Paramount";
    films.push(narnia);
    let marioBros = new Film ();
        marioBros.id = 3;
        marioBros.title = "marioBros";
        marioBros.date = 1994;
        marioBros.duration = "1h24";
        director = new Person();
        director.name = "John";
        director.firstname = "Doe";
        marioBros.director = director;
        marioBros.genre = "Nanard";
        marioBros.studio = "Paramount";
    films.push(marioBros);

    console.log(films);

    let htmlTable = convertFilmListToHTML(films);
    document.querySelector('body').appendChild(htmlTable);

});