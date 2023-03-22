//toggle dark mode and implement a cookie to remember user choice
// Created by Yohanes Hailegiorgis

$(document).ready(function() {
    var mode = localStorage.getItem('mode');
    var mode2 = localStorage.getItem('mode2');
    $("body").addClass(mode);
    $("main").addClass(mode2);
    $("aside").addClass(mode2);
    $("section").addClass(mode2)

    $(".theme-switch").on("click", () => {
        $("body").toggleClass("dark-theme");
        $("main").toggleClass("dark-theme-elements");
        $("aside").toggleClass("dark-theme-elements");
        $("section").toggleClass("dark-theme-elements");

        if (($("body").hasClass("dark-theme")) && ($("main").hasClass("dark-theme-elements")) &&
            ($("aside").hasClass("dark-theme-elements")) && ($("section").hasClass("dark-theme-elements"))) {

            localStorage.setItem("mode", "dark-theme");
            localStorage.setItem("mode2", "dark-theme-elements");

        } else {
            localStorage.setItem("mode", null);
            localStorage.setItem("mode2", null);
        }
    });
});