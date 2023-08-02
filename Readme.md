# Découverte JS

## Variables

variable => nom qu'on donne à une "boîte" dans laquelle on va mettre une valeur pour la réutiliser plus tard

**Bonne pratique :** on n'utilise une variable que si on a besoin de réutiliser une valeur parce qu'une variable prend de la place en RAM

### Les constantes

=> variable qui ne change pas après avoir reçu sa valeur

```javascript
const PI = 3.14;
```

Par convention, les constantes sont toujours écrites en SCREAMING_SNAKE_CASE.

### Les variables

```js
let i = 0;
```

## Les routines

routine => nom qu'on donne à un bloc de code (ensemble d'instructions) pour pouvoir les répéter

### Les procédures

Une procédure est une routine qui ne renvoie pas de valeur  
    => "un ordre"

```js
function storeData(data)
{
    /* stockage des informations */
}
```

En JS, comme en PHP, toutes les routines mêmes les procédures sont déclarées avec le mot-clé `function`.

### Les fonctions

fonction => routine qui renvoie une valeur
    => "question posée qui attend une réponse"

```js
function maFonction()
{
    let resultat = true;
    /* traitement réalisé par la fonction */
    return resultat;
}
```

Une fonction doit **TOUJOURS** retourner une valeur.

**Bonne pratique :** la dernière ligne d'une fonction est un `return` avec une valeur par défaut pour la fonction.

## Les structures de contrôle

### Les conditions avec le SI

```js
if (condition) {
    /* code à exécuter si la condition est vraie */
}
```

La version avec le SINON :

```js
if (condition) {
    /* code à exécuter si la condition est vraie */
} else {
    /* code à exécuter si la condition est fausse */
}
```

### La boucle TANT QUE

```js
let condition = true;

while (condition) {
    /* code à répéter */

    /* code qui fait évoluer la condition pour ne pas avoir une boucle infinie */
}
```
