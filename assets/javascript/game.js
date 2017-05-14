
//global variables
var userKey = '';
var randomWord = '';
var words = [
{
	word: 'miles',
	image: 'assets/images/milesmain.jpg',
	name: 'Miles Davis',
	text: 'Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter, bandleader, and composer.'
},
{
	word: 'trane',
	image: 'assets/images/coltranemain.jpg',
	name: 'John Coltrane',
	text: ''
}
];

//object
var hangman = {
	guessesLeft: 13,
	guessedLetters: [],
	wins: 0,
	guessWord: [],

//dom variables
currentWordHtml: document.getElementById('currentWord'),
guessesLeftHtml: document.getElementById('guessesLeft'),
guessedLettersHtml: document.getElementById('guessedLetters'),
winsHTML: document.getElementById('wins'),
winHTML: document.getElementById('winner'),
instructionsHTML: document.getElementById('instructions'),
winTextHTML: document.getElementById('winnerText'),
milesAudio: document.getElementById('milesAudio'),

//array of different words that the user will try to guess
// words:['miles', 'trane', 'bird', "duke", "count", "monk", "dizzy", "satchmo", "ella"],

//pick a random word from the array
randomWordGetter: function (arr){
	return arr[Math.floor(Math.random()*words.length)].word;
},


// function to show array that is the length of the currently selected word, but with all blank spaces

reset: function (){
	this.guessWord = [];
	this.guessedLetters = [];
	this.guessedLettersHtml.innerText=guessedLetters;
	this.guessesLeft = 13;
	this.guessesLeftHtml.innerText=guessesLeft;
},
showguessWord: function (){
	this.reset();
	// create a for loop that iterates through the currently selected word length
	for(var i = 0; i < randomWord.length; i++){
		// and pushes a blank space into a new array, one space for each letter
		this.guessWord.push('-');
	}
	//update the dom to show variable with blank spaces
	this.currentWordHtml.innerText=this.guessWord.join('');
},


checkLetter: function(){
	// loop through the letters in the currently selected word
	for (var i = 0; i < randomWord.length; i++){
	//if the user presses the key that is a letter in the currently selected word
	if (userKey===randomWord[i]){
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
			//add one win to wins variable
			wins++;
			//update dom
			winsHTML.innerText=wins;
		}
	}	
};

		// if(randomWord==='miles'){
		// 	winHTML.src = "assets/images/milesmain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText='Miles Davis';
		// 	instructionsHTML.innerText='Miles Dewey Davis III (May 26, 1926 – September 28, 1991) was an American jazz trumpeter, bandleader, and composer.';
		// 	milesAudio.play();
		// } else if(randomWord ==='trane'){
		// 	winHTML.src = "assets/images/coltranemain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText='John ("Trane") Coltrane';
		// }else if(randomWord ==='bird'){
		// 	winHTML.src = "assets/images/birdmain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText= 'Charlie "Bird" Parker';
		// }else if(randomWord ==='duke'){
		// 	winHTML.src = "assets/images/dukemain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText= 'Duke Ellington';
		// }else if(randomWord ==='count'){
		// 	winHTML.src = "assets/images/countmain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText='Count Basie';
		// }else if(randomWord ==='monk'){
		// 	winHTML.src = "assets/images/monkmain.png";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText= 'Thelonious Monk';
		// }else if(randomWord==='dizzy'){
		// 	winHTML.src = "assets/images/dizzymain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText='Dizzy Gillespie';
		// }else if(randomWord==='satchmo'){
		// 	writeOut("assets/images/satchmomain.jpg", 'Louis "Satchmo" Armstrong');
		// }else if(randomWord==='ella'){
		// 	winHTML.src = "assets/images/ellamain.jpg";
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText='Ella Fitzgerald';
		// }



		// 	winHTML.src = image;
		// 	winHTML.style.display = "block";
		// 	winTextHTML.innerText=name;
		// }
		// //generate new random word 
		// randomWord = randomWordGetter(words);
		// //show random word as blank spaces
		// showguessWord();
	// } 
	//reset score and pick new random word
	// if (guessesLeft === 0){
	// 	randomWord = randomWordGetter(words);
	// 	showguessWord();
	// }

//calls
randomWord=hangman.randomWordGetter(words);
hangman.showguessWord();


//listen for key event
document.onkeyup=function(event){
	userKey = event.key;
	hangman.checkLetter();
},

function writeOut(){
	for (var i = 0; i < words.length; i++) {
		if (guessWord === words[i].word){
			console.log(words[i].name);
			console.log(words[i].image);
		}
	}
};