#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter Your First Number: ",
    type: "number",
    name: "FirstNumber",
  },
  {
    message: "Enter Your Second Number: ",
    type: "number",
    name: "SecondNumber",
  },
  {
    message: "Enter Your Operator: ",
    type: "list",
    name: "Operator",
    choices: ["+", "-", "*", "/"],
  },
]);

if (answer.Operator === "+") {
  console.log("Result: ", answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operator === "-") {
  console.log("Result: ", answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "*") {
  console.log("Result: ", answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "/") {
  console.log("Result: ", answer.FirstNumber / answer.SecondNumber);
}
