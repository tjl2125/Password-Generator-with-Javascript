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
  var lowerCasePrompt = confirm("Do you want lower case letters in your password?");
  
  var upperCasePrompt = confirm("Do you want upper case letters in your password?");
  
  var numbersPrompt = confirm("Do you want numbers in your password?");
 
  var specialPrompt = confirm("Do you want special characters in your password?");
  

  //prompting user to choose at least one choice
  if (lowerCasePrompt === false && upperCasePrompt === false && numbersPrompt === false && specialPrompt ===false) {
    window.alert ("Go back and choose one of the four options.");
    return; 
  } 
  else {
      var combination = "";
      if (lowerCasePrompt) {
          combination = lowerCase; 
      }
      if (upperCasePrompt) {
          combination = combination + upperCase;
      }
      if (numbersPrompt) {
          combination = combination + numbers;
      }
      if (specialPrompt) {
          combination = combination + special;
      }
      for (var i = 0; i < pLength; i++) {
          password += combination [Math.floor(Math.random() * combination.length)];
      }
  }
return password;
};