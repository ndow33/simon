
// console.log("Hello World");
//Variables
var gamePattern = [];
var userClickedPatterns = [];
var buttonColors = ['red','blue','green','yellow'];
var randomChosenColor = buttonColors[nextSequence()];

//functions
//generates a random color for the sequence
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber
};
//Blink function
function blink(color){
    $(("#" + color)).animate({opacity: "0.2"}, 200);
    $(("#" + color)).animate({opacity:"1"}, 200);
};
//play the sound associated with the chosen color
function playSound(color){
    var newColorSound = new Audio('sounds/'+color+'.mp3');
    newColorSound.play();
}

//Event listeners
//Which button is clicked?
$("button").click(function(){
    //Get the id of the clicked button
    var chosenColor = $(this).attr("id");
    //plug the id into our functions
    blink(chosenColor);
    playSound(chosenColor);
    //add the chosen color to userClickedPatterns
    userClickedPatterns.push(chosenColor);
    console.log(userClickedPatterns)
})


//Add the new color to the game pattern list
gamePattern.push(randomChosenColor)
blink(randomChosenColor);

//Console logs
console.log(gamePattern)
console.log($(("#" + randomChosenColor)));