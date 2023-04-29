//Busqueda binaria
//Pseudocodigo
// Sea min = 0 y max = n-1.
// Si max < min, entonces detente: target no está en array. Regresa -1.
// Calcula guess como el promedio de max y min, redondeado hacia abajo (para que sea un entero).
// Si array[guess] es igual a target, entonces detente. ¡Lo encontraste! Regresa guess.
// Si el intento fue demasiado bajo, es decir, array[guess] < target, entonces haz min = guess + 1.
// De lo contrario, el intento fue demasiado alto. Haz max = guess - 1.
// Regresa al paso 2.
const doSearch = (targetValue) => {
    const array = [];
    let min = 0;
    let guess;
    let intentos = 0;
    const inputNumber = Number(document.getElementById(targetValue).value);
    const numberGuess = document.getElementById('numberGuess')
    const numberOfAttemps = document.getElementById('numberOfAttemps')

    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }

    let max = array.length - 1;

    while (min <= max) {
        intentos++;
        guess = Math.floor((max + min) / 2);

        if (confirm(`¿Tu numero es el: ${array[guess]}?`) && array[guess] === inputNumber) {
            numberGuess.innerText = `Tu numero es el: ${array[guess]}, excelente decision`;
            numberOfAttemps.innerText = `Numero de intentos: ${intentos}`
            // console.log("Encontraste el numero: " + array[guess]);
            // console.log("Numero de intentos: " + intentos);
            return guess;
        }
        else if (array[guess] < inputNumber) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }
    }
    return -1;
};



