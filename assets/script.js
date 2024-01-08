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
var choicesNum = ["0123456789"];
var choicesUpp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var choicesLow = ["abcdefghijklmnopqrstuvwxyz"];
var choicesSpec = [" !\"\\#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

function generatePassword() {
	var userPass = "";
		
	// ask for number of characters

	var passLength = prompt("How many characters in length would you like your password to be? \nPlease enter a numerical value between 8 - 128. \n(hint: longer passwords are more secure passwords.)");

	// is it between 8-128 characters?
	if (passLength < 8 || passLength > 128) {
		alert("Please choose a number of characters that is at least 8 but not more the 128");
		return generatePassword();
	} else if (isNaN(passLength)) {
		alert("Please choose a number of characters that is at least 8 but not more the 128");
		return generatePassword();
	} else {
		alert("Thank you, I will generate a password that is " + passLength + " characters long.");
	}

	// ask if they want uppercase
	var choicesUpp = confirm("Would you like to include Upper case letters in your password? \n(hint: a variety of different characters, including upper case letters helps create a more secure password.)");

	if (choicesUpp) {
		alert("Thank you. Your password will include upper case letters. \nPlease choose another criteria after clicking 'Ok'.");
	} else {
		alert("Ok, your password will not include upper case letters, but your password might not be very secure.");
	}

	// ask if the want lowercase
	var choicesLow = confirm("Would you like to include Lower case letters in your password? \n(a variety of different characters, including lower case letters helps create a more secure password.)");

	if (choicesLow) {
		alert("Thank you. Your password will include lower case letters.  Please choose another criteria after clicking 'Ok'.");
	} else {
		alert("Ok, your password will not include lower case letters, but your password might not be very secure.");
	}
	// ask if they want digits
	var choicesNum = confirm("Would you like to include numerical digits in your password? \n(a variety of different characters, including numerical digits helps create a more secure password.)");

	if (choicesNum) {
		alert("Thank you. Your password will include numerical digits. Please choose another criteria after clicking 'Ok'.");
	} else {
		alert("Ok, your password will not include numerical digits, but your password might not be very secure.");
	}
	// ask if they want special characters
	var choicesSpec = confirm("Would you like to include Special characters in your password? \ne.g., \" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\" \n(hint: a variety of different characters, including Special characters helps create a more secure password.)");

	if (choicesSpec) {
		alert("Thank you. Your password will include special characters.");
	} else {
		alert("Ok, your password will not include special characters, but your password might not be very secure.");
	}

	// ensure at least one type of chosen types is included in password

	if (!choicesUpp && !choicesLow && !choicesNum && !choicesSpec) {
		alert ("You must choose at least one of the criteria to generate a password. \nLet's start over.");
		return generatePassword();
	} else {
		alert("I will generate your password.");
	}
	// for each character in the password, randomly select a chosen character type, randomly select a character from that type, add it to the password

	if (choicesUpp) {
		userPass = userPass.concat(this.choicesUpp);
	}
	if (choicesLow) {
		userPass = userPass.concat(this.choicesLow);
	}
	if (choicesNum) {
		userPass = userPass.concat(this.choicesNum);
	}
	if (choicesSpec) {
		userPass = userPass.concat(this.choicesSpec);
	}
	
	var finalPassword = "";

	for (var i = 0; i < passLength; i++) {
		var fin = [Math.floor(Math.random() * userPass.length)];
		finalPassword = finalPassword + userPass[fin];
	}

	return finalPassword;
}
