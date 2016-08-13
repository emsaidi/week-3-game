var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var tries = 0;
var guesses = [];
var guessesLeft = 10;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	    if (tries <= 9){
			if (userGuess === computerGuess){
				wins++;
				//addTrophy();
			}else{
				losses++;
			}
			guesses.push(userGuess);
			tries++;
			guessesLeft = guessesLeft - 1;
		}else if (tries >= 10){
			reset();
			}	

		var html = "<p>Guess what letter I'm thinking of.</p>" +
		"<p>Wins: " + 
		wins + 
		"</p>" +
		"<p>Losses: " + 
		losses + 
		"</p>" +
		"<p>Tries: " +
		tries +
		"<p>" +
		"<p> Guesses Left: " +
		guessesLeft +
		"<p>" +
		"</p>Guesses So Far: " +
		guesses.join(" | ");

	document.querySelector('#game').innerHTML = html;

}

function reset(){
	guesses = [];
	tries = 0;
	losses = 0;
	guessesLeft = 10;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	alert("You've exhausted your tries. Try again.");
}

//function addTrophy(){
	//var img = document.createElement('img');
	//img.src = 'assets/images/trophy.png';

	//var src = document.getElementById('#trophy');
	//src.appendChild(img);
//}