// Todo:

// create a proper Player construction with
// state:
//   fallbackIndex = 0 // place to fall back on oopsie
//   progressIndex = 0 // place having been proceeding to
// and functions:
//   proceed(stride) // proceed so many places
//   fallback()      // "oopsie": go back to last start (fallback position)
//   turn()          // cash in your win, update fallback position for next turn
//

const Player = name => {
    let fallbackIndex = 0;
    let progressIndex = 0;
    let hasTurn = true;
    return {
        getFallbackIndex : () => fallbackIndex,
        getProgressIndex : () => progressIndex,
        proceed          : stride => progressIndex += stride,
        turn             : () => fallbackIndex = progressIndex,
        fallback         : () => progressIndex = fallbackIndex,
        changeTurn       : isTurn => hasTurn = isTurn,
        getHasTurn       : () => hasTurn
    }
}

function start() {
    const fields = document.getElementById('fields');

    for (let i = 0; i < 100; i++) {
        let field = document.createElement("DIV");
        field.setAttribute("ID", "FIELD-"+i);
        field.innerText = " ";
        fields.appendChild(field);
    }
    display();
}

function dice() {
    let stride = Math.round(1 + Math.random() * 5);
    document.getElementById('dice').innerText = ""+ stride;
    if ((stride === 3 && player.getHasTurn()) || (player.getProgressIndex() === playerTwo.getProgressIndex() && player.getProgressIndex() !== 0)) {
        player.fallback();
    } else if (player.getHasTurn()) {
        player.proceed(stride);
    } else if ((stride === 3 && playerTwo.getHasTurn()) || (player.getProgressIndex() === playerTwo.getProgressIndex() && playerTwo.getProgressIndex() !== 0)) {
        playerTwo.proceed(stride);
    } else if (playerTwo.getHasTurn()) {
        playerTwo.proceed(stride);
    }
    display();
}

function turn() {
    if (player.getHasTurn()) {
        player.changeTurn(false);
        playerTwo.changeTurn(true);
        player.turn();
    } else {
        playerTwo.changeTurn(false);
        player.changeTurn(true);
        playerTwo.turn();
    }
    display();
}

function display() {
    for (let i = 0; i < 100; i++) {
        let field = document.getElementById("FIELD-"+i);
        field.setAttribute("CLASS", "field");
    }

    let fallbackfield = document.getElementById("FIELD-"+ player.getFallbackIndex());
    fallbackfield.setAttribute("CLASS", "field fallback");
    let progressfield = document.getElementById("FIELD-"+ player.getProgressIndex());
    progressfield.setAttribute("CLASS", "field progress");

    let fallbackfieldTwo = document.getElementById("FIELD-"+ playerTwo.getFallbackIndex());
    fallbackfieldTwo.setAttribute("CLASS", "field fallback-two");
    let progressfieldTwo = document.getElementById("FIELD-"+ playerTwo.getProgressIndex());
    progressfieldTwo.setAttribute("CLASS", "field progress-two");

}

player = Player("One");
playerTwo = Player("Two");