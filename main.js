var wrongDisplay = document.querySelector('.wrong');
var correctDisplay = document.querySelector('.right');
var guessBox = document.querySelector('.guesses');
var forUser = document.querySelector('.title');
var body = document.querySelector('body');
var letterHolder = document.querySelector('.letter-holder');
var unguessedHolder = document.querySelector('.unguessed-holder');
var incorrectLetters = document.querySelector('.incorrect-letters');
// var guessedBox = document.querySelector('.guessed');
// fix this.

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
var correctCharacters = chosenWord.split("");
console.log(correctCharacters);
var counter = 0;
var wrongGuessCount = 0;
var triedCharacters = [];
var chosenWordDiced = chosenWord;
var arrayOfLetterDivs = [];

function reset(){
  document.getElementsByName('input')[0].value = "";
  document.getElementsByName('input')[0].placeholder = "Pick a friggin' letter punk";
}

function changeBackground(n) {
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
  body.setAttribute('class',currentBackGround);
}
(function letterToggle(word) {
  for (i = 0; i < word.length; i ++) {
    var letterDiv = document.createElement('div');
    var unguessedLetterDiv = document.createElement('div');
    var letter = word[i];
    arrayOfLetterDivs.push(letterDiv);
    letterDiv.textContent = letter;
    letterDiv.setAttribute('class', 'letter disappear');
    unguessedLetterDiv.setAttribute('class', 'unguessed');
    letterHolder.appendChild(letterDiv);
    unguessedHolder.appendChild(unguessedLetterDiv);

  }
})(correctCharacters);

guessBox.addEventListener('keydown', function(event){
  if (wrongGuessCount < 10){
    if (event.keyCode === 13) {
      var guess = guessBox.value;
      console.log(guess);
        if(guess.length != 1) {
        forUser.textContent = "Try entering 1 letter.";
        reset();
        }
        else if(chosenWordDiced.indexOf(guess) != -1) {
          for(i = 0; i < chosenWord.length; i ++){
            if(chosenWordDiced.indexOf(guess) != -1) {
              index = chosenWordDiced.indexOf(guess);
              console.log(index);
              chosenWordDiced = chosenWordDiced.slice(0 , index) + chosenWordDiced.slice(index+1);
              forUser.textContent = "You got a letter!";
              console.log(chosenWordDiced);
          }
        }
          for (i = 0; i < arrayOfLetterDivs.length; i ++) {
            var currentLetter = arrayOfLetterDivs[i].textContent;
            if (currentLetter.indexOf(guess) != -1){
            arrayOfLetterDivs[i].setAttribute('class', 'letter');
            }
          }
          reset();
        }
        else if(chosenWord.indexOf(guess) === -1) {
          wrongGuessCount += 1;
          triedCharacters.push(guess);
          forUser.textContent = "Nope, try again!";
          incorrectLetters.textContent = triedCharacters;
          changeBackground(wrongGuessCount);
          reset();
        }
      if(chosenWordDiced.length === 0) {
        forUser.textContent = "This is fight night and IIIIII aaaaaaaam the kiiiiiiiing!";
        body.setAttribute('class', 'victory-background');
        document.getElementsByName('input')[0].placeholder = "Refresh to play again";
        counter = 10;
        }
      }
    }
    if(wrongGuessCount === 10) {
    forUser.textContent = "Why couldn't you just put the bunny back in the box?";
    document.getElementsByName('input')[0].placeholder = "";
    document.getElementsByName('input')[0].placeholder = "The word was: " + chosenWord;
    // guessedBox.setAttribute('class', 'disappear');
    // need to fix this.
  }
  });
