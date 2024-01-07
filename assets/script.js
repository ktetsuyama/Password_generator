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

//Variables
var choicesNum = ["1234567890"];
var choicesUpp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var choicesLow = ["abcdefghijklmnopqrstuvwxyz"];
var choicesSpec = [" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

function generatePassword() {
  // ask if they want uppercase
  var choicesUpp = prompt(
    "Would you like to include Upper case letters in your password? \nPlease enter 'y' for yes or 'n' for no. \n(a variety of different characters, including upper case letters helps create a more secure password.)"
  );

  if (choicesUpp === "n") {
    confirm("Ok, but your password might not be very secure.");
  } else if (choicesUpp === false) {
    alert("Ok, have a good day!");
  } else {
    var choices = choices.push[i];
    confirm("Thank you. Please choose another criteria after clicking 'Ok'.");
  }

  // ask if the want lowercase
  var choicesLow = prompt(
    "Would you like to include Lower case letters in your password? \nPlease enter 'y' for yes or 'n' for no. \n(a variety of different characters, including lower case letters helps create a more secure password.)"
  );

  if (choicesLow === "n") {
    confirm("Ok, but your password might not be very secure.");
  } else if (choicesLow === false) {
    alert("Ok, have a good day!");
  } else {
    confirm("Thank you. Please choose another criteria after clicking 'Ok'.");
  }
  // ask if they want digits
  var choicesNum = prompt(
    "Would you like to include numerical digits in your password? \nPlease enter 'y' for yes or 'n' for no. \n(a variety of different characters, including numerical digits helps create a more secure password.)"
  );

  if (choicesNum === "n") {
    confirm("Ok, but your password might not be very secure.");
  } else if (choicesNum === false) {
    alert("Ok, have a good day!");
  } else {
    confirm("Thank you. Please choose another criteria after clicking 'Ok'.");
  }
  // ask if they want special characters
  var choicesSpec = prompt(
    "Would you like to include Special characters in your password? \nPlease enter 'y' for yes or 'n' for no. \ne.g., \" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\n(a variety of different characters, including Special characters helps create a more secure password.)"
  );

  if (choicesSpec === "n") {
    confirm("Ok, but your password might not be very secure.");
  } else if (choicesSpec === false) {
    alert("Ok, have a good day!");
  } else {
    confirm("Thank you. Please choose another criteria after clicking 'Ok'.");
  }
  // ask for number of characters
  var passLength = prompt(
    "How many characters in length would you like your password to be? \nPlease enter a numerical value between 8 - 128. \n(longer passwords are more secure passwords.)"
  );

  // is it between 8-128 characters?
  if (passLength < 8 || passLength > 128) {
    confirm(
      "Please choose a number of characters that is at least 8 but not more the 128"
    );
  } else {
    confirm(
      "Thank you. I will generate a password based on your criteria when you click 'Ok'."
    );
  }
  // for each character in the password
  // randomly select a chosen character type
  // randomly select a character from that type
  // add it to the password
  // ensure at least one type of chosen types is included in password
}

var password = choices[Math.floor(Math.random() * choices.length)];
