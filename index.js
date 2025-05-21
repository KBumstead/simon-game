var buttonColours = ["green","red","yellow","blue"];
var gamePattern = [];
var userClickPattern = [];
var started = false;
var level = 0;

// to start the game
$(document).keypress(function(event){
    if (!started){
        nextSequence();
        $("h1").html("level " + level);
        started = true; 
    }
    
})

//this function below to make button animation and sound when button is pressed
$(".btn").click(function(){
    var userChosenColor = this.id;
    console.log(userChosenColor);
    userClickPattern.push(userChosenColor);
    makeSound(userChosenColor);
    buttonAnimation(this.id);
    checkAnswer(userClickPattern.length - 1);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
        console.log("success");

        if(gamePattern.length === userClickPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press any key to restart");
        startOver();
    }   
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




function nextSequence(){
    level++;
    userClickPattern = [];
    $("h1").html("level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    makeSound(randomChosenColour);
  
} 



function buttonAnimation(randomChosenColour){
    $("#" + randomChosenColour).addClass("pressed");
    setTimeout(function(){
        $("#" + randomChosenColour).removeClass("pressed");
    }, 200);
 }
 
function makeSound(randomChosenColour){ 
    switch (randomChosenColour){
        case "green":
            var audio1 = new Audio("sounds/green.mp3");
            audio1.play();
            break;
        case "red":
            var audio2 = new Audio("sounds/red.mp3");
            audio2.play();
            break;
        case "yellow":
            var audio3 = new Audio("sounds/yellow.mp3");
            audio3.play();
            break;
        case "blue":
            var audio4 = new Audio("sounds/blue.mp3");
            audio4.play();
            break;
        default:
            var audio5 = new Audio("sounds/wrong.mp3");
            audio5.play();
            break;
    }

} 


 

