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

// var num = ;
// var symbol = "";
// var passLength = prompt("How many character would you like to use? min:8 max:128");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// symbol.value;
// num.value;
//   password.value = generatedPassword(passLength.value, char)
// });



function generatePassword() {
  // prompt user password criteria
  var passLength = prompt("How many character would you like to use? min:8 max:128");
  var cap = confirm("Would you like to use Capitalization?");
  var low = confirm("Would you like tl use Lowercase?");
  var sym = confirm("would you like to use Symbols?");
  var num = confirm("Would you like to use Numbers?");

  // if all criteria are true
  if (cap == true && low == true && sym == true && num == true) {
    var character = "123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password = password + character.charAt(Math.floor(Math.random() * Math.floor(character.length - 1)));

    };

    return password;
  }
  else if (cap == true) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password = password + upper.charAt(Math.floor(Math.random() * Math.floor(upper.length - 1)));
    }
    return password;
  }
  else if (low == true) {
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password = password + lower.charAt(Math.floor(Math.random() * Math.floor(lower.length - 1)));
    }
    return password;
  }
  else if (sym == true) {
    var symbol = "!@#$%^&*()";
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password = password + symbol.charAt(Math.floor(Math.random() * Math.floor(symbol.length - 1)));
    }
    return password;
  }
  else if (num == true) {
    var number = "123456789";
    var password = "";
    for (var i = 0; i < passLength; i++) {
      password = password + number.charAt(Math.floor(Math.random() * Math.floor(number.length - 1)));
    }
    return password;
  }
  else {
    alert("You must confirm password criteria");
  }
};







// object consisting of random functions
// var randomPass = {
// upper: ,
// lower: randomLower,
// symbol: randomSymbol,
// number: randomNumber,
// };



// function randomUpper() {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return uppper[Math.floor(Math.random() * upper.length)];
// }

// function randomLower() {
//   var lower = "abcdefghijklmnopqrstuvwxyz"
//   return lower[Math.floor(Math.random() * lower.length)];
// }


// function randomSymbol() {
//   var symbols = "!@#$%^&*()";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }


// function randomNumber() {
//   var number = "123456789"
//   return number[Math.floor(Math.random() * number.length)];
// }



// if (num == true) {

// };

// if (sym == true) {

// };

// if (low == true) {

// };
// if (cap == true) {

// };