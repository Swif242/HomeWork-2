// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// variables
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var symbols = "!@#$%^&*()";
//   var number = "123456789"
//   var randPass = [upper, lower, symbols, numbers];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// symbol.value;
// num.value;
//   password.value = generatedPassword(passLength.value, char)
// });
  var passLength;
  var cap;
  var low;
  var sym;
  var num;


function generatePassword() {
  // prompt user password criteria
  passLength = parseInt(prompt("How many character would you like to use? min:8 max:128"));
  cap = confirm("Would you like to use Capitalization?");
  low = confirm("Would you like tl use Lowercase?");
  sym = confirm("would you like to use Symbols?");
  num = confirm("Would you like to use Numbers?");
  password = "";

 
  // if all criteria are true
  // if (cap == true && low == true && sym == true && num == true) {
  //   var character = "123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   // var password = "";
  //   for (var i = 0; i < passLength; i++) {
  //     password = password + character.charAt(Math.floor(Math.random() * Math.floor(character.length - 1)));

  //   };
   
  // } 

  
    if (cap == true) {
      var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (var i = 0; i < passLength; i++) {
        password = password + upper.charAt(Math.floor(Math.random() * Math.floor(upper.length -1)));
      }
      
    };
    
    if (low == true) {
      var lower = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < passLength; i++) {
        password = password + lower.charAt(Math.floor(Math.random() * Math.floor(lower.length -1)));
      }
      
    };

    if (sym == true) {
      var symbol = "!@#$%^&*()";
      for (var i = 0; i < passLength; i++) {
        password = password + symbol.charAt(Math.floor(Math.random() * Math.floor(symbol.length -1)));
      };
  
    };

    if (num == true) {
      var number = "123456789";
      for (var i = 0; i < passLength; i++) {
        password = password + number.charAt(Math.floor(Math.random() * Math.floor(number.length -1)));
      };
    
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
//   password = password + upper.charAt(Math.floor(Math.random() * Math.floor(upper.length - 1)));
//   // return password;
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
// randomNumber();
// };

// if (sym == true) {
// randomSymbol();
// };

// if (low == true) {
//   randomLower();
// };
// if (cap == true) {
//  randomUpper();
// };