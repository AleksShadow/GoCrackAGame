// created by Olga Durham

var secret = Math.floor(Math.random() * 10) + 1;
var guess;

document.getElementById("gnButton").onclick = function() {
    guess = document.getElementById("gnNumber").value;
    if (guess != secret) {
        document.getElementById("gnOutput").innerHTML = "<hr><strong>Oh, No! Your guess is not right!<br>Try again.</strong><hr>";
    } else {
        document.getElementById("gnOutput").innerHTML = "<hr><strong>Success! Your guess is right!<br><br>The secret number is " + secret + ".</strong><hr>";
    }
}

// jQuery

$('#gnButton').click(function() {
    var $el = $("#gnButton"),
        x = 200,
        originalBackground = $el.css("background");
    $el.css("background", "purple");
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#gnButton').click(function() {
    var $elc = $("#gnButton"),
        y = 200,
        originalColor = $elc.css("color");
    $elc.css('color', 'white');
    setTimeout(function() {
        $elc.css("color", originalColor);
    }, y);
});


$('#gnButton').click(function() {
    var $elw = $("#gnButton"),
        z = 200,
        originalWeight = $elw.css("font-weight");
    $elw.css('font-weight', '900');
    setTimeout(function() {
        $elw.css("font-weight", originalWeight);
    }, z);
});

$('#gnButton').click(function() {
    var $el = $("#gnrequest"),
        x = 1000,
        originalColor = $el.css("color");
    $el.css('color', 'red');
    setTimeout(function() {
        $el.css("color", originalColor);
    }, x);
});

$('#gnButton').click(function() {
    var $el = $("#gnOutput"),
        x = 1500,
        originalColor = $el.css("color");
    $el.css('color', 'magenta');
    setTimeout(function() {
        $el.css("color", originalColor);
    }, x);
});

$('#gnButton').click(function() {
    var $el = $("#gndiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});