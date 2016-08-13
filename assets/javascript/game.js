var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var tries = 0;
var guesses = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	    if (tries <= 9){
			if (userGuess === computerGuess){
				wins++;
			}else{
				losses++;
			}
			guesses.push(userGuess);
			tries++;
		}else if (tries >= 10){
			reset();
			}	

		var html = "<p>Guess what letter I'm thinking of.</p>" +
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>tries: " +
		tries +
		"<p >" +
		"</p>Guesses: " +
		guesses.join(" - ");

	document.querySelector('#game').innerHTML = html;

}

function reset(){
	guesses = [];
	tries = 0;
	wins = 0;
	losses =0;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	alert("You've exhausted your tries. Try again.");
}