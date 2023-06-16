/*
Ex 1: Set + algoritmi
crea una funzione che prende in ingresso due set di 5 parole e restituisce la differenza tra il
numero di parole aventi lunghezza pari presenti nel primo set e il numero di parole che terminano
in 'a' presenti nel secondo set.
chiamare la funzione con valori a piacere per stampare il risultato.
*/
{
    console.log('EX 1')
    function differenzaParole(set1, set2) {
        let parolePari = 0;
        let paroleTerminaA = 0;

        set1.forEach(parola => {
            if (parola.length % 2 === 0) {
                parolePari++;
            }
        });

        set2.forEach(parola => {
            if (parola.charAt(parola.length - 1) === 'a') {
                paroleTerminaA++;
            }
        });

        const differenza = parolePari - paroleTerminaA;
        return differenza;
    }


    const set1 = new Set(['casa', 'albero', 'auto', 'tavolo', 'gatto']);
    const set2 = new Set(['mela', 'ananas', 'tazza', 'kiwi', 'pizza']);

    const risultato = differenzaParole(set1, set2);
    console.log("La differenza tra il numero di parole con lunghezza pari nel primo set e il numero di parole che terminano in 'a' nel secondo set è:", risultato);

}
console.log('   ')

/*
Ex 2: Funzioni + array + oggetti + algoritmi
Scrivi una funzione che prenda in input un array di 3 oggetti rappresentanti persone (nome,
cognome, età) e restituisca un nuovo array contenente le 3 persone ordinate per età crescente
(dal più giovane al più anziano).
Chiamare la funzione per produrre l'array, e successivamente iterare su questo array per stampare
le informazioni di tutte e 3 le persone.
Ad esempio:
dammiPersoneOrdinate ( [ {mario rossi, 32}, {luigi verdi, 25}, {peach pink, 30} ] )
produce: [{luigi verdi, 25}, {peach pink, 30}, {mario rossi, 32}, ]
*/
{
    console.log('EX 2')
    function dammiPersoneOrdinate(persone) {
        const personeOrdinate = persone.slice();

        for (let i = 0; i < personeOrdinate.length - 1; i++) {
            for (let j = i + 1; j < personeOrdinate.length; j++) {
                if (personeOrdinate[i].età > personeOrdinate[j].età) {
                    [personeOrdinate[i], personeOrdinate[j]] = [personeOrdinate[j], personeOrdinate[i]];
                }
            }
        }

        return personeOrdinate;
    }

    const persone = [
        { nome: 'Mario', cognome: 'Rossi', età: 32 },
        { nome: 'Luigi', cognome: 'Verdi', età: 25 },
        { nome: 'Peach', cognome: 'Pink', età: 30 }
    ];

    const personeOrdinate = dammiPersoneOrdinate(persone);

    for (let i = 0; i < personeOrdinate.length; i++) {
        const persona = personeOrdinate[i];
        console.log(`${persona.nome} ${persona.cognome}, ${persona.età}`);
    }

}
console.log('   ')

/*
Ex 3: Map + algoritmi
Crea un array di 6 stringhe a piacere.
Successivamente, crea una mappa che avrà come chiavi le parole contenute nell'array e per valori
le loro lunghezze.
Itera sulla mappa per stampare, per ogni coppia al suo interno, la frase:
la parola … contiene … caratteri
*/
{
    console.log('EX 3')
    const parole = ['casa', 'albero', 'auto', 'tavolo', 'gatto', 'libro'];
    const mappa = new Map();

    for (let i = 0; i < parole.length; i++) {
        const parola = parole[i];
        const lunghezza = parola.length;
        mappa.set(parola, lunghezza);
    }

    mappa.forEach((lunghezza, parola) => {
        console.log(`La parola ${parola} contiene ${lunghezza} caratteri.`);
    });

}
console.log('   ')

