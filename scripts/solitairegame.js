// created by Aleksandr Tselikovskii
// jQuery by Olga Durham

const cardImages = [{
        name: 'club_ace',
        img: 'images/solitaire/Playing_card_club_A.svg'
    },
    {
        name: 'club_2',
        img: 'images/solitaire/Playing_card_club_2.svg'
    },
    {
        name: 'club_3',
        img: 'images/solitaire/Playing_card_club_3.svg'
    },
    {
        name: 'club_4',
        img: 'images/solitaire/Playing_card_club_4.svg'
    },
    {
        name: 'club_5',
        img: 'images/solitaire/Playing_card_club_5.svg'
    },
    {
        name: 'club_6',
        img: 'images/solitaire/Playing_card_club_6.svg'
    },
    {
        name: 'club_7',
        img: 'images/solitaire/Playing_card_club_7.svg'
    },
    {
        name: 'club_8',
        img: 'images/solitaire/Playing_card_club_8.svg'
    },
    {
        name: 'club_9',
        img: 'images/solitaire/Playing_card_club_9.svg'
    },
    {
        name: 'club_10',
        img: 'images/solitaire/Playing_card_club_10.svg'
    },
    {
        name: 'club_J',
        img: 'images/solitaire/Playing_card_club_J.svg'
    },
    {
        name: 'club_Q',
        img: 'images/solitaire/Playing_card_club_Q.svg'
    },
    {
        name: 'club_K',
        img: 'images/solitaire/Playing_card_club_K.svg'
    },
    {
        name: 'diamond_A',
        img: 'images/solitaire/Playing_card_diamond_A.svg'
    },
    {
        name: 'diamond_2',
        img: 'images/solitaire/Playing_card_diamond_2.svg'
    },
    {
        name: 'diamond_3',
        img: 'images/solitaire/Playing_card_diamond_3.svg'
    },
    {
        name: 'diamond_4',
        img: 'images/solitaire/Playing_card_diamond_4.svg'
    },
    {
        name: 'diamond_5',
        img: 'images/solitaire/Playing_card_diamond_5.svg'
    },
    {
        name: 'diamond_6',
        img: 'images/solitaire/Playing_card_diamond_6.svg'
    },
    {
        name: 'diamond_7',
        img: 'images/solitaire/Playing_card_diamond_7.svg'
    },
    {
        name: 'diamond_8',
        img: 'images/solitaire/Playing_card_diamond_8.svg'
    },
    {
        name: 'diamond_9',
        img: 'images/solitaire/Playing_card_diamond_9.svg'
    },
    {
        name: 'diamond_10',
        img: 'images/solitaire/Playing_card_diamond_10.svg'
    },
    {
        name: 'diamond_J',
        img: 'images/solitaire/Playing_card_diamond_J.svg'
    },
    {
        name: 'diamond_Q',
        img: 'images/solitaire/Playing_card_diamond_Q.svg'
    },
    {
        name: 'diamond_K',
        img: 'images/solitaire/Playing_card_diamond_K.svg'
    },
    {
        name: 'heart_A',
        img: 'images/solitaire/Playing_card_heart_A.svg'
    },
    {
        name: 'heart_2',
        img: 'images/solitaire/Playing_card_heart_2.svg'
    },
    {
        name: 'heart_3',
        img: 'images/solitaire/Playing_card_heart_3.svg'
    },
    {
        name: 'heart_4',
        img: 'images/solitaire/Playing_card_heart_4.svg'
    },
    {
        name: 'heart_5',
        img: 'images/solitaire/Playing_card_heart_5.svg'
    },
    {
        name: 'heart_6',
        img: 'images/solitaire/Playing_card_heart_6.svg'
    },
    {
        name: 'heart_7',
        img: 'images/solitaire/Playing_card_heart_7.svg'
    },
    {
        name: 'heart_8',
        img: 'images/solitaire/Playing_card_heart_8.svg'
    },
    {
        name: 'heart_9',
        img: 'images/solitaire/Playing_card_heart_9.svg'
    },
    {
        name: 'heart_10',
        img: 'images/solitaire/Playing_card_heart_10.svg'
    },
    {
        name: 'heart_J',
        img: 'images/solitaire/Playing_card_heart_J.svg'
    },
    {
        name: 'heart_Q',
        img: 'images/solitaire/Playing_card_heart_Q.svg'
    },
    {
        name: 'heart_K',
        img: 'images/solitaire/Playing_card_heart_K.svg'
    },
    {
        name: 'spade_A',
        img: 'images/solitaire/Playing_card_spade_A.svg'
    },
    {
        name: 'spade_2',
        img: 'images/solitaire/Playing_card_spade_2.svg'
    },
    {
        name: 'spade_3',
        img: 'images/solitaire/Playing_card_spade_3.svg'
    },
    {
        name: 'spade_4',
        img: 'images/solitaire/Playing_card_spade_4.svg'
    },
    {
        name: 'spade_5',
        img: 'images/solitaire/Playing_card_spade_5.svg'
    },
    {
        name: 'spade_6',
        img: 'images/solitaire/Playing_card_spade_6.svg'
    },
    {
        name: 'spade_7',
        img: 'images/solitaire/Playing_card_spade_7.svg'
    },
    {
        name: 'spade_8',
        img: 'images/solitaire/Playing_card_spade_8.svg'
    },
    {
        name: 'spade_9',
        img: 'images/solitaire/Playing_card_spade_9.svg'
    },
    {
        name: 'spade_10',
        img: 'images/solitaire/Playing_card_spade_10.svg'
    },
    {
        name: 'spade_J',
        img: 'images/solitaire/Playing_card_spade_J.svg'
    },
    {
        name: 'spade_Q',
        img: 'images/solitaire/Playing_card_spade_Q.svg'
    },
    {
        name: 'spade_K',
        img: 'images/solitaire/Playing_card_spade_K.svg'
    },
];

