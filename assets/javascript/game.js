// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

//have an array of different words that the user will try to guess
//iterate through the array to choose a new word each time the game starts
//an array that is the length of the currently selected word, but with all blank spaces
//show this array in the dom
//listen for a key event
//if the user presses the key that is a letter in the currently selected word
//fill in the blank array with that letter of the word in the corresponding indexes
//update the dom to show the blank array with the correctly guessed letter at corresponding indexes
//guesses left gets subracted by 1, show in the dom
//if the user presses a key that is not a letter in the currently selected word
//array for keeping track of letters guessed that aren't correct
//push the key into the guessed letters array
//update the dom to show guessed letters
//make it so the user can't guess this letter again
//variable for keeping track of guesses left
//each time a guess is made, subtract from guesses left
//if the blank array is filled with the correct letters before guesses left reaches 0
//variables for keeping track of wins
//player wins, update wins by 1, show in dom, reset game to next word in array
//if blank array is not filled before guesses left reaches 0
//players loses, reset game to next word in array

//variables
var guessesLeft = 13;
var guessedLetters =[];
var wins = 0;
var guessWord = [];

//dom variables
var currentWordHtml = document.getElementById('currentWord');
var guessesLeftHtml = document.getElementById('guessesLeft');
var guessedLettersHtml = document.getElementById('guessedLetters');
var winsHTML = document.getElementById('wins');

//array of different words that the user will try to guess
var words = ['miles', 'coltrane', 'parker'];

//pick a random word from the array
function randomWordGetter (arr){
	return arr[Math.floor(Math.random()*words.length)];
}
var randomWord = randomWordGetter(words);

// function to show array that is the length of the currently selected word, but with all blank spaces
function showguessWord(){
	guessWord = [];
	guessesLeft = 13;
	guessesLeftHtml.innerText=guessesLeft;
	// create a for loop that iterates through the currently selected word length
	for(var i = 0; i < randomWord.length; i++){
		// and pushes a blank space into a new array, one space for each letter
		guessWord.push('-');
	}
	//update the dom to show variable with blank spaces
	currentWordHtml.innerText=guessWord.join('');
}
showguessWord();

//listen for key event
document.onkeyup=function(event){
	// loop through the letters in the currently selected word
	for (var i = 0; i < randomWord.length; i++){
	//if the user presses the key that is a letter in the currently selected word
		if (event.key===randomWord[i]){
				//fill in the blank array with that letter at the correct indexes the letter appears
				guessWord[i]=event.key;
				guessWordStr = guessWord.join('');
				//subtract one from guesses left
				guessesLeft--;
				//update dom
				guessesLeftHtml.innerText=guessesLeft;
			} 
		//update dom to show the blank array with correctly guessed letter at corresponding indexes
		currentWordHtml.innerText=guessWord.join('');
	}
	// if the letter guessed is not in the random word, and the letter guessed is not already in guessedletters 
	if (randomWord.indexOf(event.key) === -1 && guessedLetters.indexOf(event.key) === -1){
		//subtract one from guesses left
		guessesLeft--;
		//update dom
		guessesLeftHtml.innerText=guessesLeft;
		//push incorrectly guessed letter to array guessedLetters
		guessedLetters.push(event.key);
		//update dom
		guessedLettersHtml.innerText=guessedLetters;
	}
	//tracking winner or loser
	if (guessWord.join('') === randomWord && guessesLeft !== 0) {
		//add one win to wins variable
		wins++;
		//update dom
		winsHTML.innerText=wins;
		//generate new random word 
		randomWord = randomWordGetter(words);
		//show random word as blank spaces
		showguessWord();
	} 
	//reset score and pick new random word
	if (guessesLeft === 0){
		randomWord = randomWordGetter(words);
		showguessWord();
	}
};

