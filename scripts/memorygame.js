// created by Angela Abbound
// Edited by Olga Durham
// jQuery by Olga Durham

document.addEventListener('DOMContentLoaded', () => {
    // creating the array for the memory cards
    const cardArray = [{
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.jpg'
        },
        {
            name: 'raspberry',
            img: 'images/raspberry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.jpg'
        },
        {
            name: 'raspberry',
            img: 'images/raspberry.png'
        },
        {
            name: 'strawberry',
            img: 'images/strawberry.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'watermelon',
            img: 'images/watermelon.png'
        }

    ]
    cardArray.sort(() => 0.5 - Math.random());
    // creating the const and variables
    const mg_grid = document.querySelector('mggrid');
    const resultDisplay = document.querySelector('#results');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // creating the board
    function createBoard() {
        const mg_grid = document.querySelector('#mggrid');
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            mg_grid.appendChild(card);
        }
    }

    // do they match?
    function checkForMatch() {
        const mg_grid = document.querySelector('#mggrid');
        //var cardGrid = document.getElementsByClassName('mggrid')
        var cards = mg_grid.children;
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('Yay! They match!')
            document.getElementById("mgOutput").innerHTML = "<hr><strong>Yay! They match!</strong><hr>";
            cards[optionOneId].setAttribute('scr', 'images/white.png');
            cards[optionTwoId].setAttribute('scr', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            // alert("Ooops wrong! Try Again!")
            document.getElementById("mgOutput").innerHTML = "<hr><strong>Ooops wrong! Try Again!</strong><hr>";
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrats! You Win!';
        }
    }
    // card flip
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300);
        }
    }

    createBoard();
})

// jQuery

$('#fmstart').click(function() {
    var $el = $("#fmstart"),
        x = 200,
        originalBackground = $el.css("background");
    $el.css("background", "purple");
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#fmstart').click(function() {
    var $elc = $("#fmstart"),
        y = 200,
        originalColor = $elc.css("color");
    $elc.css('color', 'white');
    setTimeout(function() {
        $elc.css("color", originalColor);
    }, y);
});


$('#fmstart').click(function() {
    var $elw = $("#fmstart"),
        z = 200,
        originalWeight = $elw.css("font-weight");
    $elw.css('font-weight', '900');
    setTimeout(function() {
        $elw.css("font-weight", originalWeight);
    }, z);
});

$('#fmstart').click(function() {
    var $el = $("#fmrequest"),
        x = 1000,
        originalColor = $el.css("color");
    $el.css('color', 'red');
    setTimeout(function() {
        $el.css("color", originalColor);
    }, x);
});

// $('#gnButton').click(function() {
//     var $el = $("#gnOutput"),
//         x = 1500,
//         originalColor = $el.css("color");
//     $el.css('color', 'magenta');
//     setTimeout(function() {
//         $el.css("color", originalColor);
//     }, x);
// });

$('#fmstart').click(function() {
    var $el = $("#fmdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});