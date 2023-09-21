//declaration 
var gamePattern = [];
var checkCounter = 0;
var level = 0;
var colorPattern = [];
var userPattern = [];
var randomNumber;

//nextSequence determines the game pattern

function nextSequence(){
    userPattern = [];
    level++;
    $("h1").text("level "+ level);
    randomNumber = Math.round(Math.random()*3);
    if(randomNumber === 0){
        gamePattern.push("Green");
        animation("green");
    }
    else if(randomNumber === 1){
        gamePattern.push("Red");
        animation("red");
    }
    else if(randomNumber === 2){
        gamePattern.push("Yellow");
        animation("yellow");
    }
    else if(randomNumber === 3){
        gamePattern.push("Blue");
        animation("blue");
    }
    checkCounter = 0;
}

//animations

function animation(animationColor){
    var finalAnimationColor ="."+animationColor;
    $(finalAnimationColor).fadeOut(200).fadeIn(200);
}
function clickFlash(animationColor){
    $("#" + animationColor).addClass("pressed");
    setTimeout(function () {
        $("#" + animationColor).removeClass("pressed");
      }, 100);
}
function gameOverAnimation(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },100);
}

//check function to match the users ans with game pattern

function check(){
    if(gamePattern[checkCounter] != userPattern[checkCounter])
    {
        gameOverAnimation();
        gameOver();
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();        
    }
    else
    {
        //alert("MatcheD!");
        if(userPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
            //alert("fully matched");
              
        }
        checkCounter++;
    }
}

//input of user pattern

function userPatternFunction(color)
{
    userPattern[checkCounter] = color;
    check();
}

//function after the game overs 

function gameOver(){
    $("h1").text("Game Over, Press A Key to Start");
    level = 0;
    userPattern = [];
    gamePattern = [];
    checkCounter = 0;
}


$(document).keypress(function(event){
    nextSequence();
});

//all sounds

function sounds(soundColor){
    if(soundColor === "Yellow")
    {
        var audio = new Audio("./sounds/yellow.mp3");
        audio.play();
    }
    else if(soundColor === "Red"){
        var audio = new Audio("./sounds/red.mp3");
        audio.play();
    }
    else if(soundColor === "Green"){
        var audio = new Audio("./sounds/green.mp3");
        audio.play();
    }
    else if(soundColor === "Blue"){
        var audio = new Audio("./sounds/blue.mp3");
        audio.play();
    }
}

//all click listener

$(".yellow").click(function(){
    sounds("Yellow");
    clickFlash("yellow");
    userPatternFunction("Yellow");
});
$(".red").click(function(){
    sounds("Red");
    clickFlash("red");
    userPatternFunction("Red");
});
$(".green").click(function(){
    sounds("Green");
    clickFlash("green");
    userPatternFunction("Green");
});
$(".blue").click(function(){
    sounds("Blue");
    clickFlash("blue");
    userPatternFunction("Blue");
});
