// TODO: Include packages needed for this applicatio
const inquirer = require("inquirer");
const fs = require("fs");
const gm = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "projTitle",
    message: "What is the title of your project?",
    response: "input",
  },
  {
    name: "projDesc",
    message: "How would you describe your project?",
    response: "input",
  },
  {
    name: "instInstruct",
    message: "What are the installation instructions?",
    response: "input",
  },
  {
    name: "useInfo",
    message: "What is the usage information?",
    response: "input",
  },
  {
    name: "contGuide",
    message: "What are the contribution guidelines?",
    response: "input",
  },
  {
    name: "testInstr",
    message: "What are the test instructions?",
    response: "input",
  },
  {
    name: "licensePref",
    message: "Which license would you like to use?",
    type: "rawlist",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    name: "gitHub",
    message: "What is your GitHub username?",
    response: "input",
  },
  {
    name: "emailAddr",
    message: "What is your email address?",
    response: "input",
  },
];

// ,
//
//

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log("success");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {

    writeToFile("./outputs/README.md", gm.generateMarkdown(answers));

  });
}

init();
