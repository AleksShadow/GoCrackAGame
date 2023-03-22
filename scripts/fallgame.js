// Created by Yohanes Hailegiorgis
// jQuery by Olga Durham

var character = document.querySelector("#character");
var game = document.querySelector("#game");
var interval;
var both = 0;
var counter = 0;
var currentBlocks = [];
var blocks;

//sets left coordinate of ball
function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left > 0) {
        character.style.left = left - 2 + "px";
    }
}

//sets right coordinate of ball
function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if (left < 380) {
        character.style.left = left + 2 + "px";
    }
}

document.addEventListener("keydown", event => {
    if (both == 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
});

function gamestart() {
    var blockLast = document.querySelector("#block" + (counter - 1));
    var holeLast = document.querySelector("#hole" + (counter - 1));
    if (counter > 0) {
        var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
        var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    }
    if (blockLastTop < 400 || counter == 0) {
        var block = document.createElement("div");
        var hole = document.createElement("div");
        block.setAttribute("class", "block");
        hole.setAttribute("class", "hole");
        block.setAttribute("id", "block" + counter);
        hole.setAttribute("id", "hole" + counter);
        block.style.top = blockLastTop + 100 + "px";
        hole.style.top = holeLastTop + 100 + "px";
        var random = Math.floor(Math.random() * 360);
        hole.style.left = random + "px";
        game.appendChild(block);
        game.appendChild(hole);
        currentBlocks.push(counter);
        counter++;
    }
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    var drop = 0;
    if (characterTop <= 0) {
        score = counter - 9;
        if (score < 0) {
            score = 0;
        }
        // alert("your score is: " + score);
        document.getElementById("fgOutput").innerHTML = "<hr><strong>Game over. Score: " + score + "</strong><hr>";
        clearInterval(blocks);
    }


    //blocks move up

    for (var i = 0; i < currentBlocks.length; i++) {
        let current = currentBlocks[i];
        let iblock = document.querySelector("#block" + current);
        let ihole = document.querySelector("#hole" + current);
        let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iblock.style.top = iblockTop - 0.5 + "px";
        ihole.style.top = iblockTop - 0.5 + "px";
        if (iblockTop < -20) {
            currentBlocks.shift();
            iblock.remove();
            ihole.remove();
        }
        if (iblockTop - 20 < characterTop && iblockTop > characterTop) {
            drop++;
            if (iholeLeft <= characterLeft && iholeLeft + 20 >= characterLeft) {
                drop = 0;
            }
        }
    }
    if (drop == 0) {
        if (characterTop < 480) {
            character.style.top = characterTop + 2 + "px";
        }
    } else {
        character.style.top = characterTop - 0.5 + "px";
    }



}

document.querySelector("#start").addEventListener("click", function() {
    blocks = setInterval(gamestart, 1);
    document.querySelector("#start").disabled = true;
    document.querySelector("#stop").disabled = false;

});

document.querySelector("#stop").addEventListener("click", function() {
    clearInterval(blocks);
    score = counter - 9;
    if (score < 0) {
        score = 0;
    }
    // alert("your score is: " + score);

    document.getElementById("fgOutput").innerHTML = "<hr><strong>Game over. Score: " + score + "</strong><hr>";




    clearInterval(blocks);



    document.querySelector("#stop").disabled = true;
    document.querySelector("#start").disabled = false;
});

// jQuery

$('#start').click(function() {
    var $el = $("#start"),
        x = 200,
        originalBackground = $el.css("background");
    $el.css("background", "purple");
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#start').click(function() {
    var $elc = $("#start"),
        y = 200,
        originalColor = $elc.css("color");
    $elc.css('color', 'white');
    setTimeout(function() {
        $elc.css("color", originalColor);
    }, y);
});


$('#start').click(function() {
    var $elw = $("#start"),
        z = 200,
        originalWeight = $elw.css("font-weight");
    $elw.css('font-weight', '900');
    setTimeout(function() {
        $elw.css("font-weight", originalWeight);
    }, z);
});

$('#stop').click(function() {
    var $el = $("#stop"),
        x = 200,
        originalBackground = $el.css("background");
    $el.css("background", "purple");
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#stop').click(function() {
    var $elc = $("#stop"),
        y = 200,
        originalColor = $elc.css("color");
    $elc.css('color', 'white');
    setTimeout(function() {
        $elc.css("color", originalColor);
    }, y);
});


$('#stop').click(function() {
    var $elw = $("#stop"),
        z = 200,
        originalWeight = $elw.css("font-weight");
    $elw.css('font-weight', '900');
    setTimeout(function() {
        $elw.css("font-weight", originalWeight);
    }, z);
});

$('#start').click(function() {
    var $el = $("#fgrequest"),
        x = 1000,
        originalColor = $el.css("color");
    $el.css('color', 'red');
    setTimeout(function() {
        $el.css("color", originalColor);
    }, x);
});

$('#stop').click(function() {
    var $el = $("#fgOutput"),
        x = 1000,
        originalColor = $el.css("color");
    $el.css('color', 'magenta');
    setTimeout(function() {

        $el.css("color", originalColor);
    }, x);
});

$('#start').click(function() {
    var $elfg = $("#fgdiv"),
        x = 150,
        originalBackground = $elfg.css("background");
    $elfg.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $elfg.css("background", originalBackground);
    }, x);
});

$('#stop').click(function() {
    var $elfg = $("#fgdiv"),
        x = 150,
        originalBackground = $elfg.css("background");
    $elfg.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $elfg.css("background", originalBackground);
    }, x);
});