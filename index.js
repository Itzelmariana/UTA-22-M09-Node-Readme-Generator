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
      type: "input",
      name: "titleImg1",
      message: "Enter a title for your first picture:",
    },
    {
      type: "input",
      name: "pathImg1",
      message: "Please insert the path for the first image of your app:",
    },
    {
      type: "input",
      name: "titleImg2",
      message: "Enter a title for your second picture:",
    },
    {
      type: "input",
      name: "pathImg2",
      message: "Please insert the path for the second image of your app:",
    },
    {
      type: "input",
      name: "titleImg3",
      message: "Enter a title for your thrid picture:",
    },
    {
      type: "input",
      name: "pathImg3",
      message: "Please insert the path for thrid image of your app",
    },
    {
      type: "input",
      name: "colaborators",
      message: "Enter the name of your collaborators:",
    },
  ]);
};

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// //     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.
//`;

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
