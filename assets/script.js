/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

//Create arrays for password characters
//all numbers
const numberCharacters = [
  `1`, 
  `2`, 
  `3`, 
  `4`, 
  `5`, 
  `6`, 
  `7`, 
  `8`, 
  `9`
];

//all uppercase characters 
const uppercaseCharacters = [
  `A`, 
  `B`, 
  `C`, 
  `D`, 
  `E`, 
  `F`, 
  `G`, 
  `H`, 
  `I`,
  `J`, 
  `K`, 
  `L`, 
  `M`, 
  `N`, 
  `O`, 
  `P`, 
  `Q`, 
  `R`,
  `S`, 
  `T`, 
  `U`, 
  `V`, 
  `W`, 
  `X`, 
  `Y`, 
  `Z`
];

//all lowercase characters
const lowercaseCharacters = [
  `a`, 
  `b`, 
  `c`, 
  `d`, 
  `e`, 
  `f`, 
  `g`, 
  `h`, 
  `i`,
  `j`, 
  `k`, 
  `l`, 
  `m`, 
  `n`, 
  `o`, 
  `p`, 
  `q`, 
  `r`,
  `s`, 
  `t`, 
  `u`, 
  `v`, 
  `w`, 
  `x`, 
  `y`, 
  `z`
];

//the special characters (other than space) listed on the credited link
//side note - ran into an error using backtick with the right curly bracket. 
//fixed with using regular double quotes. look into this! 
const specialCharacters = [
  `!`, 
  `"`, 
  `#`, 
  `$`, 
  `%`, 
  `&`, 
  `'`, 
  `(`, 
  `)`,
  `*`, 
  `+`, 
  `,`, 
  `-`, 
  `.`, 
  `/`, 
  `:`, 
  `;`, 
  `<`,
  `=`, 
  `>`, 
  `?`, 
  `@`, 
  `[`, 
  `]`, 
  `^`, 
  `_`,
  "`", 
  `{`, 
  `|`, 
  "}",
  `~`
];

//write function for the following:
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

function passwordPrompts() {
  //use parseInt to return an integer from a string that the user enters
  const length = parseInt(
    //use window prompt() method to display a prompt box
    //with the specificed 8-128 
    prompt("Enter your desired password length as a number between 8 and 128")
  );
  //below add if statements for validation - alerts for invalid information entered  
  //if statement for if the length does not meet the previously stated requirements
  if (length > 128 || length < 8) {
    alert("Password length must be between 8 and 128");
    return;
  }

  //if statement to check if the entered text is a number 
  if (Number.isInteger(length) == false) {
    alert("Must enter a number");
    return;
  }

//create boolean confirm prompts for the user criteria. Names based on above arrays
var useNumberCharacters = confirm(
  "OK to use numbers"
);
var useUppercaseCharacters = confirm(
  "OK to use uppercase characters"
);

var useLowercaseCharacters = confirm(
  "OK to use lowercase characters"
);

var useSpecialCharacters = confirm(
  "OK to use special characters"
);

//user must select at least one type of character or else an alert takes place
if (
  useNumberCharacters === false && useUppercaseCharacters === false && 
  useLowercaseCharacters === false && useSpecialCharacters === false
) {alert("Select at least one type of character");
return;
}

//user input and information
const passwordCriteria = {
  length: length,
  useNumberCharacters: useNumberCharacters,
  useUppercaseCharacters: useUppercaseCharacters,
  useLowercaseCharacters: useLowercaseCharacters,
  useSpecialCharacters: useSpecialCharacters
};

return passwordCriteria;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
