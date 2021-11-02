//fetching DOM-Elements
const punten = document.getElementById('punten')
const spelcontainer = document.getElementById('spelcontainer');


//Functie-aanroepen
//De vakken worden aangemaakt.
createImageholders();

//De nummers van de nummer array worden geshuffled (de array wordt gebruikt om de plaatjes op een random plek te krijgen bij de card-flip)
const numbersArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]; //array.length = 8
shuffleDeck(numbersArray);



//DE FUNCTIES
//creeëren van de 18 vakken waarin de plaatjes gaan verschijnen
function createImageholders() {
    for (i = 0; i < 18; i++) {
        let imageHolder = document.createElement('div');
        imageHolder.id = i;
        imageHolder.className = 'item';
        imageHolder.style.width = '150px';
        imageHolder.addEventListener('click', reactToCardClick)
        imageHolder.style.border = '2px solid black'
        imageHolder.style.backgroundImage = 'url("img/cartooncat.png")'
        spelcontainer.appendChild(imageHolder);

    }

}


function shuffleDeck(array) {
    for (i = 0; i < array.length; i++) {
        let random = Math.floor(Math.random() * array.length)
        console.log('het random nummer = ' + random);
        let temp = array[i]; //de waarde van de index 0 t/m 3 (index begint vanaf 0)
        console.log('de waarde van de index = ' +
            temp);
        array[i] = array[random];
        console.log(array[i]);
        array[random] = temp; //Wat doet dit?






    }
    console.log(numbersArray)

}

function reactToCardClick() {
    flipcard(this.id);
}

function flipcard(id) {
    document.getElementById(id).style.background = 'url("img/kat' + numbersArray[id] + '.jpg")';
}