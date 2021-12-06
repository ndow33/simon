
// console.log("Hello World");
//Variables
var gamePattern = [];
var buttonColors = ['red','blue','green','yellow'];
var randomChosenColor = buttonColors[nextSequence()];
var blueSound = new Audio('sounds/blue.mp3');

//functions
//generates a random color for the sequence
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber
};
//Blink function
function blink(color){
    $(("#" + color)).animate({opacity: "0.2"}, 1000);
    $(("#" + color)).animate({opacity:"1"}, 1000);
    blueSound.play();
};

//Add the new color to the game pattern list
gamePattern.push(randomChosenColor)
blink(randomChosenColor);

//Console logs
console.log(gamePattern)
console.log($(("#" + randomChosenColor)));