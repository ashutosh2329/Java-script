var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;



$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



function nextSequence() {
	// body...
	level++;
	userClickedPattern = [];
	$("#level-title").text("Level " + level);

	var randomNumber = Math.floor(Math.random()*4);
	var randomChoseColor = buttonColors[randomNumber];
	gamePattern.push(randomChoseColor);
	var colorId = $("#" + randomChoseColor);
    colorId.fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoseColor);
    animatePress(randomChoseColor);
}

$(".btn").click(function(){
    	var userChosenColour = $(this).attr("id");
    	userClickedPattern.push(userChosenColour);
    	playSound(userChosenColour);
    	animatePress(userChosenColour);
    	checkAnswer(userClickedPattern.length-1);

});


function playSound(name){
	var addressOfAudio = "sounds/" + name + ".mp3";
	var audio = new Audio(addressOfAudio);
    audio.play();
}

function animatePress(currentColor){
	var currentButton = $("#" + currentColor)
	currentButton.addClass("pressed");
	setTimeout(function() {
    currentButton.removeClass('pressed');
    }, 100);

}

function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
    	console.log("wrong");
    	playSound("wrong");
    	$("body").addClass("game-over");
    	setTimeout(function() {
    		$("body").removeClass("game-over");
    	}, 200);
    	$("h1").text( "Game Over, Press Any Key to Restart");
    	startOver();

     }

}

function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}
