// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

var char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = 123456789;
var symbol = "!@#$%^&*()";
var passLength = prompt("How many character would you like to use? min:8 max:128");

confirm("Would you like to use Capitalization?");
confirm("Would you like tl use Lowercase?");
confirm("would you like to use Symbols?");
confirm("Would you like to use Numbers?");

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", writePassword, function(e){
  // passLength.value;

  symbol.value;
  num.value;
  password.value = generatedPassword(passLength.value, char)
});



function generatePassword(passLength, char){
    var pwd = " ";
  

    for(var i = 0; i < passLength; i++){
      pwd += char.charAt(Math.floor(Math.random() * char.length));
      console.log(pwd);
    }
    return pwd;
    
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


