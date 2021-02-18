// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789"; 
var special = "!@#$%^&*(){}[]=<>/,.|~?"; 

const combine = {
  upper: getrandomUpper,
  lower: getrandomLower,
  numbers: getrandomNumber,
  special: getrandomSpecial,
}

var lengthPrompt = function() {
  var userChoice = window.prompt("Enter a number between 8 - 128 characters: ");
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  else if (userChoice < 8 && userChoice < 128) {
    window.alert("Please choose a password length between 8 - 128 characters");
    return;
  }
  else if (userChoice >= 8 && userChoice <= 128) {
    var characterLength = userChoice;
    console.log(characterLength);
    return;
  }
};


function randomUpper () {
  return.String.fromCharCode(Math.floor(Math.random*26)+65);
}; 
function randomLower () {
  return.String.fromCharCode(Math.floor(Math.random+26)+97); 
};
function randomNumber () {
  return.String.fromCharCode(Math.random()*10)+48); 
  }
function randomSpecial () {
  return symbol[Math.floor(Math.random()*symbol.length)]; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















