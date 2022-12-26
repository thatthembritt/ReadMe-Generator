// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message:
      "Please enter a brief description of your project. You can use this section to enter what your application does, why you used the technologies selected, and elaaborate on any challenges and future updates.",
    name: "description",
  },

  {
    type: "input",
    message: "Please enter installation instructions here.",
    name: "installation",
  },

  {
    type: "input",
    message:
      "Please include any usage directions here (including credentials i.e. username & password).",
    name: "usage",
  },

  {
    type: "input",
    message: "Please list project contributors.",
    name: "contributing",
  },

  {
    type: "input",
    message: "Please enter test for your application here.",
    name: "test",
  },

  {
    type: "checkbox",
    message: "Which license would you like to use for your project?",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
    name: "license",
  },

  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "github",
  },

  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
];

// write that string to a file w/ the ext md
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    fs.writeFileSync("./dist/README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
