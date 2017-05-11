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
var winHTML = document.getElementById('winner');
var instructionsHTML = document.getElementById('instructions');
var audio = document.querySelectorAll('audio');
var winTextHTML = document.getElementById('winnerText');
var milesAudio = document.getElementById('milesAudio');
var traneAudio = document.getElementById('traneAudio');
var birdAudio = document.getElementById('birdAudio');
var dukeAudio = document.getElementById('dukeAudio');
var countAudio = document.getElementById('countAudio');
var monkAudio = document.getElementById('monkAudio');
var dizzyAudio = document.getElementById('dizzyAudio');
var satchmoAudio = document.getElementById('satchmoAudio');
var ellaAudio = document.getElementById('ellaAudio');

//array of different words that the user will try to guess
var words = ['miles', 'trane', 'bird', "duke", "count", "monk", "dizzy", "satchmo", "ella"];

//pick a random word from the array
function randomWordGetter (arr){
	return arr[Math.floor(Math.random()*words.length)];
}
var randomWord = randomWordGetter(words);

// function to show array that is the length of the currently selected word, but with all blank spaces
function showguessWord(){
	guessWord = [];
	guessedLetters = [];
	guessedLettersHtml.innerText=guessedLetters;
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
		currentWordHtml.innerText= guessWord.join('');
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
		// pausing audio of previous guess
		for(i =0; i < audio.length; i++){
			if(!audio[i].paused){
				audio[i].pause();
			}
		}
		//add one win to wins variable
		wins++;
		//update dom
		winsHTML.innerText=wins;
		if(randomWord==='miles'){
			winHTML.src = "assets/images/milesmain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='Miles Davis';
			instructionsHTML.innerText='Miles Dewey Davis III was an American jazz trumpeter, bandleader, and composer. He is among the most influential and acclaimed figures in the history of jazz and 20th century music.';
			milesAudio.play();
		} else if(randomWord ==='trane'){
			winHTML.src = "assets/images/coltranemain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='John ("Trane") Coltrane';
			instructionsHTML.innerText='John William Coltrane, also known as "Trane", was an American jazz saxophonist and composer. Working in the bebop and hard bop idioms early in his career, Coltrane helped pioneer the use of modes in jazz and was later at the forefront of free jazz.';
			traneAudio.play();
		}else if(randomWord ==='bird'){
			winHTML.src = "assets/images/birdmain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText= 'Charlie "Bird" Parker';
			instructionsHTML.innerText='Charles "Charlie" Parker, Jr. (August 29, 1920 – March 12, 1955), also known as Yardbird and Bird, was an American jazz saxophonist and composer. Parker was a highly influential jazz soloist and a leading figure in the development of bebop, a form of jazz characterized by fast tempos, virtuosic technique and advanced harmonies.';
			birdAudio.play();
		}else if(randomWord ==='duke'){
			winHTML.src = "assets/images/dukemain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText= 'Duke Ellington';
			instructionsHTML.innerText='Edward Kennedy "Duke" Ellington was an American composer, pianist, and bandleader of a jazz orchestra, which he led from 1923 until his death in a career spanning over fifty years.';
			dukeAudio.play();
		}else if(randomWord ==='count'){
			winHTML.src = "assets/images/countmain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='Count Basie';
			instructionsHTML.innerText='William James "Count" Basie (August 21, 1904 – April 26, 1984) was an American jazz pianist, organist, bandleader, and composer. Count Basie is considered one of the greatest bandleaders of all times. He was the arbiter of the big-band swing sound and his unique style of fusing blues and jazz established swing as a predominant music style.';
			countAudio.play();
		}else if(randomWord ==='monk'){
			winHTML.src = "assets/images/monkmain.png";
			winHTML.style.display = "block";
			winTextHTML.innerText= 'Thelonious Monk';
			instructionsHTML.innerText="Thelonious Sphere Monk (October 10, 1917[3] – February 17, 1982) was an American jazz pianist and composer. Monk had a unique improvisational style and made numerous contributions to the standard jazz repertoire. Monk is the second most-recorded jazz composer after Duke Ellington, which is particularly remarkable as Ellington composed more than a thousand pieces, whereas Monk wrote about 70.";
			monkAudio.play();
		}else if(randomWord==='dizzy'){
			winHTML.src = "assets/images/dizzymain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='Dizzy Gillespie';
			instructionsHTML.innerText='John Birks "Dizzy" Gillespie (October 21, 1917 – January 6, 1993) was an American jazz trumpeter, bandleader, composer, and singer, who  played with Charlie Parker and developed the music known as "bebop."';
			dizzyAudio.play();
		}else if(randomWord==='satchmo'){
			winHTML.src = "assets/images/satchmomain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='Louis "Satchmo" Armstrong';
			instructionsHTML.innerText='Louis Armstrong (August 4, 1901 – July 6, 1971), nicknamed Satchmo, Satch, or Pops was an American trumpeter, composer, singer and occasional actor who was one of the most influential figures in jazz.';
			satchmoAudio.play();
		}else if(randomWord==='ella'){
			winHTML.src = "assets/images/ellamain.jpg";
			winHTML.style.display = "block";
			winTextHTML.innerText='Ella Fitzgerald';
			instructionsHTML.innerText='Ella Jane Fitzgerald (April 25, 1917 – June 15, 1996) was an American jazz singer often referred to as the First Lady of Song, Queen of Jazz and Lady Ella, she was the most popular female jazz singer in the United States for more than half a century. In her lifetime, she won 13 Grammy awards and sold over 40 million albums.';
			ellaAudio.play();
		}
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

