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
    const regex = /[A-Z]/;
    const pUpper = document.querySelector('.majus');
    if(regex.test(event.target.value)){
        pUpper.classList.replace('error', 'ok');
        return true;
    }
    pUpper.classList.replace('ok', 'error');
    return false;
}

function checkFormConstraints(event)
{
    let hasDigits = checkContainsDigit(event);
    let hasUppercase = checkContainsUppercase(event);
    let isLongEnough = checkLength(event);
    if (hasDigits && hasUppercase && isLongEnough) {
        document.querySelector('#sub').removeAttribute('disabled');
        return true;
    }
    document.querySelector('#sub').setAttribute('disabled', 'disabled');
    return false;
}

function main()
{
    const field = document.querySelector('#password');
    field.addEventListener('input', checkFormConstraints);
}

window.addEventListener('load', main);