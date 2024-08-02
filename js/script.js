/*
0. creo delle variabili
1. creo i numeri da 1 a 100
2. controllo i moltiplicatori di 3 e 5 o di entrambi
3. modifico con una scritta
4. mostro in console
*/

// FASE PREPARATORIA
// creo costanti
const threeFizz = 'Fizz';
const fiveBuzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';

// creo variabili

// CREO I NUMERI
for (let i = 1; i <= 100; i++) {

    //controllo i resti sia di 5 che di 3
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzBuzz);
        continue;
    }
    // controllo i resti di 3
    else if (i % 3 === 0) {
        console.log(threeFizz);
        continue;
    }
    //controllo i resti di 5
    else if (i % 5 === 0) {
        console.log(fiveBuzz);
        continue;
    }
    //mostro i numeri
    console.log(i);
}