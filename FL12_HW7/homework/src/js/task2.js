let start, min, max, rand, guess;
let maxValue = 8;
const defMaxValue = 8;
const valueIncrement = 4;
const minValue = 0;
let attempts = 3;
let prize = 0; //total prize
let defWin = 100; //current reward for correct answer
const defVal = 100; //default reward
let playIteration = 1;
let temp = false;
const maxAttempts = 3;
const half = 2;
const randOne = 1;

start = confirm('Do you want to play a game');
min = Math.ceil(minValue);
max = Math.floor(maxValue);
rand = Math.floor(Math.random() * (max - min + randOne)) + min;
if(start === true){
	while(attempts !== 0){
	defWin = attempts === maxAttempts ? defVal * playIteration : defWin / half; //if it is first attempt defWin 100, else defWin/2
	guess = prompt('Choose a roulette pocket number from ' + min + ' to ' + max +
		'\nAttempts left: ' + attempts +
		'\nTotal prize: ' + prize + '$' +
		'\nPossible price on current attempt: ' + defWin + '$');
	guess = parseInt(guess);
	if(guess !== rand){ // loss
		attempts--;
		alert(`Thank you for your participation. Your prize is: ${prize}$`)
		temp = confirm('Would you like to proceed?');
		if(temp === true && attempts === 0){ // if user wants to proceed, but has no more attempts
	attempts = maxAttempts;
	maxValue = defMaxValue;
	prize = 0;
	max = Math.floor(maxValue);
rand = Math.floor(Math.random() * (max - min + randOne)) + min;
defWin = defVal;
playIteration = randOne;
}
} else if(guess === rand){ // win
	prize += defWin;	
	start = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
	if(!start){
	alert(`Thank you for your participation. Your prize is: ${prize}$`);
	start = confirm('Change your mind and play?');
} if(start) {
	attempts = maxAttempts;
	playIteration++;
	maxValue += valueIncrement;
	max = Math.floor(maxValue);
rand = Math.floor(Math.random() * (max - min + randOne)) + min;
} 
} 
} 
} else { // cancel
	alert('You did not become a billionaire, but can');
}