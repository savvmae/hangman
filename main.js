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

// Create a function that choses a random word from `commonWords` and returns it
var chooseRandomWord = function(array) {
  return commonWords[Math.floor(Math.random() *(commonWords.length - 1))];
}

var chosenWord = chooseRandomWord(commonWords);
// console.log(chosenWord);
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
      if(chosenWord.indexOf(guess) != -1) {
        correctCharacters.push(guess);
        result = true;
        index = chosenWord.indexOf(guess);
        chosenWord = chosenWord.slice(0 , index) + chosenWord.slice(index+1);
      }
      if(chosenWord.length === 0) {
        console.log("You guessed it");
        break;
      }
      console.log("You've tried: " + triedCharacters);
      console.log("The word contains: " + correctCharacters);
    }
  }

checkForCharacter();
  // The function should check the `chosenWord` for that character
  // The function should return true if the character is in the given word
  // The function should return false if the character is not in the given word
  // The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
  // The function should store and console.log every letter that has been passed to this function in the `triedCharacters` array
  // The function should store and console.log every letter in `chosenWord` that has been passed to this function in the `correctCharacters` array
  // If every letter in `chosenWord` word has been passed to this function, console.log "you guessed it"
