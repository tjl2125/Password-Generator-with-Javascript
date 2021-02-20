// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz"; 
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
  var pLength = window.prompt("Please type in a number between 8-128 characters.");
  if (!pLength) {
    window.alert("Please select a number between 8-128 characters and try again.");
    return;
  }
  else if (pLength < 8 || pLength > 128) {
    window.alert("Please select a number between 8-128 characters and try again.");
    return;
  }
//checks to see if the number entered is a number
  else if(isNaN(pLength)){
    window.alert("Please type in a number not a character. Please try again");
    return;
  }
  else if (pLength >= 8 || pLength <= 128) {
    console.log(pLength);
  }