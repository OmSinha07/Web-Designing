var gamePattern=[]
var buttonColours=["red", "blue", "green", "yellow"];
function nextSequence()
{
    rnno=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[rno];
    gamePattern[randomChosenColour];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio=new Audio("sounds/"+ randomChosenColour+"mp3");
    audio.play();
}