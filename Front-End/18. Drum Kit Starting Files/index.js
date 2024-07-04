//make sound
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default : console.log(buttonInnerHTML);
    }
    audio.play();
}

function buttonAnimetion(key) {
    var className = "."+key;
    var activeButton = document.querySelector(className);
    activeButton.classList.add("pressed");

    setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}

// detect mouse press
var number = document.querySelectorAll(".drum").length;
for (var i = 0; i < number; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimetion(buttonInnerHTML);
    });
}

// detect keyborad press
document.addEventListener("keypress" ,function(event) {
    var buttonKey = event.key;
    makeSound(buttonKey);
    buttonAnimetion(buttonKey);
})