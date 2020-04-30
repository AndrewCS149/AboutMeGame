'use strict';

//greeting
alert('Hello');
var username = prompt('Hi there, what\'s your name');
// console.log('The users name is ' + username);

alert('Thanks for stopping by ' + username);

//asking user if they want to play a game
var guessingGame = prompt('would you be into playing a guessing game');

if(guessingGame.toLowerCase() === 'yes' || guessingGame.toLowerCase() === 'y'){
  alert('sweet let\'s go. I\'ll ask some questions and you answer (yes) or (no) or (y) or (n) as a reponse');
} else {
  alert('Dang, maybe next time');
}

// Did i go to school in Japan

var schoolJapan = prompt('Did I get lucky and have the chance to go to school in Japan?');

if(schoolJapan.toLowerCase() === 'yes' || schoolJapan.toLowerCase() === 'y'){
  console.log('correct');
  alert('You know it! Such a great experience');
} else if(schoolJapan.toLowerCase() === 'no' || schoolJapan.toLowerCase() === 'n'){
  console.log('incorrect');
  alert('I was there dude, read the bio');
} else {
  alert('answer yes or no');
}

// Did I join the military after highschool

var questionMilitary = prompt('Did you read about me joining the military?');

if(questionMilitary.toLowerCase() === 'yes' || questionMilitary.toLowerCase() === 'y'){
  console.log('correct');
  alert('Your on it, makes me feel so interesting');
} else if(questionMilitary.toLowerCase() === 'no' || questionMilitary.toLowerCase() === 'n'){
  console.log('incorrect');
  alert('dang, you\'re not even paying attention huh');
} else {
  alert('answer yes or no');
}

//Is my current job graphic designer

var questionDesigner = prompt('Did my bio tell you I am currently a graphic designer?');

if(questionDesigner.toLowerCase() === 'yes' || questionDesigner.toLowerCase() === 'y'){
  console.log('correct');
  alert('Nice one, visual communications for the technical name');
} else if (questionDesigner.toLowerCase() === 'no' || questionDesigner.toLowerCase() === 'n'){
  console.log('incorrect');
  alert('Come on man, give me my credit');
} else {
  alert('answer yes or no');
}






// (guessingGame.toLowerCase() === 'no' || guessingGame.toLowerCase() === 'n')