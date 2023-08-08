"use strict";

const MIN_PASSWORD_LENGTH = 8;

function checkLength(event)
{
    const pSize = document.querySelector('.size');
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
    const regex = /\d/;
    const pNum = document.querySelector('.num');
    if (regex.test(event.target.value)) {
        pNum.classList.replace('error', 'ok');
        return true;
    }
    pNum.classList.replace('ok', 'error');
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