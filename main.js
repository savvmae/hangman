var wrongDisplay = document.querySelector('.wrong');
var correctDisplay = document.querySelector('.right');
var guessBox = document.querySelector('.guesses');
var forUser = document.querySelector('.title');
var body = document.querySelector('body');
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
var counter = 0;
var wrongGuessCount = 0;
var triedCharacters = [];
var correctCharacters = [];
var chosenWordDiced = chosenWord;

function reset(){
  document.getElementsByName('input')[0].value = "";
  document.getElementsByName('input')[0].placeholder = "Pick a friggin' letter punk";
}

function changeBackground(n) {
  console.log(wrongGuessCount);
  var backgroundClasses = [
    'background1',
    'background2',
    'background3',
    'background4',
    'background5',
    'background6',
    'background7',
    'background8',
    'background9',
    'background10',
  ];
  var currentBackGround = backgroundClasses[n - 1];
  console.log(currentBackGround);
  body.setAttribute('class',currentBackGround);

}

guessBox.addEventListener('keydown', function(event){
  if (wrongGuessCount < 10){
    if (event.keyCode === 13) {
      var guess = guessBox.value;
      console.log(guess);
        if(guess.length != 1) {
        forUser.textContent = "Try entering 1 letter.";
        reset();
        }
        else if(chosenWord.indexOf(guess) != -1) {
          correctCharacters.push(guess);
          index = chosenWordDiced.indexOf(guess);
          chosenWordDiced = chosenWordDiced.slice(0 , index) + chosenWordDiced.slice(index+1);
          forUser.textContent = "You got a letter!";
          correctDisplay.textContent = "The Magic Word Contains: " + correctCharacters;
          reset();
        }
        else if(chosenWord.indexOf(guess) === -1) {
          wrongGuessCount += 1;
          triedCharacters.push(guess);
          forUser.textContent = "Nope, try again!";
          wrongDisplay.textContent = "Incorrect Guesses: " + triedCharacters;
          changeBackground(wrongGuessCount);
          reset();
        }
      if(chosenWordDiced.length === 0) {
        forUser.textContent = "You guessed it! The word is: " + chosenWord;
        counter = 10;
        }
      }
    }
    if(wrongGuessCount === 10) {
    forUser.textContent = "You're all out of guesses, the word was " + chosenWord;
    document.getElementsByName('input')[0].placeholder = "Womp Womp";
  }
  });
