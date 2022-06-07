// Detecting the Button Press

var numberOfSounds = document.querySelectorAll(".drum").length;

for (var x = 0; x < numberOfSounds; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting the Keyboard Press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Function playing the relevant sound

function makeSound(input) {
    switch(input) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tomOne = new Audio("sounds/tom-1.mp3");
            tomOne.play();
            break;
        case "j":
            var tomTwo = new Audio("sounds/tom-2.mp3");
            tomTwo.play();
            break;
        case "k":
            var tomThree = new Audio("sounds/tom-3.mp3");
            tomThree.play();
            break;
        case "l":
            var tomFour = new Audio("sounds/tom-4.mp3");
            tomFour.play();
            break;
        default:
            console.log("Wrong Input!");
    }
}

function buttonAnimation(keyPressed) {
    $("." + keyPressed).addClass("pressed");

    setTimeout(function() {
        $("." + keyPressed).removeClass("pressed");
    }, 150);
}