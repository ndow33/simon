var gamePattern = [];

var buttonColors = ['red','yellow','blue','green'];

var randomChosenColor = buttonColors[nextSequence()];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4)
    return randomNumber
};

gamePattern.push(randomChosenColor)

console.log(gamePattern)