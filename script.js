//fetching DOM-Elements
const punten = document.getElementById('punten')
const spelcontainer = document.getElementById('spelcontainer');

//creeëren van de 18 vakken waarin de plaatjes gaan verschijnen
function createImageholders() {
    for (i = 1; i <= 18; i++) {
        let imageHolder = document.createElement('div');
        imageHolder.id = i;
        imageHolder.className = 'item';
        imageHolder.style.width = '150px';
        imageHolder.style.border = '2px solid black'
        spelcontainer.appendChild(imageHolder);
    }

}

//de functie aanroep
createImageholders();