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
      message: "1. What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "2. What is your project about?",
    },
    {
      type: "input",
      name: "motivation",
      message: "3. What was your motivation?",
    },
    {
      type: "input",
      name: "why",
      message: "3. Why did you build this project?",
    },
    {
      type: "input",
      name: "solve",
      message: "4. What problem does it solve?",
    },
    {
      type: "input",
      name: "learn",
      message: "5. What did you learn?",
    },
    {
      type: "input",
      name: "install",
      message: "6. What are steps to install your project?",
    },
    {
      type: "editor",
      name: "instructions",
      message:
        "7. What are the usage instructions? Please enter descriptions with pictures",
    },

    {
      type: "editor",
      name: "collaborators",
      message: "8. Enter the name and github of your collaborators (if any):",
    },
    {
      type: "editor",
      name: "sources",
      message:
        "10. What third-party assets or sources require attribution? If you followed tutorials, include links to those here as well. ",
    },
    {
      type: "list",
      choices: ["", "MIT", "BSD", "EPL", "GNU GPL v3"],
      name: "license",
      message: "11. What license are you adding to your project",
    },
    {
      type: "editor",
      name: "features",
      message: "12. What features does your project have?",
    },
    {
      type: "input",
      name: "contribute",
      message:
        "13. Include guidelines for how would like other developers to contribute in your project",
    },
    {
      type: "input",
      name: "test",
      message:
        "14. Write tests for your application. Then provide examples on how to run them here.",
    },
    {
      type: "input",
      name: "email",
      message: "15. Enter your email:",
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
