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

// Function to prompt user for password options
function getPasswordOptions() {
  passwordLength = getPasswordLength();
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

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
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