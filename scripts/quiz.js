// created by Olga Durham

function ShowHideDiv() {
    var chkTrue1 = document.getElementById("chkTrue1");
    var chkFalse1 = document.getElementById("chkFalse1");
    var dvTrue1 = document.getElementById("dvTrue1");
    var dvFalse1 = document.getElementById("dvFalse1");

    dvTrue1.style.display = chkTrue1.checked ? "block" : "none";
    dvFalse1.style.display = chkFalse1.checked ? "block" : "none";

    var chkTrue2 = document.getElementById("chkTrue2");
    var chkFalse2 = document.getElementById("chkFalse2");
    var dvTrue2 = document.getElementById("dvTrue2");
    var dvFalse2 = document.getElementById("dvFalse2");

    dvTrue2.style.display = chkTrue2.checked ? "block" : "none";
    dvFalse2.style.display = chkFalse2.checked ? "block" : "none";

    var chkTrue3 = document.getElementById("chkTrue3");
    var chkFalse3 = document.getElementById("chkFalse3");
    var dvTrue3 = document.getElementById("dvTrue3");
    var dvFalse3 = document.getElementById("dvFalse3");

    dvTrue3.style.display = chkTrue3.checked ? "block" : "none";
    dvFalse3.style.display = chkFalse3.checked ? "block" : "none";
}

$('#chkTrue1').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#chkFalse1').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#chkTrue2').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#chkFalse2').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#chkTrue3').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});

$('#chkFalse3').change(function() {
    var $el = $(".qdiv"),
        x = 150,
        originalBackground = $el.css("background");
    $el.css('background', 'rgb(44, 19, 82)');
    setTimeout(function() {
        $el.css("background", originalBackground);
    }, x);
});