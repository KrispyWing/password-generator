//create list of characters to be selected from
//Prompt user for length of password
//Ask user to confirm if they want lower case, upper case, numbers and special characters
//confirm at least one type of character is selected
//generate the password
//display the password


//numbers list
var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//lowercase letters

var lowAlpha = [
"a",
"b", 
"c", 
"d", 
"e", 
"f", 
"g", 
"h", 
"i", 
"j", 
"k", 
"l", 
"m", 
"n", 
"o", 
"p", 
"q", 
"r", 
"s", 
"t", 
"u", 
"v", 
"w", 
"x", 
"y", 
"z"
];

//Uppercase letter list
var upAlpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Special Character list
var specChar = [
  "!", 
  "#", 
  "$", 
  "%", 
  "&", 
  "'", 
  "(", 
  ")", 
  "*", 
  "+", 
  ",", 
  "-", 
  ".", 
  "/", 
  ":", 
  ";", 
  "<", 
  "=", 
  ">", 
  "?", 
  "@", 
  "[", 
  "\\", 
  "]", 
  ",", 
  "^", 
  "_", 
  "`", 
  "{",
  "|",
  "}",
  "~",
];

// Ask user for passwrod length
var getPasswordOptions = function() {
  //Ask user for password length
  var length = window.prompt("Enter a number between 8 and 128 for your password length");
  console.log(length);

  //Ask user if they want special characters
  var hasSpecChar = window.confirm("Do you want Special Characters in your password?");
    console.log(hasSpecChar);
  
  //Ask user if they want numbers
  var hasNumChar = window.confirm("Do you want numbers in your password?");
    console.log(hasNumChar);
  
  //Ask user if they want lowercase letter
  var hasLowAlpha = window.confirm("Do you want lowercase letters in your password?");
    console.log(hasLowAlpha);
  
  //Ask user if they want uppercase letters
  var hasUpAlpha = window.confirm("Do you want uppercase letters in your password?");
    console.log(hasUpAlpha);

  // Store inputs from choices
  var passwordOptions = {
    length: length,
    hasSpecChar: hasSpecChar,
    hasNumChar: hasNumChar,
    hasLowAlpha: hasLowAlpha,
    hasUpAlpha: hasUpAlpha
  };

  return passwordOptions;
}

  //pick a random character from an array
  var randomChar = function (charArray) {
    var randomNum = Math.floor(Math.random() * charArray.length);
    var randomChoice = charArray[randomNum];
    return randomChoice;
  }

var generatePassword = function() {  
  var options = getPasswordOptions();
  
  //Variable to store the password result
  var output = [];

  // Array variable to hold all possible characters based on options picked
  var possibleChars = [];

  // Array variable to hold at least one of each character type that was chosen
  var chosenChars = [];

  //Condition to add special characters to list if hasSpecChar is true
  //Add a special character to the chosenChar array
  if (options.hasSpecChar) {
    possibleChars = possibleChars.concat(specChar);
    chosenChars.push(randomChar(specChar));
  }

  //Condition to add numbers to list if hasNumChar is true
  //Add a special character to the chosenChar array
  if (options.hasNumChar) {
    possibleChars = possibleChars.concat(numChar);
    chosenChars.push(randomChar(numChar));
  }

  //Condition to add lowercase letters to list if hasLowAlpha is true
  //Add a special character to the chosenChar array
  if (options.hasLowAlpha) {
    possibleChars = possibleChars.concat(lowAlpha);
    chosenChars.push(randomChar(lowAlpha));
  }

  //Condition to add uppercase letters to list if hasUpAlpha is true
  //Add a special character to the chosenChar array
  if (options.hasUpAlpha) {
    possibleChars = possibleChars.concat(upAlpha);
    chosenChars.push(randomChar(upAlpha));
  }

  //loop to pick random characters out of the possibleChar array
  for (var i = 0; i < options.length; i++) {
    var possibleChar = randomChar(possibleChars);
    output.push(possibleChar);
  }

  //make sure we add in at least one of each type of chosen character
  for (var i = 0; i < chosenChars.length; i++) {
    var chosenChar = randomChar(chosenChars);
    output[i] = chosenChars[i];
  }

  return output.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
