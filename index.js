// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project about?",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was your motivation?",
    },
    {
      type: "input",
      name: "why",
      message: "Why did you build this project?",
    },
    {
      type: "input",
      name: "solve",
      message: "What problem does it solve?",
    },
    {
      type: "input",
      name: "learn",
      message: "What did you learn",
    },
    {
      type: "input",
      name: "install",
      message: "What are steps to install your project?",
    },
    {
      type: "editor",
      name: "instructions",
      message: "What are the usage instructions?",
    },
    {
      type: "input",
      name: "titleImg1",
      message: "Enter a title for your first picture:",
    },
    {
      type: "input",
      name: "pathImg1",
      message:
        "Please insert the path for the first image of your app (example: assets/images/screenshot.png):",
    },
    {
      type: "input",
      name: "titleImg2",
      message: "Enter a title for your second picture:",
    },
    {
      type: "input",
      name: "pathImg2",
      message:
        "Please insert the path for the second image of your app (example: assets/images/screenshot.png):",
    },
    {
      type: "input",
      name: "titleImg3",
      message: "Enter a title for your thrid picture:",
    },
    {
      type: "input",
      name: "pathImg3",
      message:
        "Please insert the path for thrid image of your app (example: assets/images/screenshot.png)",
    },
    {
      type: "editor",
      name: "collaborators",
      message: "Enter the name and github of your collaborators:",
    },
    {
      type: "input",
      name: "sources",
      message:
        "What third-party assets or sources require attribution? If you followed tutorials, include links to those here as well. ",
    },
    {
      type: "list",
      choices: ["", "MIT", "BSD", "EPL", "GNU GPL v3"],
      name: "license",
      message: "What license are you adding to your project",
    },
    {
      type: "editor",
      name: "features",
      message: "What features does your project has?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Include guidelines for how would like other developers to contribute in your project",
    },
    {
      type: "input",
      name: "test",
      message:
        "Write tests for your application. Then provide examples on how to run them here",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email:",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  return fs.writeFileSync(filename, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => writeToFile("README.md", answers))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