var amountOfCards = 52;
var leftCards = 52
var cardArray = []; // 6, 9 elements (6 rows, 9 columns)
var cardsSuit = []; // 13 elements - cards from 1 (Ace) to 10, then 11 (Jack), 12 - Queen, 13 - King
var cardsChosen = [];
var selectedCards = 0;
var previousCard = ''
var timer = document.querySelector('#timer');
var min = 0;
var sec = 0;
var score = document.querySelector('#score');
var timeUpdate = 0;

// Suits: clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
// Card Ranks: Ace, King, Queen Jack, 1-10

function resetСardSuit() {
    for (let cardSuitIndex = 0; cardSuitIndex < 13; cardSuitIndex++) { // set the default value = 0 for cardSuit
        cardsSuit[cardSuitIndex] = 0;
    }
}

const cardText = document.querySelector(".cardsDisplay");
console.log(cardText);

function reset() {
    // displayAllbacks();
    clearInterval(timeUpdate);
    timeUpdate = setInterval(gameTimer, 1000);
    resetСardSuit();
    shufflingCards();
}

score.textContent = 'Cards: ' + amountOfCards;

function gameTimer() {
    let timeFormat = 'Time: ' + min + ':' + '0' + sec;
    sec++;
    if (sec > 10) {
        timeFormat = 'Time: ' + min + ':' + sec;
    }
    if (sec > 59) {
        sec = 0;
        min++;
        timeFormat = 'Time: ' + min + ':' + '0' + sec;
    }

    timer.textContent = timeFormat;
}

function help() {
    var popup = document.querySelector("#myPopup");
    popup.classList.toggle("show");
}

gameTimer();

function shufflingCards() {
    selectedCards = 0;
    min = 0;
    sec = 0;
    scoreGame = 0;
    amountOfCards = 52;
    score.textContent = 'Cards: ' + amountOfCards;
    document.querySelector("#stop2").disabled = false;
    document.querySelector("#start2").disabled = true;
    for (let cardIndex = 0; cardIndex < 52; cardIndex++) { // randomize cards
        var cardRank = Math.floor(Math.random() * 13);
        if (cardsSuit[cardRank] < 4) {
            cardArray[cardIndex] = cardRank;
            console.log('Card value =', cardArray[cardIndex]);

            var newCard = allCards[cardIndex];

            newCard.removeAttribute('style', 'opacity');
            // newCard.removeAttribute('style', 'border');

            newCard.setAttribute('src', cardImages[cardRank + (cardsSuit[cardRank] * 13)].img);
            newCard.setAttribute('class', 'cardImage');
            // allCards[cardIndex].style.opacity = 1.0;
            newCard.addEventListener('click', selectCard);
            // allCards[cardIndex].style.border = '2px solid red';
            // console.log('card Rank is ' + cardRank);
            // console.log('amount of card is ' + cardsSuit[cardRank]);
            console.log('img is ' + cardImages[cardRank + (cardsSuit[cardRank] * 13)].img);
            newCard.setAttribute('data-id', cardIndex);
            cardsSuit[cardRank]++;
        } else {
            cardIndex--
        }
    }
}

function displayAllbacks() {
    console.log(cardText);
    for (let cardIndex = 0; cardIndex < 52; cardIndex++) {
        console.log(cardArray[cardIndex]);
        console.log(allCards[cardIndex]);
        setTimeout(function() {
            allCards[cardIndex].setAttribute('src', 'images/solitaire/Card_back_suits_green.svg');
        }, cardIndex * 30);

        // card.setAttribute('data-id', cardRank);
        // card.addEventListener('click', selectCard);
        // cardText.appendChild(card);
    }
}

resetСardSuit();

