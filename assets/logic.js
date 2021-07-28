// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var length = prompt("How many characters would you like your password to be?")
    if (length < 8 || length > 128) {
        alert("Password must be between 8 and 128")
        return
    }

    var upperCase = confirm("Do you want to include uppercase characters?")
    var lowerCase = confirm("Do you want to include lowercase characters?")
    var numeric = confirm("Do you want to include numeric values?")
    var special = confirm("Do you want to add special characters?")
    if (upperCase === false && lowerCase === false && numeric === false && special === false) {
    alert("Please use one type of character")
    return
    }

    var upperChars = "ABCDEGHIJKLMNOPQRSTUVWXYZ"
    var lowerChars = "abcdefghijklmnopqrstuvwxyz"
    var numeric = "0123456789"
    var special = "!@#$%^&*()"

    var superChars = ""

    if (upperCase === true ) {
        superChars = superChars + upperChars
    }

    if (lowerCase === true){
        superChars = superChars + lowerChars
    }

    if (numeric === true) {
        superChars = superChars + numeric
    }
    
    if (special === true) {
        superChars = superChars + special
    }

    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * superChars.length)
        var superArray = superChars.split("")
        var randomChar = superArray[randomIndex]
        console.log(randomChar);
    }

    return "hello"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
