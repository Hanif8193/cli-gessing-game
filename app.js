
import inquirer from "inquirer";
// computer genrate a random number.
// user input guessing number.
//compair user input with computer genrated number & show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation! you guess correct number");
}
else {
    console.log("you guess wrong answer");
}
