// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Global Variables 
var confirmLength = "";
var selected;
var confirmSpecialCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;
var confirmNumericCharacters;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Pops up window to confirm number of characters for password after clicking "Generate Password"
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to be?");

  // Prompting for password length and which characters to include
  if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = prompt("Must be atleast 8 characters and no more than 128 characters");
    }
    else if (!confirmLength) {
      alert("Must choose a length");
    }
    else {
      confirmSpecialCharacters = confirm("Would you like to have special characters?");
      confirmLowerCasedCharacters = confirm("Would you like to have lowercase characters?");
      confirmUpperCasedCharacters = confirm("Would you like to have uppercase characters?");
      confirmNumericCharacters = confirm("Would you like to have numeric characters?");
    }  
    
    if (!confirmSpecialCharacters && !confirmLowerCasedCharacters && !confirmUpperCasedCharacters && !confirmNumericCharacters) {
      selected = alert("Password must include atleast one set of characters")
    }
    
}