previousCard = '';
for (let cardIndex = 0; cardIndex < 52; cardIndex++) { // first initialisation: randomize cards and display them
    var cardRank = Math.floor(Math.random() * 13);
    if (cardsSuit[cardRank] < 4) {
        cardArray[cardIndex] = cardRank;
        console.log('Card value:', cardArray[cardIndex] + 1);

        var card = document.createElement('img');
        card.setAttribute('src', cardImages[cardRank + (cardsSuit[cardRank] * 13)].img); // loading all 52 images

        console.log('number picture is ' + (cardRank + (cardsSuit[cardRank] * 13)));
        // console.log('card Rank is ' + cardRank);
        // console.log('amount of card is ' + cardsSuit[cardRank]);

        card.setAttribute('data-id', cardIndex);
        card.setAttribute('class', 'cardImage');
        card.addEventListener('click', selectCard);


        cardText.appendChild(card);
        cardsSuit[cardRank]++;

    } else {
        cardIndex--
    }
}

var allCards = document.querySelectorAll("img.cardImage");

function selectCard() { // checking if it is the last card in the column
    clearInterval(timeUpdate);
    timeUpdate = setInterval(gameTimer, 1000);
    document.querySelector("#stop2").disabled = false;
    document.querySelector("#start2").disabled = true;
    if (selectedCards < 2) {
        const selectedElement = this;

        console.log(selectedElement);
        let cardId = this.getAttribute('data-id');
        console.log(cardId, 'card value: ', cardArray[cardId], 'next card value', cardArray[parseInt(cardId) + 9]);

        if (cardId > 42) {
            if (cardArray[cardId] != 13) { // value 13 - card is thrown off
                selectedCards++;
                getSelect(selectedElement, cardId)
                console.log('OK');
            }
        } else {
            if (cardArray[parseInt(cardId) + 9] == 13) {
                console.log('next card = ', cardArray[cardId + 9])
                selectedCards++;
                getSelect(selectedElement, cardId)
                console.log('OK');
            }
            console.log('Error')
        }
    }
}

function getSelect(selectedElement, cardId) {
    selectedElement.style.opacity = 0.5;
    // selectedElement.style.border = '2px solid red';

    removeCard(selectedElement); // removing EventListener for clicking
    selectedElement.removeAttribute('class', 'cardImage'); // removing 'hover mouse' selection
    selectedElement.style.opacity = 0.3;

    if (previousCard == '') {
        previousCard = selectedElement;
        console.log('previousCard', previousCard)
    } else {
        let cardId2 = previousCard.getAttribute('data-id'); // cards calidated and go away
        if (cardArray[cardId2] == cardArray[cardId]) {
            selectedElement.setAttribute('src', 'images/solitaire/Card_back_suits_green.svg');
            selectedElement.style.opacity = 1.0;
            // selectedElement.removeAttribute('style', 'border');
            previousCard.setAttribute('src', 'images/solitaire/Card_back_suits_green.svg');
            previousCard.style.opacity = 1.0;
            // previousCard.removeAttribute('style', 'border');
            cardArray[cardId] = 13;
            cardArray[cardId2] = 13;
            leftCards = leftCards - 2;
            amountOfCards = amountOfCards - 2;
            score.textContent = 'Cards: ' + amountOfCards;

            win();

            console.log(cardArray[cardId]);
            console.log(cardArray[cardId2]);

        } else {
            selectedElement.addEventListener('click', selectCard);
            selectedElement.removeAttribute('style', 'opacity');
            // selectedElement.removeAttribute('style', 'border');
            selectedElement.setAttribute('class', 'cardImage');
            // selectedElement.setAttribute('src', cardImages[cardRank + (cardsSuit[cardRank] * 13)].img);
            // selectedElement.setAttribute('class', 'cardImage');
            // allCards[cardIndex].style.opacity = 1.0;
            previousCard.addEventListener('click', selectCard);
            previousCard.removeAttribute('style', 'opacity');
            // previousCard.removeAttribute('style', 'border');
            previousCard.setAttribute('class', 'cardImage');

        }
        previousCard = '';
        selectedCards = 0;
    }
    // selectedCards++;

    // } else {
    //   this.removeAttribute('style.opacity');
    //   this.removeAttribute('border');
    // }
    // // cardsChosen.push(cardImages[cardId].name);
}

function win() {
    if (amountOfCards == 0) {
        clearInterval(timeUpdate);
    }
}

function removeCard(selectedElement) {
    selectedElement.removeEventListener('click', selectCard);
}


document.querySelector("#start2").addEventListener("click", function() {
    timeUpdate = setInterval(gameTimer, 1000);
    document.querySelector("#start2").disabled = true;
    document.querySelector("#stop2").disabled = false;
});

document.querySelector("#stop2").addEventListener("click", function() {
    clearInterval(timeUpdate);
    document.querySelector("#stop2").disabled = true;
    document.querySelector("#start2").disabled = false;
});

// jQuery

$('button').click(function() {
    var $el = $(".solitaire"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});