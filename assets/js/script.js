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
}

var generatePassword = function() {
  debugger;
  getPasswordOptions();
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
