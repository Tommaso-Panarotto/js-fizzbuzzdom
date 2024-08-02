/*
. richiamo elementi dal Dom
. creo delle variabili
. creo i numeri da 1 a 100
. controllo i moltiplicatori di 3 e 5 o di entrambi
. modifico con una scritta
. mostro in console
. mostro nel DOM
*/

// FASE PREPARATORIA
//richiamo elementi dal DOM
const listContainer = document.getElementById('list');

// creo costanti
const threeFizz = 'Fizz';
const fiveBuzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';
const list = document.createElement('ul');

// creo variabili

//Aggiungo classi
list.className = 'list-mark d-flex flex-wrap gap-4';

// CREO I NUMERI
for (let i = 1; i <= 100; i++) {

    //creo un li
    const listItem = document.createElement('li');

    //aggiungo classi
    listItem.className = 'square-number d-flex justify-content-center align-items-center fw-semibold';

    //controllo i resti sia di 5 che di 3
    if (i % 3 === 0 && i % 5 === 0) {
        //mostro i numeri in console
        console.log(fizzBuzz);

        //monto la lista
        listItem.append(fizzBuzz);
        //aggiugno classe a listitem
        listItem.classList.add('bg-pink');
        //lego listItem a list
        list.appendChild(listItem);
        continue;
    }
    // controllo i resti di 3
    else if (i % 3 === 0) {
        //mostro i numeri in console
        console.log(threeFizz);

        //monto la lista
        listItem.append(threeFizz);
        //aggiugno classe a listitem
        listItem.classList.add('bg-green');
        //lego listItem a list
        list.appendChild(listItem);
        continue;
    }
    //controllo i resti di 5
    else if (i % 5 === 0) {
        //mostro i numeri in console
        console.log(fiveBuzz);

        //monto la lista
        listItem.append(fiveBuzz);
        //aggiugno classe a listitem
        listItem.classList.add('bg-yellow');
        //lego listItem a list
        list.appendChild(listItem);
        continue;
    }
    //mostro i numeri in console
    console.log(i);

    //monto la lista
    listItem.append(i);
    //aggiugno classe a listitem
    listItem.classList.add('bg-blue');
    //lego listItem a list
    list.appendChild(listItem);
}

//mostro nel DOM
listContainer.appendChild(list);



