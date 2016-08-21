//computer randomly selects one of the occupations in the array 
//user keyclick event
//if key character is the same as one of the characters in the computers array choice
//have html change to show letter placement
//if key character does not match the characters in the array, minus remaining tries html
//repeat for all characters until not matching key characters equals 5
//if wrong key strokes is => 5, alert image for try again
//if right letters are selected, show you win image
//close alert and restart from computer random choice

	var computerChoices = ["JUDGE", "NURSE", "BAKER", "ACTOR"];
	var char0 = " _ ";
	var char1 = " _ ";
	var char2 = " _ ";
	var char3 = " _ ";
	var char4 = " _ ";
	var guessRemain = 5;
	var hmAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	
	document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	//splits random occupation into an array of letters
	var letterhmAnswer = hmAnswer.split("");
	// console.log(userGuess);
	// console.log(letterhmAnswer);
	//change _ to correct letter
	if(userGuess == letterhmAnswer[0]){
		//console.log(userGuess);
		char0 = " " + userGuess + " "; 
	}
	if(userGuess == letterhmAnswer[1]){
		char1 = " " + userGuess + " ";
	}
	if(userGuess == letterhmAnswer[2]){
		char2 = " " + userGuess + " ";
	}
	if(userGuess == letterhmAnswer[3]){
		char3 = " " + userGuess + " ";
	}
	if(userGuess == letterhmAnswer[4]){
		char4 = " " + userGuess + " ";
	}
	else{
		guessRemain -= 1;
	}
	//console.log(guessRemain);
	var html = 
			"<div class='row'>" +
			"<p> Your neighbor is a " + char0 + char1 +char2 + char3 + char4 + "!</p>" +
			"</div>" +
			"<div class='row'>" +
			"<p> Number of guesses remaining: " + guessRemain + "</p>" +
			"</div>";

		document.querySelector('#game').innerHTML = html;
	// end of key press function 
	if (userGuess = 0){
		swal({   
			title: "Try Again!",   
			text: "You ran out of guesses.",   
			imageUrl: "assets/images/again.png" 
		});
	}

	}

