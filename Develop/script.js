// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var numbers = "0123456789"; 
var special = "!@#$%^&*(){}[]=<>/,.|~?"; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function(){

  var password="";
//prompting user to adjust length of their password
  var pLength = window.prompt("Please type in a number between 8-128 characters.");
  if (!pLength) {
    window.alert("Please select a number between 8-128 characters and try again.");
    return;
  }
  else if (pLength < 8 || pLength > 128) {
    window.alert("Please select a number between 8-128 characters and try again.");
    return;
  }
//checks to see if the input entered is actually a number
  else if(isNaN(pLength)){
    window.alert("Please type in a number not a character. Please try again");
    return;
  }
  else if (pLength >= 8 || pLength <= 128) {
    console.log(pLength);
  }
//inserting the prompts for each of the choices
  var lowerCasePrompt = confirm("Would you like to include lowercase letters in your password?");
  console.log(lowerCase);
  var upperCasePrompt = confirm("Would you like to include uppercase letters in your password?");
  console.log(upperCase);
  var numbersPrompt = confirm("Would you like to include numbers in your password?");
  console.log(numbers);
  var specialPrompt = confirm("Would you like to include special characters in your password?");
  console.log(special); 

  if (lowerCasePrompt === false && upperCasePrompt === false && numbersPrompt === false && specialPrompt ===false) {
    window.alert ("Go back and choose one of the four options.");
    return; 
  } 
  else {
      var combine = "";
      if (lowerCasePrompt) {
          combine = lowerCase; 
      }
      if (upperCasePrompt) {
          combine = combine + upperCase;
      }
      if (numbersPrompt) {
          combine = combine + numbers;
      }
      if (specialPrompt) {
          combine = combine + special;
      }
      for (var i = 0; i < pLength; i++) {
          password += combine [Math.floor(Math.random() * combine.length)];
      }
  }

return password;
};