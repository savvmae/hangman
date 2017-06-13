var one = document.querySelector('.one');
var two = document.querySelector('.two');
var three = document.querySelector('.three');
var four = document.querySelector('.four');
var five = document.querySelector('.five');
var six = document.querySelector('.six');
var seven = document.querySelector('.seven');
var eight = document.querySelector('.eight');
var nine = document.querySelector('.nine');
var ten = document.querySelector('.ten');






// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];


var chooseRandomWord = function(array) {
  return commonWords[Math.floor(Math.random() *(commonWords.length - 1))];
}

var chosenWord = chooseRandomWord(commonWords);
var counter = 10;
var triedCharacters = [];
var correctCharacters = [];

// Create a function that accepts a single character argument
var checkForCharacter = function(character) {

  for (i = 1; i <= counter; i ++) {
    var result = false;
    var guess = prompt("pick a friggin letter, punk").toLowerCase();
    triedCharacters.push(guess);
    console.log(chosenWord);
      if(guess.length != 1) {
      alert("Try typing in ONE letter");
      }
      else if(chosenWord.indexOf(guess) != -1) {
        correctCharacters.push(guess);
        result = true;
        index = chosenWord.indexOf(guess);
        chosenWord = chosenWord.slice(0 , index) + chosenWord.slice(index+1);
      }
      if(chosenWord.length === 0) {
        alert("You guessed it");
        break;
      }
      alert("You've tried: " + triedCharacters, "The word contains: " + correctCharacters);
    }
  }

checkForCharacter();
