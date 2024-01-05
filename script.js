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

function generatePassword() {
  // ask for number of characters
  // is it between 8-128 characters?
  // ask if the want lowercase
  // ask if they want uppercase
  // ask if they want digits
  // ask if they want special characters
  // for each character in the password
  // randomly select a chosen character type
  // randomly select a character from that type
  // add it to the password
  // ensure at least one type of chosen types is included in password
}

var choicesNum = ["1234567890"];
var choicesUpp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var choicesLow = ["abcdefghijklmnopqrstuvwxyz"];
var choicesSpec = [" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var choicesNum = ["1234567890"];
var choicesUpp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var choicesLow = ["abcdefghijklmnopqrstuvwxyz"];
var choicesSpec = [" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

var length = 8 - 128;

var password = choices[Math.floor(Math.random() * choices.length)];
