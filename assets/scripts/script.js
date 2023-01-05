// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength;
let isLowerCaseIncluded;
let isUpperCaseIncluded;
let isNumericIncluded;
let isSpecialCharIncluded;

// Function to prompt user for password options
function getPasswordOptions() {

  // Function to get the length of password is called and the value is stored in the variable.
  passwordLength = getPasswordLength();

  // Function to store all the possible character options required in the password is called.
  getCharacterOptions();
}

// Function to get password length
function getPasswordLength() {
  passwordLength = prompt("Please Enter a password length between 10 and 64");

  // The password length entered by the user is converted to a Number type and stored in a different variable.
  let lengthNum = Number(passwordLength);
  
  // This condition checks if the number entered by the user is a valid number or not
  if(isNaN(lengthNum)) {

    alert("It is not a valid number!");

    // The recursive function call is made to get the correct password length.
    return getPasswordLength();

  } else if(lengthNum < 10 || lengthNum > 64) {
    // This condition is used to check if the required password length entered by the user is within the range.

    // This alert is displayed to tell the user that the entered password length is out of range.
    alert("Password length is not within the range!");

    // The recursive function call is made to get the correct password length.
    return getPasswordLength();

  } else {

    // The required password length is returned.
    return lengthNum;

  }
}

// Function to prompt user to enter atleast one character option.
function getCharacterOptions() {

  // The value of character options is stored in the respective variables.
  isLowerCaseIncluded = confirm("Do you want to include Lowercase characters?");
  isUpperCaseIncluded = confirm("Do you want to include Uppercase characters?");
  isNumericIncluded = confirm("Do you want to include Numeric characters?");
  isSpecialCharIncluded = confirm("Do you want to include some special characters?");

  // This condition checks to see if atleast one character option is chosen by the user.
  if(isLowerCaseIncluded || isUpperCaseIncluded || isNumericIncluded || isSpecialCharIncluded) {
    return;
  } else {

    // Since none of the character options are chosen an alert message is displayed and the function is called again to get atleast one character option.
    alert("Please enter atleast one character option!");
    getCharacterOptions();
  }
}

// Function to build an array with all the possible characters to be included in the password.
function arrayBuilderWithOptions(arrOptions) {

  if(isLowerCaseIncluded) {

    // All the lower case characters are added to the array
    arrOptions = arrOptions.concat(lowerCasedCharacters);
  }

  if(isUpperCaseIncluded) {

    // All the upper case characters are added to the array
    arrOptions = arrOptions.concat(upperCasedCharacters);
  }

  if(isNumericIncluded) {

    // All the numeric characters are added to the array
    arrOptions = arrOptions.concat(numericCharacters);
  }

  if(isSpecialCharIncluded) {

    // All the special characters are added to the array
    arrOptions = arrOptions.concat(specialCharacters);
  }

  // Returns an array of all the possible characters required for password generation.
  return arrOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let arrayWithOptions = [];

  // Function called to get all the password options required from the user.
  getPasswordOptions();

  console.log("PasswordLength: " + passwordLength);
  console.log("LC: " + isLowerCaseIncluded);
  console.log("UC: "+isUpperCaseIncluded);
  console.log("NC: "+isNumericIncluded);
  console.log("SC: "+isSpecialCharIncluded);

  // This variable contains the list of possible characters to be used for password generation.
  arrayWithOptions = arrayBuilderWithOptions(arrayWithOptions);
  console.log(arrayWithOptions);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);