var buttonColours = ["blue", "green", "red", "yellow"];
var gamePattern = [];
var pressList = new Array();

var start = true;
var count = 0;
var level;

function sound(name) {
    $("#" + name).removeClass(name);
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    setTimeout(function () { $("#" + name).addClass(name); }, 100);
}

function soundPress(name) {
    $("#" + name).addClass("pressed");
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    setTimeout(function () { $("#" + name).removeClass("pressed"); }, 100);
}

function playAudio() {
    var ran = Math.floor(Math.random() * 4);
    sound(buttonColours[ran])
    count = 0;
    gamePattern.push(ran);
    pressList = []
    $("h1").text("Level " + gamePattern.length);
}

function wrong(idName) {
    soundPress(idName);
    start = true;
    gamePattern = [];
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over")
    setTimeout(function () { $("body").removeClass("game-over") }, 250)
    count = 0;
    $("h1").text("Game Over, Press Any Key to Restart");
}

$(document).keypress(function (e) {
    if (start) {
        start = false;
        playAudio();
    }
});

$(".btn").click(function (e) {
    if (start) {
        wrong(e.target.id);
    } else if (e.target.id == "blue") {
        pressList.push(0);
    } else if (e.target.id == "green") {
        pressList.push(1);
    } else if (e.target.id == "red") {
        pressList.push(2);
    } else if (e.target.id == "yellow") {
        pressList.push(3);
    }

    if (gamePattern[count] == pressList[count]) {
        soundPress(e.target.id)
        count++;
    } else {
        wrong(e.target.id);
    }

    if ((count == gamePattern.length) && (!start)) {
        setTimeout(function () { playAudio() }, 500)
    }
});