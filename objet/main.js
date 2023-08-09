"use strict";

function convertFilmListToHTML(films)
{

}


window.addEventListener('load', function() {
    const films = [
        [ 1, "Titanic", 1999, "3h17", ["Cameron", "James"], "Historique", "20th Century"],
        [ 2, "SuperMario", 2023, "1h49", ["Kojima", "Ideo"], "Jeu vidéo", "Nintendo"],
        [ 3, "Marios Bros", 1994, "1h24", ["Doe", "John"], "Nanard", "Paramount"],
        [ 4, "Narnia", 2005, "2h12", ["Adamson", "Andrew"], "Heroic Fantasy", "Paramount"],
    ];

    console.table(films);

    convertFilmListToHTML(films);

});