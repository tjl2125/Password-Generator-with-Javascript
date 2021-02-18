// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789"; 
var special = "!@#$%^&*(){}[]=<>/,.|~?"; 

/*const combine = {
  upper: getrandomUpper,
  lower: getrandomLower,
  numbers: getrandomNumber,
  special: getrandomSpecial,
} */

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var lengthPrompt = function() {
  var userChoice = window.prompt("Please type a number between 8 - 128 characters: ");
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  else if (userChoice < 8 && userChoice < 128) {
    window.alert("Please retype a new password length that is between 8 - 128 characters");
    return;
  }
  else if (userChoice >= 8 && userChoice <= 128) {
    var characterLength = userChoice;
    return;
  }
};

var lowerCasePrompt = function() {
  var answerLC = window.prompt("Lowercase letters? (Y/N)");
  if (!answerLC) {
    window.alert("Please choose yes or no");
    lowerCasePrompt();
  }
  else if (answerLC === "Y" || answerLC === "y"){
    return;
  }
  else {
  return;
  }
};
var upperCasePrompt = function() {
  var answerUpperCase = window.prompt("Uppercase letters? (Y/N)");
  if (!answerUpperCase) {
    window.alert("Please choose yes or no");
    console.log("they did not make a choice");
    upperCasePrompt();
  }
  else if (answerUpperCase === "Y") {
    //there needs to be a function that runs there to join the array
    console.log("the user picked uppercase password");
    return;
  }
  else {
  console.log("The user did not pick uppercase password");
  return;
  }
};

var generatePassword = function () {
  //run the length prompt function
  lengthPrompt();
//run the lowercase function
  lowerCasePrompt();
//run the uppercase prompt
  upperCasePrompt();
//run the number prompt
  numberPrompt();
//run the special characters prompt
  specialPrompt();
// need another function to join the arrays below this 

/*function randomUpper () {
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
*/ 















