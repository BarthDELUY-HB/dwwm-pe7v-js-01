"use strict";

function logSubmit(event) {
    console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
    event.preventDefault();

    // Validation que le mot de passe et sa confirmation sont bien identiques
}

function main()
{
    console.log("début");

    document.querySelector('form').addEventListener('submit', logSubmit);

    console.log("fin");
}

window.addEventListener('load', main);