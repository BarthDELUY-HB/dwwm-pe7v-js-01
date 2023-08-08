"use strict";

function logSubmit(event) {
    console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
    event.preventDefault();

    // Validation que le mot de passe et sa confirmation sont bien identiques
    let password = document.querySelector('#motdepasse').value;
    let confirmation = document.querySelector('#confirmation_motdepasse').value;

    if (password.localeCompare(confirmation) === 0) {
        console.log('Les mots de passe sont identiques');
        return true;
    }
    console.log('Les mots de passe sont différents');
    return false;
}

function main()
{
    console.log("début");

    document.querySelector('form').addEventListener('submit', logSubmit);

    console.log("fin");
}

window.addEventListener('load', main);