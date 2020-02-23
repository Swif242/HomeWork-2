// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};


// var pwd = "";
// var character ="123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var upper =;
// var num = ;
// var symbol = "";
// var passLength = prompt("How many character would you like to use? min:8 max:128");
// prompt user password criteria
// confirm("Would you like to use Capitalization?");
// confirm("Would you like tl use Lowercase?");
// confirm("would you like to use Symbols?");
// confirm("Would you like to use Numbers?");

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword);
  

  // symbol.value;
  // num.value;
//   password.value = generatedPassword(passLength.value, char)
// });



function generatePassword(){
  
  var character ="123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var password = "";
  var passLength = prompt("How many character would you like to use? min:8 max:128");
 
    
      for(var i = 1; i < passLength; i++){
      password =  character.charAt(Math.floor(Math.random() * Math.floor(character.length -1)));
      
    };
  return password;
  
};





// object consisting of random functions
// var randomPass = {
  // upper: randomUpper,
  // lower: randomLower,
  // symbol: randomSymbol,
  // number: randomNumber,
// };



// function randomUpper (){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 65 );
  
// }

// function randomLower(){
//   return String.fromCharCode(Math.floor(Math.random()* 26) + 97 );
// }

//  function randomSymbol (){
//   var symbols = "!@#$%^&*()";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


//  function randomNumber (){
//   return String.fromCharCode(Math.floor(Math.random()* 9) + 49 );
// }

// if(passLength >= 8){
//   upper.randomUpper();
//   lower.randomLower();
//   symbol.randomSymbol();
//   num.randomNumber();
// };

// console.log( upper + lower + num + symbol * passLength)