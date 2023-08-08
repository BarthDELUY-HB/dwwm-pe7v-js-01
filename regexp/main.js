"use strict";

const MIN_PASSWORD_LENGTH = 8;

function checkLength(event)
{
    console.log(event);
    const pSize = document.querySelector('.size');
    console.log("event.value : " + event.target.value.length);
    console.log("elt.value : " + document.querySelector('#password').value.length);
    // Sur les events key, la valeur du champ est changée *après* l'event
    if (event.target.value.length >= MIN_PASSWORD_LENGTH) {
        pSize.classList.replace('error', 'ok');
        return true;
    }
    pSize.classList.replace('ok', 'error');
    return false;
}
function checkContainsDigit(event)
{

    return false;
}
function checkContainsUppercase(event)
{

    return false;
}

function main()
{
    const field = document.querySelector('#password');
    field.addEventListener('input', checkContainsDigit);
    field.addEventListener('input', checkContainsUppercase);
    field.addEventListener('input', checkLength);
}

window.addEventListener('load', main);