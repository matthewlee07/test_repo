'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}
console.log(jediName('Garner', 'Brad'));

function beyond(num) {
  switch (true) {
    case (num === 0):
      console.log('Staying home');
      break;
    case (isFinite(num) && num > 0):
      console.log('Positive finite');
      break;
    case (isFinite(num) && num < 0):
      console.log('Negative finite');
      break;
    case (!isFinite(num)):
      console.log('Infinite');
      break;
  }
}
/*
beyond(-3);
beyond(0);
beyond(5);
beyond(Infinity);
*/

const theDecoder = [
  {
    letter: 'a',
    character: 2
  }
]

function decode(theWord) {
  // start with a map for how to decode (decoder): that will be an array to key first letters with character
  // {letter: c, character: 4}; this could be an alg. if there are "rules"
  if (theWord[0] === 'a') {
    return theWord[1];
  } else if (theWord[0] === 'b') {
    return theWord[2];
  } else if (theWord[0] === 'c') {
    return theWord[3];
  } else if (theWord[0] === 'd') {
    return theWord[4];
  } else {
    return ' ';
  }
  // rules we know now: input word, get 1st letter, correlate w/ other letter
  // get first letter of the theWord
  // use first letter to look up correlating letter (in e.g c = 4) in the decoder
  // return that letter
}

//console.log(decode('cycle'));
//Use your function to decode the following message: 'craft block argon meter bells brown croon droop'.
// use a forEach, treating that message as an array of words
let theString = 'craft block argon meter bells brown croon droop';
let wordArray = theString.split(' ');
//console.log('c? ' + wordArray[0]);

/*wordArray.forEach(function (theWord) {
  if (theWord[0] === 'a') {
    return theWord[1];
  } else if (theWord[0] === 'b') {
    return theWord[2];
  } else if (theWord[0] === 'c') {
    return theWord[3];
  } else if (theWord[0] === 'd') {
    return theWord[4];
  } else {
    return ' ';
  }
});

console.log(wordArray[0]);*/

//word.split(' ');
//newWord.join(' ');

function daysInMonth(month) {
  // parameter = theMonth, which will be a string
  // what is already built-in for months??
  // any data validation first? ADD IT HERE IF WE DO
  // decoder for months: switch with all 30-day, 29-day, 28-day, else 31-day
  switch (true) {
    case month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December':
    return `${month} has 31 days`;
    break;
    case month === 'April' || month === 'June' || month === 'September' || month === 'November':
    return `${month} has 30 days`;
    break;    
    case month === 'February':
    return `${month} has 28 days`;
    break;  
    default:
    return `We don't know what ${month} is.`;
    break;
  }
}

// console.log(daysInMonth('July'));

function rockPaperScissors(userChoice) {
  // single user = play against computer
  
  // computer picks random # 1-3
  let computerChoice = 1 + Math.floor(Math.random()*3);
  console.log(`computer chose ${computerChoice} & you chose ${userChoice}`);
  // user input = number (assume user doesn't see #s)
  switch(true) {
    case userChoice === computerChoice:
    return 'tie';
    break;
    case userChoice === 1 && computerChoice === 3:
    return 'rock wins';
    break;
    case userChoice === 1 && computerChoice === 2:
    return 'You win (1)';
    break;
    case userChoice > computerChoice:
    return 'You win';
    break;
    default:
    return 'You lose';
    break;
  }
//if user 1 comp 3
//if user 1 comp 2
//if user 2 comp 1 === user > comp
//if usre 2 comp 3 === default
//if user 3 comp 1 === user > comp
//if user 3 comp 2 === user > comp

  // convert string to # (1-3)

  // allow ties
  // higher # wins
  // alert user of this (console.log for now)
}
console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));

// function RockPaperScissors(userChoice){
//   var computer = 1 + Math.floor((Math.random()*3));

// }

// RockPaperScissors(2);