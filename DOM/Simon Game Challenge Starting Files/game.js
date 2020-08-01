var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


$(document).keypress(sequence);

function sequence() {
	// body...
	var randomNumber = Math.floor(Math.random()*4);
	var randomChoseColor = buttonColors[randomNumber];
	gamePattern.push(randomChoseColor);
	var colorId = $("#" + randomChoseColor);
    colorId.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoseColor);
    animatePress(randomChoseColor);
    $(".btn").click(function(){
    	var userChosenColor = this.id;
    	userClickedPattern.push(userChosenColor);
    	playSound(userChosenColor);
    	animatePress(userChosenColor);

    });
}
function playSound(name){
	var addressOfAudio = "sounds/" + name + ".mp3";
	var audio = new Audio(addressOfAudio);
    audio.play();
}

function animatePress(currentColor){
	var currentButton = $("." + currentColor)
	currentButton.addClass("pressed");
	setTimeout(function() {
    currentButton.removeClass('pressed');
    }, 100);

}