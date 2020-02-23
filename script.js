// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passLength = prompt("How many character would you like to use? min:8 max:128");
var upperCase = confirm("Would you like to use Capitalization?");
var lowerCase = confirm("Would you like tl use Lowercase?");
var symbol = confirm("would you like to use Symbols?");
var num = confirm("Would you like to use Numbers?");

var passArray = [passLength,upperCase,lowerCase,symbol,num]
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){
  passLength.value;
  upperCase.value;
  lowerCase.value;
  symbol.value;
  num.value;
  generatePassword(passLength,upperCase,lowerCase,symbol,num)
});

function generatePassword(passLength,upperCase,lowerCase,symbol,num){
    var generatedPassword = "";

    for(var i = 0, )
};





// object consisting of random functions
// var randomPass = {
  // upper: randomUpper,
  // lower: randomLower,
  // symbol: randomSymbol,
  // number: randomNumber,
// };




function randomUpper (){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65 );
  
}

function randomLower(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97 );
}

 function randomSymbol (){
  var symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


 function randomNumber (){
  return String.fromCharCode(Math.floor(Math.random()* 9) + 49 );
}


// uppcase character
// if(upperCase = true){
//   randomPass.randomUpper();


  // }}


// lowercase character
// if(lowerCase){

// }

// symbol character
// if(symbol){

// }

// number charcter
// if(num){

// }


// if statement for character length
// if(passLength< 8){
//   prompt("Min character length is 8. Try again");
// }else if(passLength > 128){
// prompt("Max character length is 128. Try again");
// }else{
// alert("Thank you!");
// }
