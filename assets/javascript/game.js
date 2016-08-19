<!DOCTYPE JavaScript>
//computer randomly selects one of the occupations in the array 
//user keyclick event
//if key character is the same as one of the characters in the computers array choice
//have html change to show leter placement
//if key character does not match the characters in the array, have html change to show image
//repeat for all characters until not matching key characters equals 5
//if wrong key strokes is => 5, alert image for try again
//if right letters are selected, show you win image
//close alert and restart from computer random choice

<script type="text/javascript">
var computerChoices = ["Judge", "Nurse", "Baker", "Actor"];
var char0 = "_";
var char1 = "_";
var char2 = "_";
var char3 = "_";
var char4 = "_";
var guessRemain = 5;


document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var hmAnswer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//user clicks key
	if (userGuess == computerChoices.charAt(0)){
		var html = "<p> Your neighbor is a" userGuess + char1 +char2 + char3 + char4 + "!";
		"<p>Number of guesses remaining: " + guessRemain;
	}
		else if (userGuess == computerChoice.charAt(1)){
			var html = "<p> Your neighbor is a" + char0 + userGuess + char2 + char3 + char4 + "!";
			"<p>Number of guesses remaining: " + guessRemain;		
		}
	 	else if (userGuess == computerChoice.charAt(2)){
			var html = "<p> Your neighbor is a" + char0 + char1 + userGuess + char3 + char4 + "!";
			"<p>Number of guesses remaining: " + guessRemain;		
		}
		else if (userGuess == computerChoice.charAt(3)){
			var html = "<p> Your neighbor is a" + char0 + char1  + char2 + userGuess + char4 + "!";
			"<p>Number of guesses remaining: " + guessRemain;		
		}
		else if (userGuess == computerChoice.charAt(4)){
			var html = "<p> Your neighbor is a" + char0 + char1  + char2  + char3 + userGuess + "!";
			"<p>Number of guesses remaining: " + guessRemain;
		}
		else (userGuess) {
			guessRemain = -1
			var html = "Number of guesses remaining: " + guessRemain;
		}
		document.querySelector('#game').innerHTML = html;
}

</script>