/*
Ex 4: date + JSON
Dato il seguente JSON:
{
"date1": "1990-10-10",
"date2": "1980-10-10",
"date3": "1970-10-10",
"date4": "1960-10-10"
}
trova la strategia corretta per stampare in output la data più "piccola" e la data più "grande" tra
quelle fornite.
*/
{
    console.log('EX 4')
    const jsonData = {
        "date1": "1990-10-10",
        "date2": "1980-10-10",
        "date3": "1970-10-10",
        "date4": "1960-10-10"
    };

    const keys = Object.keys(jsonData);
    const dates = [];

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        dates.push(new Date(jsonData[key]));
    };

    let minDate = dates[0];
    let maxDate = dates[0];

    for (let i = 1; i < dates.length; i++) {
        if (dates[i] < minDate) {
            minDate = dates[i];
        }

        if (dates[i] > maxDate) {
            maxDate = dates[i];
        }
    }

    console.log("Data più piccola:", minDate);
    console.log("Data più grande:", maxDate);

}
console.log('  ')
/*
Ex 5: Algoritmi
Data una stringa s a piacere, stampare solo i caratteri univoci, ovvero i caratteri che compaiono
SOLO una volta nella lista.
Ad esempio:
abbazia -> zi

*/
{
    console.log('EX 5')
    function stampaCaratteriUnivoci(stringa) {
        const conteggioCaratteri = {};


        for (let i = 0; i < stringa.length; i++) {
            const carattere = stringa[i];
            if (conteggioCaratteri[carattere]) {
                conteggioCaratteri[carattere]++;
            } else {
                conteggioCaratteri[carattere] = 1;
            }
        }


        const caratteriUnivoci = [];
        for (const carattere in conteggioCaratteri) {
            if (conteggioCaratteri[carattere] === 1) {
                caratteriUnivoci.push(carattere);
            }
        }


        console.log(caratteriUnivoci.join(''));
    }


    const stringa = "ombrello";
    stampaCaratteriUnivoci(stringa);
}
console.log('   ')
/*
Ex 1: Array + algoritmi
crea un array di 6 numeri interi e stampa in console la differenza tra il numero di numeri maggiori
di 10 e il numero di numeri inferiori a 1.
Inoltre, se il valore calcolato è pari a 0, stampa tutti i numeri dell'array in senso invertito,
altrimenti, stampa solo il primo e l'ultimo numero dell'array.

*/
{
    console.log('EX 6')
    function calcolaDifferenzaEStampa(array) {
        const maggioriDi10 = array.filter(function (numero) {
            return numero > 10;
        });

        const inferioriA1 = array.filter(function (numero) {
            return numero < 1;
        });

        const differenza = maggioriDi10.length - inferioriA1.length;

        if (differenza == 0) {
            let reversedArray = [];
            for (let i = array.length - 1; i >= 0; i--) {
                reversedArray.push(array[i]);
            }
            console.log(reversedArray.join(', '));
        } else {
            console.log("Primo numero:", array[0]);
            console.log("Ultimo numero:", array[array.length - 1]);
        }
    }


    const numeri = [5, 12, 3, 8, 0, 15];
    calcolaDifferenzaEStampa(numeri);


}
console.log('   ')
/*
Ex 2: Array + funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso due set di 5 numeri e restituisce un oggetto.
Questo oggetto avrà le seguenti proprietà:
winner -> avrà valore 1 se il primo set ha più proprietà del secondo, altrimenti 2, e 0 se hanno
numero pari di proprietà
morePositive: avrà valore 1 se il primo set ha più numeri positivi (> 0) del secondo, altrimenti 2, e 0
se hanno numero pari di proprietà
chiama la funzione per stampare proprietà e valori dell'oggetto restituito
*/
{
    console.log('EX 7');
    function confrontaSetNumeri(set1, set2) {
        const result = {};

        const keys1 = Object.keys(set1);
        const keys2 = Object.keys(set2);

        if (keys1.length > keys2.length) {
            result.winner = 1;
        } else if (keys1.length < keys2.length) {
            result.winner = 2;
        } else {
            result.winner = 0;
        }

        const positiviSet1 = keys1.filter(function (key) {
            return set1[key] > 0;
        });

        const positiviSet2 = keys2.filter(function (key) {
            return set2[key] > 0;
        });

        if (positiviSet1.length > positiviSet2.length) {
            result.morePositive = 1;
        } else if (positiviSet1.length < positiviSet2.length) {
            result.morePositive = 2;
        } else {
            result.morePositive = 0;
        }

        return result;
    }

    const setNumeri1 = { numero1: 5, numero2: -3, numero3: 8, numero4: -4, numero5: 15 };
    const setNumeri2 = { numero1: 2, numero2: 1, numero3: 4, numero4: 9, numero5: -6 };

    const confronto = confrontaSetNumeri(setNumeri1, setNumeri2);

    console.log("Winner:", confronto.winner);
    console.log("More Positive:", confronto.morePositive);
}
console.log('  ')
/*
Ex 3: Funzioni + oggetti + algoritmi
crea una funzione che prende in ingresso 2 oggetti che rappresentano due rettangoli, che avranno
questa struttura: {x: valore numerico, y: valore numerico}, e una stringa che può avere i seguenti
valori:
- perimetro
- area
Se il terzo parametro ha valore 'perimetro' la funzione restituisce la differenza tra il perimetro del
primo rettangolo e il perimetro del secondo rettangolo.
Se il terzo parametro ha valore 'area' la funzione restituisce la somma tra l'area del primo
rettangolo e l'area del secondo rettangolo.
Ad esempio:
opeRettangolo( rect1, rect2, 'area' ) -> risultato
opeRettangolo( rect1, rect2, 'perimetro' ) -> risultato
Chiama la funzione 2 volte per stampare i valori prodotti, usando valori a piacere.
*/
{
    console.log('EX 8')
    function opeRettangolo(rect1, rect2, operazione) {
        const perimetro1 = 2 * (rect1.x + rect1.y);
        const perimetro2 = 2 * (rect2.x + rect2.y);
        const area1 = rect1.x * rect1.y;
        const area2 = rect2.x * rect2.y;

        if (operazione === 'perimetro') {
            return perimetro1 - perimetro2;
        } else if (operazione === 'area') {
            return area1 + area2;
        } else {
            return 'Operazione non valida';
        }
    }


    const rect1 = { x: 5, y: 8 };
    const rect2 = { x: 3, y: 6 };

    const risultato1 = opeRettangolo(rect1, rect2, 'area');
    console.log("Risultato Area:", risultato1);

    const risultato2 = opeRettangolo(rect1, rect2, 'perimetro');
    console.log("Risultato Perimetro:", risultato2);

}
console.log('   ')
/*
Ex 4: Funzioni di funzioni + algoritmi
Creare una funzione chiamata opeStringa che accetta 2 parametri:
- una stringa
- una funzione che prende in ingresso una stringa e restituisce una nuova stringa,
trasformata
La funzione opeStringa deve restituire la stringa prodotta dalla funzione passata come secondo
parametro.
In fase di chiamata di opeStringa, operare nel seguente modo:
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la versione
maiuscola
- chiamare opeStringa con una stringa "javascript" e una funzione che produca una stringa
contenente solo i caratteri alla posizione dispari
- chiamare opeStringa con una stringa "javascript" e una funzione che produca la stringa
invertita
Ad esempio:
s = javascript
opeStringa(s, uc) -> produce JAVASCRIPT
opeStringa(s, odd) -> produce aacit
opeStringa(s, invert) -> produce tpircsavaj
Stampare in output i risultati.
*/{
    console.log('EX 9')
    function opeStringa(stringa, funzione) {
        return funzione(stringa);
    }

    function uc(stringa) {
        return stringa.toUpperCase();
    }

    function odd(stringa) {
        let risultato = "";
        for (let i = 0; i < stringa.length; i++) {
            if (i % 2 != 0) {
                risultato += stringa.charAt(i);
            }
        }
        return risultato;
    }

    function invert(stringa) {
        let invertedString = "";
        for (let i = stringa.length - 1; i >= 0; i--) {
            invertedString += stringa[i];
        }
        return invertedString;
    }

    const s = "javascript";

    console.log(opeStringa(s, uc));
    console.log(opeStringa(s, odd));
    console.log(opeStringa(s, invert));

}
console.log('   ')
/*
Ex 1
Dato il seguente JSON:
[{
"autore": "mario rossi",
"titolo": "jerry potter",
"data": "1990-10-10"
},
{
"autore": "luigi verdi",
"titolo": "la storia finita",
"data": "1960-10-10"
},
{
"autore": "peach rosi",
"titolo": "metti la cera",
"data": "1970-10-10"
},
{
"autore": "mario rossi",
"titolo": "togli la cerca",
"data": "1980-10-10"
},
{
"autore": "luigi verdi",
"titolo": "mma kid",
"data": "1950-10-10"
},
{
"autore": "lucia bianchi",
"titolo": "javascript non è java",
"data": "1940-10-10"
},
{
"autore": "anna neri",
"titolo": "java non è javascript",
"data": "1930-10-10"
}
]
che rappresenta un array di oggetti rappresentanti libri con le proprietà "titolo", "autore" e "data",
scrivi una funzione che prenda in input l'array e restituisca un nuovo array di oggetti contenente
solo i libri scritti da autori diversi, per evitare che ci siano nell'array oggetti con autori identici.
L'array contiene quindi 1 libro per autore, il primo trovato nel parsing.
Dall'array prodotto dalla funzione stampare il libro più vecchio e il libro più recente.
*/
{
    console.log('EX 10')
    const libri = [
        {
            "autore": "mario rossi",
            "titolo": "jerry potter",
            "data": "1990-10-10"
        },
        {
            "autore": "luigi verdi",
            "titolo": "la storia finita",
            "data": "1960-10-10"
        },
        {
            "autore": "peach rosi",
            "titolo": "metti la cera",
            "data": "1970-10-10"
        },
        {
            "autore": "mario rossi",
            "titolo": "togli la cerca",
            "data": "1980-10-10"
        },
        {
            "autore": "luigi verdi",
            "titolo": "mma kid",
            "data": "1950-10-10"
        },
        {
            "autore": "lucia bianchi",
            "titolo": "javascript non è java",
            "data": "1940-10-10"
        },
        {
            "autore": "anna neri",
            "titolo": "java non è javascript",
            "data": "1930-10-10"
        }
    ];


    function trovaLibroPiùVecchio(libri) {
        let libroPiùVecchio = libri[0];

        for (let i = 1; i < libri.length; i++) {
            const libro = libri[i];
            if (libro.data < libroPiùVecchio.data) {
                libroPiùVecchio = libro;
            }
        }

        return libroPiùVecchio;

    }
    console.log(trovaLibroPiùVecchio(libri))


    function trovaLibroPiùRecente(libri) {
        let libroPiùRecente = libri[0];

        for (let i = 1; i < libri.length; i++) {
            const libro = libri[i];
            if (libro.data > libroPiùRecente.data) {
                libroPiùRecente = libro;
            }
        }

        return libroPiùRecente;

    }
    console.log(trovaLibroPiùRecente(libri))








}