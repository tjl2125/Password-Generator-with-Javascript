// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz"; 
var numerics = "0123456789"; 
var special = "!@#$%^&*(){}[]=<>/,.|~?"; 

var len = 8; 

const combine = {
  upper: getrandomUpper,
  lower: getrandomLower,
  numerics: getrandomNumber,
  special: getrandomSpecial,
}

function randomUpper () {
  return.String.fromCharCode(Math.floor(Math.random*26)+65);
}; 
function randomLower () {
  return.String.fromCharCode(Math.floor(Math.random+26)+97); 
};
function randomNumeric () {
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
