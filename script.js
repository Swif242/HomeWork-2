// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// prompt and confirm variables
var passLength;
var cap;
var low;
var sym;
var num;


function generatePassword() {
  // prompt user password criteria
  // prompt uses parsInt to store a number instead of a string
  passLength = parseInt(prompt("How many character would you like to use? min:8 max:128"));
  cap = confirm("Would you like to use Capitalization?");
  low = confirm("Would you like to use Lowercase?");
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


  
  // if statements calling functions if confirm == true
  if (num == true) {
    randomNumber();
  };

  if (sym == true) {
    randomSymbol();
  };

  if (low == true) {
    randomLower();
  };

  if (cap == true) {
    randomUpper();
    
  };
  
  //  if statement set to fire if now criteria is chosen
  if (cap == false && low == false && sym == false && num == false){
    alert("You must confirm password criteria to continue!");
  };

  //   password += randGen();

// for loop for randomizing the returned password from passArray 
var randonmPass=""
  for (var i = 0; i < passLength; i++) {
    randonmPass = randonmPass + password.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)));
  };

  return randonmPass;
 
    

};
//  functions array to randomize selected criteria when called on
var passArray = [
randomUpper = function() {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (var i = 0; i < passLength; i++) {
    password = password + upper.charAt(Math.floor(Math.random() * Math.floor(upper.length - 1)));
  }
},


 randomLower= function() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < passLength; i++) {
    password = password + lower.charAt(Math.floor(Math.random() * Math.floor(lower.length - 1)));
  }

},


randomSymbol = function() {
  var symbols = "!@#$%^&*()";
  for (var i = 0; i < passLength; i++) {
    password = password + symbols.charAt(Math.floor(Math.random() * Math.floor(symbols.length - 1)));
  }
},


randomNumber= function() {
  var number = "123456789";
  for (var i = 0; i < passLength; i++) {
    password = password + number.charAt(Math.floor(Math.random() * Math.floor(number.length - 1)));
  }

}
];

//another way tried to randomize the firing order of the functions


// function randGen(){
//   // var passArray;
//   for(i = 0; i < passArray.length; i++){
//      password = password + passArray.charAt(Math.floor(Math.random() * Math.floor(passArray.length - 1)));
//   }
// };




//  a different way i was trying out the generator functions

// if (cap == true) {
//   //       var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //       for (var i = 0; i < passLength; i++) {
  //         password = password + upper.charAt(Math.floor(Math.random() * Math.floor(upper.length -1)));
  //       }

  //     };

  //     if (low == true) {
  //       var lower = "abcdefghijklmnopqrstuvwxyz";
  //       for (var i = 0; i < passLength; i++) {
  //         password = password + lower.charAt(Math.floor(Math.random() * Math.floor(lower.length -1)));
  //       }

  //     };

  //     if (sym == true) {
  //       var symbol = "!@#$%^&*()";
  //       for (var i = 0; i < passLength; i++) {
  //         password = password + symbol.charAt(Math.floor(Math.random() * Math.floor(symbol.length -1)));
  //       };

  //     };

  //     if (num == true) {
  //       var number = "123456789";
  //       for (var i = 0; i < passLength; i++) {
  //         password = password + number.charAt(Math.floor(Math.random() * Math.floor(number.length -1)));
  //       };
  //       return password;
  //     }
