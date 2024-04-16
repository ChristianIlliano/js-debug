/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// // ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// 1- l'esercizio non stampa nulla perchè la i essendo uguale a 0 non sarà mai maggiore di cinque quindi non entra nel ciclo
// 2- la condizione sarebbe dovuta essere i < 5
// 3- 
// correzione :
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// 1- una funzione che identifica se un numero è pari e ritorna quel numero +5
// 2- si, nella condizione l'operatore deve essere === (identico) e non = (comparatore)
// 3- no


// ESERCIZIO 3
// function loopToFive() {
//     for(let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// 1- Dovrebbe restituire tutti i numeri con indice da 0 a 5
// 2- è sbagliata la sintassi per le virgole dovrebbero essere punto e virgola
// 3- no


//  ESERCIZIO 4 (suggerimento: ci sono 7 errori)
//  function displayEvenNumbers() {
//      let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//      let evenNumbers = [];
//      for (let i = 0; i < numbers.length - 1; i++;) {
//          if (numbers % 2 = 0); {
//              evenNumbers.push(i);
//          }
//          return evenNumbers;
//     }
//  }

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        // console.log("ITERAZIONE:"+i);
        // console.log("NUMERO:"+ numbers[i]);
        if (numbers[i] % 2 === 0) {
            // console.log("PARI: " + numbers[i]);
            evenNumbers.push(numbers[i]);
        }
        // return evenNumbers;
    }
    return evenNumbers;
}
const result = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(result);

// 1- 
// 2- punto e virgola dopo i++, = al posto di ===, i indicato con la parentesi tonda e non quadra, bisogna indicare gli indici di number, la dichiarazione della funizone non ha una variabile, mancano i parametri nella funzione
// 3- 