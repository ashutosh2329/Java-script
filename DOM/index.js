var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "dice" + randomNum1 + ".png";
var randomDiceImage2 = "dice" + randomNum2 + ".png";
var randomDice1 = "images/" + randomDiceImage1;
var randomDice2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[0].setAttribute("src",randomDice1);
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if (randomNum1<randomNum2) {
	document.querySelector("h1").innerHTML = "Player 2 Wins";
} 
else {
	if (randomNum1>randomNum2) {
		document.querySelector("h1").innerHTML = "Player 1 Wins";
	}
	else{
		document.querySelector("h1").innerHTML = "Draw";
	}
}

