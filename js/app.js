const restart = document.querySelector(".restart");

restart.addEventListener('click', function reset() {
    document.location.reload()
})

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const deck = document.querySelector(".deck");
// const open = document.getElementsByClassName(".open")
// const match = document.getElementsByClassName(".match")
let card = []; //set array named card for two cards
let match = []; //set array for cards which matched.
let move = [];//set array for calculating moves.
const text = document.querySelector(".moves");

deck.addEventListener('click', function (event) {
    if (event.target.classList.contains('card') && card.length < 2 && event.target.classList != "open show") {
        event.target.classList.add('open', 'show');
        card.push(event.target); //Add card to a new array.
        if (card.length == 2 && card[0] !== card[1]) {//If first card not martch with second card, then next function can't continue.  {
            move.push(event.target);//Add event.target in this "move" array.
            // console.log(move);
            text.textContent = move.length;//<span class="moves">0</span> Moves  value = move.length
            compareCards();
        }
    }
});

function compareCards() {
    if (card[0].innerHTML == card[1].innerHTML) {
        cardMatched();
        match.push(card[0], card[1]);
        card = [];
        if (match.length == 16) {
            setTimeout(function () {
                alert("Yeah, you win!");
            }, 700);
        }
    } else {
        cardNotMached();
    }
}

function cardMatched() {
    card[0].classList.remove('open', 'show');
    card[0].classList.add('match');

    card[1].classList.remove('open', 'show');
    card[1].classList.add('match');

}

function cardNotMached() {
    setTimeout(function () {
        card[0].classList.remove('open', 'show');
        card[1].classList.remove('open', 'show');
        card = [];
    }, 1000)
}