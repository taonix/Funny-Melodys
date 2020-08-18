let audio1 = new Audio('src/music/SweetNight.mp3');
let audio2 = new Audio('src/music/TMR.mp3');
$(document).ready(function() {
    animBars1();
    animBars1();

    let btn = $(".buttonMusic");
    btn.on("click", function() {
        btn.toggleClass("paused");
        return false;
    });

    let btn1 = $(".buttonMusic1");
    btn1.on("click", function() {
        btn1.toggleClass("paused");
        return false;
    });

    let onOfButtonOne = false;
    $(".bm1").on("click", function() {
        if (onOfButtonOne) {
            audio1.pause();
            onOfButtonOne = false;
        } else {
            audio1.play();
            onOfButtonOne = true;
        }
    });

    let onOfButtonDeux = false;
    $(".bm2").on("click", function() {
        if (onOfButtonDeux) {
            audio2.pause();
            onOfButtonDeux = false;
        } else {
            audio2.play();
            onOfButtonDeux = true;
        }
    });

    $(".plusdixun").on("click", function() {
        audio1.currentTime  = audio1.currentTime  + 10;
    });

    $(".moindixun").on("click", function() {
        audio1.currentTime  = audio1.currentTime  - 10;
    });

    $(".plusdixdeux").on("click", function() {
        audio2.currentTime  = audio2.currentTime  + 10;
    });

    $(".moinsdixdeux").on("click", function() {
        audio2.currentTime  = audio2.currentTime  - 10;
    });


});

$(window).on("load", function () {
    $('.tailleBarre1').css('width', audio1.duration/3 + '%');
    $('.tailleBarre2').css('width', audio2.duration/3 + '%');
});

audio1.ontimeupdate = function() {
    $('.progress1').css('width', (audio1.currentTime / audio1.duration * 100)/2 + '%');
}

audio2.ontimeupdate = function() {
    $('.progress2').css('width', (audio2.currentTime / audio2.duration * 100)/2 + '%');
}

let animBars1tf = false;
function animBars1() {

    if (animBars1tf) {
        $(".bars1").fadeOut();
        animBars1tf = false;

    } else {
        $(".bars1").fadeIn();
        animBars1tf = true;
    }

}