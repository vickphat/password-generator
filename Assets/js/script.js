// Variables 
var confirmLength = [];
var confirmSpecialCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;
var confirmNumericCharacters;
var selected;

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

// Pops up notification to confirm number of characters for password after clicking "Generate Password"
function generatePassword() {
  var confirmLength = prompt("How many characters would you like your password to be?");
  if (confirmLength >= 8 && confirmLength <= 128)
    alert("Your password will have " + confirmLength + " characters.");

  // Prompting for password length and which characters to include
  if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = alert("Must be atleast 8 characters and no more than 128 characters");
  } 
  // Options are given once length requirements are met
  else {
    confirmSpecialCharacters = confirm("Include special characters?");
    confirmLowerCasedCharacters = confirm("Include lowercase characters?");
    confirmUpperCasedCharacters = confirm("Include have uppercase characters?");
    confirmNumericCharacters = confirm("Include numeric characters?");
  }

  // Pops up a notification if no options are chosen
  if (!confirmSpecialCharacters && !confirmLowerCasedCharacters && !confirmUpperCasedCharacters && !confirmNumericCharacters ) {
    selected = alert("Password must include atleast one option");
  }
  // If all options are picked
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters && confirmNumericCharacters) {
    selected = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters, numericCharacters);
  }
  // If 3 options are picked
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selected = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters && confirmNumericCharacters) {
    selected = specialCharacters.concat(lowerCasedCharacters, numericCharacters);
  }
  else if (confirmSpecialCharacters && confirmUpperCasedCharacters && confirmNumericCharacters) {
    selected = specialCharacters.concat(upperCasedCharacters, numericCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmUpperCasedCharacters && confirmNumericCharacters) {
    selected = lowerCasedCharacters.concat(upperCasedCharacters, numericCharacters);
  }
  // If 2 options were picked
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters) {
    selected = specialCharacters.concat(lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmUpperCasedCharacters) {
    selected = specialCharacters.concat(upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmNumericCharacters) {
    selected = specialCharacters.concat(numericCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmUpperCasedCharacters) {
    selected = lowerCasedCharacters.concat(upperCasedCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmNumericCharacters) {
    selected = lowerCasedCharacters.concat(numericCharacters);
  }
  else if (confirmUpperCasedCharacters && confirmNumericCharacters) {
    selected = upperCasedCharacters.concat(numericCharacters);
  }
  // If only 1 options was picked
  else if (confirmSpecialCharacters){
    selected = specialCharacters;
  }
  else if (confirmLowerCasedCharacters){
    selected = lowerCasedCharacters;
  }
  else if (confirmUpperCasedCharacters){
    selected = upperCasedCharacters;
  }
  else if (confirmNumericCharacters){
    selected = numericCharacters;
  }

  var password = [];
// For loop
  for (var i = 0; i < confirmLength; i++) {
    var pickSelected = selected[Math.floor(Math.random() * selected.length)];
    password.push(pickSelected);
  }
  var result = password.join([]);
  return result;
}
// Adds password into the textbox
function UserInput(result) {
  document.querySelector("#password").textContent = result;
}







